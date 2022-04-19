import Disclosure from "../../components/Disclosure/Disclosure";
import PathsComponent from "./components/Paths/Paths";
import { Tag } from "../../types/Tag";
import { Paths } from "../../types/Paths";

interface ApiEndpointsProps {
  paths: Paths;
  tags: Tag[];
}

const groupByEndpoint = (obj: Paths) => {
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

const ApiEndpoints = ({ paths, tags }: ApiEndpointsProps) => {
  const groupedPaths = groupByEndpoint(paths);
  return (
    <>
      {tags.map((tag) => (
        <Disclosure
          key={tag.name}
          button={
            <span>
              <b className="pr-2">{tag.name}</b>
              <span className="text-xs"> {tag.description}</span>
            </span>
          }
          panel={<PathsComponent paths={groupedPaths[tag.name]} />}
        ></Disclosure>
      ))}
    </>
  );
};
export default ApiEndpoints;
