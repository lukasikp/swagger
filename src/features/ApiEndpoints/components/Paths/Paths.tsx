import { Paths } from "../../../../types/Paths";
import Disclosure from "../../../../components/Disclosure/Disclosure";

interface PathsComponentProps {
  paths: Paths;
}

const getFlattenPaths = (object: Record<string, any>) => {
  let arr: any[] = [];
  Object.keys(object).forEach((path) => {
    Object.keys(object[path]).forEach((method) => {
      arr.push({ ...object[path][method], path, method });
    });
  });
  return arr;
};

const PathsComponent = ({ paths }: PathsComponentProps) => {
  const flattenPaths = getFlattenPaths(paths);
  console.log(flattenPaths);
  return (
    <>
      {flattenPaths.map((path) => (
        <Disclosure
          key={`${path.method}-${path.path}`}
          button={
            <span>
              {path.method} -- {path.path}{" "}
            </span>
          }
          panel={<p>panel</p>}
        />
      ))}
    </>
  );
};
export default PathsComponent;
