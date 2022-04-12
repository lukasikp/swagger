import Disclosure from "../../components/Disclosure/Disclosure";
import PathsComponent from "./components/Paths/Paths";
import { Tag } from "../../types/Tag";
import { Paths } from "../../types/Paths";

interface ApiEndpointsProps {
  paths: Paths;
  tags: Tag[];
}

const filterObject = (obj: Record<string, any>, keyStartsWith: string) =>
  Object.keys(obj)
    .filter((key) => key.startsWith(keyStartsWith))
    .reduce((reduceObj: { [key: string]: any }, key) => {
      reduceObj[key] = obj[key];
      return reduceObj;
    }, {});

const reduceObj = (obj: Record<string, any>) => {
  console.log(Object.keys(obj));
  return Object.keys(obj).reduce(
    (reduceObj: { [key: string]: any }, path: string) => {
      const tag = path.split("/")[1];
      if (!reduceObj[tag]) reduceObj[tag] = {};
      reduceObj[tag][path] = obj[path];
      return reduceObj;
    },
    {}
  );
};

const ApiEndpoints = ({ paths, tags }: ApiEndpointsProps) => {
  const mappedPaths = reduceObj(paths);

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
          panel={<PathsComponent paths={mappedPaths[tag.name]} />}
        ></Disclosure>
      ))}
    </>
  );
};
export default ApiEndpoints;
