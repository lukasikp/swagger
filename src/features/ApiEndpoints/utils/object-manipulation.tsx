import { Paths } from "../../../types/Paths";

export const groupByEndpoint = (obj: Paths) => {
  return Object.keys(obj).reduce(
    (groupByEndpoint: { [key: string]: any }, path: string) => {
      const endpoint = path.split("/")[1];
      if (!groupByEndpoint[endpoint]) groupByEndpoint[endpoint] = {};
      groupByEndpoint[endpoint][path] = obj[path];
      return groupByEndpoint;
    },
    {}
  );
};
