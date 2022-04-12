import { Paths } from "./Paths";
import { Tag } from "./Tag";

export interface SwaggerResponse {
  tags: Tag[];
  paths: Paths;
  [key: string]: any;
}
