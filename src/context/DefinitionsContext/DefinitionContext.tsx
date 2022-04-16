import React, { ReactNode, createContext } from "react";
import { Definitions, Definition } from "../../types/Definitions";
import { Paths, Path, Response } from "../../types/Paths";

export const DefinitionContext = createContext({});

export interface Schema extends Definition {
  $id: string;
  definitions: { [key: string]: any };
}

const findDefinition = ($ref: string, definitions: Definitions): Definition => {
  const definitionKey = $ref.split("/")[2];
  return definitions[definitionKey];
};

const buildShemas = (paths: Paths, definitions: Definitions): Schema[] => {
  const acc: Schema[] = [];
  Object.keys(paths).forEach((path) => {
    const pathData: Path = paths[path];
    Object.keys(pathData).forEach((request) => {
      const reqData = pathData[request];
      if (reqData?.responses)
        Object.keys(reqData.responses).forEach((status) => {
          const responseStatusData: Response = reqData.responses[status];
          const schema = responseStatusData?.schema;
          if (schema?.$ref)
            acc.push({
              $id: `/schema${path}/${status}#`,
              ...findDefinition(schema.$ref, definitions),
              // TODO
              definitions: {},
            });
          if (schema?.type === "array" && schema?.items?.$ref)
            acc.push({
              $id: `/schema${path}/${status}#`,
              type: "array",
              items: [findDefinition(schema.items.$ref, definitions)],
              // TODO
              definitions: {},
            });
          // type === object and type === string
          if (schema?.type)
            // @ts-ignore
            acc.push({
              $id: `/schema${path}/${status}#`,
              definitions: {},
              ...schema,
              // TODO
            });
        });
    });
  });
  return acc;
};

export interface DefinitionContextData {
  definitions: Definitions;
  swagger: any;
  schemas: Schema[];
}

export const DefinitionProvider = ({
  children,
  definitions,
  swagger,
}: {
  children: ReactNode;
  definitions: Definitions;
  swagger: any;
}) => {
  const { paths } = swagger;

  const schemas = buildShemas(swagger.paths, swagger.definitions);
  const value: DefinitionContextData = {
    definitions,
    swagger,
    schemas: schemas,
  };
  return (
    <DefinitionContext.Provider value={value}>
      {children}
    </DefinitionContext.Provider>
  );
};
