import { useContext } from "react";
import { Path } from "../../../../types/Paths";
import Disclosure from "../../../../components/Disclosure/Disclosure";
import { json } from "stream/consumers";
import {
  DefinitionContext,
  Schema,
  DefinitionContextData,
} from "../../../../context/DefinitionsContext/DefinitionContext";
// @ts-ignore
import SchemaViewer from "material-ui-json-schema-viewer";

// import ReactJson from "react-json-view";
import { Definitions, Definition } from "../../../../types/Definitions";

interface PanelProps {
  responses: Path["responses"];
  path: string;
}

const referenceMap = (references: any) =>
  // @ts-ignore

  references.reduce((acc, schema) => {
    return { ...acc, [schema.$id]: schema };
  }, {});

const Panel = ({ responses, path }: PanelProps) => {
  const { schemas, swagger } = useContext(DefinitionContext) as {
    schemas: Schema[];
    swagger: any;
  };

  console.log(schemas);
  // const references = Object.keys(definitions).map((definitionName: string) => ({
  //   ...definitions[definitionName],
  //   $id: `/#/definitions/${definitionName}`,
  // }));
  // console.log(referenceMap(references));

  const schema = {
    $id: "/schemas/pet/{petId}/uploadImage/200#",
    definitions: {
      name: {
        type: "string",
      },
      address: {
        type: "object",
        description: "Full address of user",
        properties: {
          city: {
            type: "string",
            description: "Name of city of the address",
            pattern: "^[ -~]*$",
          },
          state: {
            type: "string",
            description: "Name of state of the address",
            maxLength: 20,
          },
        },
        additionalProperties: false,
        required: ["city", "state"],
      },
    },
    // getted from definitions/Apiresponse
    type: "object",
    properties: {
      code: {
        type: "integer",
        format: "int32",
      },
      type: {
        type: "string",
      },
      message: {
        type: "string",
      },
    },
    description: "successful operation",
  };
  // const buildShema = (path) => {
  //   return {
  //     $id: `/schemas/pet/{petId}/uploadImage/200#`,
  //   };
  // };
  const rrrr = [
    {
      $id: "/schemas/pet/{petId}/uploadImage#",
      definitions: {
        name: {
          type: "string",
        },
        address: {
          type: "object",
          description: "Full address of user",
          properties: {
            city: {
              type: "string",
              description: "Name of city of the address",
              pattern: "^[ -~]*$",
            },
            state: {
              type: "string",
              description: "Name of state of the address",
              maxLength: 20,
            },
          },
          additionalProperties: false,
          required: ["city", "state"],
          _type: "$ref",
          _name: "shipping_address",
          _id: "/schemas/ref-types/simple-reference#",
        },
      },
      type: "object",
      properties: {
        user_name: {
          $ref: "#/definitions/name",
        },
        shipping_address: {
          $ref: "#/definitions/address",
        },
      },
      title: "Simple Reference Example",
      description:
        "Demonstrates a case where the $ref points to a definition defined within the schema.\n\n  * references the `name` and `address` definitions",
    },
  ];

  return (
    <div>
      <p className="text-lg">Responses</p>
      <div>
        {Object.keys(responses).map((status) => {
          const respSchema = schemas.find(
            (schema) => schema.$id === `/schema${path}/${status}#`
          );
          console.log(schema);
          console.log(`/schema${path}/${status}#`);
          return (
            <div key={status}>
              <p className="pt-4 pb-1 text-black">Code {status}</p>
              <p>{responses[status].description}</p>
              {respSchema && <SchemaViewer schema={respSchema} />}
              {/* <SchemaViewer
    schema={{
      type: "object",
      properties: {
        id: {
          type: "integer",
          format: "int64",
        },
        category: {
          $ref: "#/definitions/Category",
        },
      },
    }}
    resources={[
      {
        $id: `/#/definitions/Category`,

        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
        },
        xml: {
          name: "Category",
        },
      },

      // {
      //   $id: `/#/definitions/Category`,

      //   type: "object",
      //   properties: {
      //     id: {
      //       type: "integer",
      //       format: "int64",
      //     },
      //     name: {
      //       type: "string",
      //     },
      //   },
      //   xml: {
      //     name: "Category",
      //   },
      // },
    ]}
  /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
// {
//   "ApiResponse": {
//       "type": "object",
//       "properties": {
//           "code": {
//               "type": "integer",
//               "format": "int32"
//           },
//           "type": {
//               "type": "string"
//           },
//           "message": {
//               "type": "string"
//           }
//       }
//   },

//   "Pet": {
//       "type": "object",
//       "required": [
//           "name",
//           "photoUrls"
//       ],
//       "properties": {
//           "id": {
//               "type": "integer",
//               "format": "int64"
//           },
//           "category": {
//               "$ref": "#/definitions/Category"
//           },
//           "name": {
//               "type": "string",
//               "example": "doggie"
//           },
//           "photoUrls": {
//               "type": "array",
//               "xml": {
//                   "wrapped": true
//               },
//               "items": {
//                   "type": "string",
//                   "xml": {
//                       "name": "photoUrl"
//                   }
//               }
//           },
//           "tags": {
//               "type": "array",
//               "xml": {
//                   "wrapped": true
//               },
//               "items": {
//                   "xml": {
//                       "name": "tag"
//                   },
//                   "$ref": "#/definitions/Tag"
//               }
//           },
//           "status": {
//               "type": "string",
//               "description": "pet status in the store",
//               "enum": [
//                   "available",
//                   "pending",
//                   "sold"
//               ]
//           }
//       },
//       "xml": {
//           "name": "Pet"
//       }
//   },
//   "Tag": {
//       "type": "object",
//       "properties": {
//           "id": {
//               "type": "integer",
//               "format": "int64"
//           },
//           "name": {
//               "type": "string"
//           }
//       },
//       "xml": {
//           "name": "Tag"
//       }
//   },
//   "Order": {
//       "type": "object",
//       "properties": {
//           "id": {
//               "type": "integer",
//               "format": "int64"
//           },
//           "petId": {
//               "type": "integer",
//               "format": "int64"
//           },
//           "quantity": {
//               "type": "integer",
//               "format": "int32"
//           },
//           "shipDate": {
//               "type": "string",
//               "format": "date-time"
//           },
//           "status": {
//               "type": "string",
//               "description": "Order Status",
//               "enum": [
//                   "placed",
//                   "approved",
//                   "delivered"
//               ]
//           },
//           "complete": {
//               "type": "boolean"
//           }
//       },
//       "xml": {
//           "name": "Order"
//       }
//   },
//   "User": {
//       "type": "object",
//       "properties": {
//           "id": {
//               "type": "integer",
//               "format": "int64"
//           },
//           "username": {
//               "type": "string"
//           },
//           "firstName": {
//               "type": "string"
//           },
//           "lastName": {
//               "type": "string"
//           },
//           "email": {
//               "type": "string"
//           },
//           "password": {
//               "type": "string"
//           },
//           "phone": {
//               "type": "string"
//           },
//           "userStatus": {
//               "type": "integer",
//               "format": "int32",
//               "description": "User Status"
//           }
//       },
//       "xml": {
//           "name": "User"
//       }
//   }
// }
export default Panel;
