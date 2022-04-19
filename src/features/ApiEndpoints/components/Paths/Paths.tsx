import { Paths, Method } from "../../../../types/Paths";
import Disclosure from "../../../../components/Disclosure/Disclosure";
import Panel from "../Panel/Panel";

interface PathsComponentProps {
  paths: Paths;
}

const PathsComponent = ({ paths }: PathsComponentProps) => {
  return (
    <>
      {Object.keys(paths).map((path) => {
        return (Object.keys(paths[path]) as Method[]).map((method) => (
          <Disclosure
            theme={method}
            key={`${path}-${method}`}
            button={
              <span>
                <span className="text-bold">{method.toUpperCase()}</span> {path}
              </span>
            }
            panel={
              <Panel
                responses={paths[path][method]?.responses!}
                parameters={paths[path][method]?.parameters}
                uniqueId={`${path}/${method}`}
              />
            }
          />
        ));
      })}
    </>
  );
};
export default PathsComponent;
