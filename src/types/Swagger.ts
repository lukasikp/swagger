import { Paths } from "./Paths";
import { Tag } from "./Tag";
import { Definitions } from "./Definitions";
export interface SwaggerResponse {
  definitions: Definitions;
  tags: Tag[];
  paths: Paths;
  [key: string]: any;
}
