import { JSONSchema4 } from "json-schema";

export interface Definitions {
  [key: string]: Definition;
}

export type Definition = JSONSchema4;
