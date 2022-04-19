import { Request } from "../../../../types/Paths";
import SchemaComponent from "../Schema/Schema";
import Table from "../TableHeaders/TableHeaders";
import Parameters from "../Parameters/Parameters";

interface PanelProps {
  parameters?: Request["parameters"];
  responses: Request["responses"];
  uniqueId: string;
}

const Panel = ({ responses, uniqueId, parameters }: PanelProps) => {
  return (
    <div>
      <p className="text-lg text-black text-bold">Parameters</p>
      <div>
        {parameters && <Parameters parameters={parameters} />}
        <p className="text-lg text-black text-bold">Responses</p>
        {Object.keys(responses).map((status) => {
          const response = responses[status];
          return (
            <div key={`${uniqueId}/${status}`}>
              <p className="pt-4 pb-1 text-black">Code {status}</p>
              <p>{response.description}</p>
              {response.schema && (
                <SchemaComponent
                  schema={response.schema!}
                  uniqueId={`${uniqueId}/${status}`}
                />
              )}
              {response.headers && (
                <>
                  <p className="text-md">Headers</p>
                  <Table headers={response.headers!} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Panel;
