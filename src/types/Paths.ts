export interface Paths {
  [path: string]: Path;
}

export interface Path {
  [request: string]: Request;
}

export interface Request {
  responses: {
    [status: string]: Response;
  };
  [key: string]: any;
}

export interface Response {
  description: string;
  schema?: Schema;
}

export interface Schema {
  $ref: string;
  type?: string;
  items?: { $ref: string };
}
// type objectSchema = {
//   type?: string;
//   [key: string]: any;
// };
// type arraySchema = {
//   type: "array";
//   items?: { $ref: string; [key: string]: any };
// };
