// TODO JSON SCHEMA TYPE

export interface Definitions {
  [key: string]: Definition;
}

export interface Definition {
  type: "object" | "array";
  properties?: DefinitionProperties;
  items?: any[];
  xml?: {
    name: string;
  };
  required?: [keyof DefinitionProperties];
  [key: string]: any;
}

interface DefinitionProperties {
  [key: string]: DefinitionProperty;
}

interface DefinitionProperty {
  type?: "integer" | "string" | "object" | "array";
  format?: "int32" | "int64";
  $ref?: string;
  example?: string;
  xml?: {
    wrapped: boolean;
  };
  items?: {
    type: "string";
    xml: {
      name: string;
    };
    $ref: string;
  };
  description: string;
  enum: string[];
}
