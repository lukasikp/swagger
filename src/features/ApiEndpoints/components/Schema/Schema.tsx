import { useContext } from "react";
import {
  DefinitionContext,
  DefinitionContextData,
} from "../../../../context/DefinitionsContext/DefinitionContext";
// @ts-ignore
import SchemaViewer from "material-ui-json-schema-viewer";
import { Definitions, Definition } from "../../../../types/Definitions";
import { JSONSchema4 } from "json-schema";

const findDefinition = ($ref: string, definitions: Definitions): Definition => {
  const definitionKey = $ref.split("/")[2];
  return definitions[definitionKey];
};

const buildSchema = (schema: JSONSchema4, definitions: Definitions) => {
  if (schema.$ref) return findDefinition(schema.$ref, definitions);
  if (schema.items && !(schema.items instanceof Array) && schema.items.$ref)
    return {
      ...schema,
      items: [findDefinition(schema.items.$ref, definitions)],
    };

  return schema;
};

interface SchemaProps {
  uniqueId: string;
  schema: JSONSchema4;
}

const Schema = ({ schema, uniqueId }: SchemaProps) => {
  const { definitions } = useContext(
    DefinitionContext
  ) as DefinitionContextData;

  const schemaData = {
    $id: `/schema${uniqueId}#`,
    ...buildSchema(schema, definitions),
  };

  return (
    <SchemaViewer
      schema={schemaData}
      references={[{ ...schemaData, definitions }]}
    />
  );
};

export default Schema;
