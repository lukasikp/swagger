import { Paths } from "../../../../types/Paths";
import Disclosure from "../../../../components/Disclosure/Disclosure";
import Panel from "../Panel/Panel";

interface PathsComponentProps {
  paths: Paths;
}

const getFlattenPaths = (object: any) => {
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

  return (
    <>
      {flattenPaths.map((path) => (
        <Disclosure
          theme={path.method}
          key={`${path.method}-${path.path}`}
          button={
            <span>
              {path.method} -- {path.path}{" "}
            </span>
          }
          panel={<Panel responses={path.responses} path={path.path} />}
        />
      ))}
    </>
  );
};
export default PathsComponent;
