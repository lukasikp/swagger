import { JSONSchema4 } from "json-schema";

export interface Paths {
  [path: string]: Path;
}

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export type Path = Partial<Record<Method, Request>>;

export interface Request {
  responses: {
    [status: string]: Response;
  };
  parameters?: Parameters[];
  [key: string]: any;
}

export interface Response {
  description: string;
  schema?: JSONSchema4;
  headers?: Headers;
}
export interface Headers {
  [key: string]: {
    type: string;
    format: string;
    description: string;
  };
}

export interface Parameters {
  name: string;
  in: string;
  description?: string;
  required: boolean;
  type: string;
  format?: string;
  schema?: JSONSchema4;
  items: {
    type: string;
    enum: string;
    default: string;
  };
  collectionFormat: string;
}
