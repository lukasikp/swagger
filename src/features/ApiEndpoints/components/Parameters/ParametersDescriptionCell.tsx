import { Parameters } from "../../../../types/Paths";
import Schema from "../Schema/Schema";

const ParametersDescriptionCell = ({
  description,
  schema,
  uniqueId,
}: Pick<Parameters, "description" | "schema"> & { uniqueId: string }) => (
  <>
    <span className="text-bold text-black block">{description}</span>
    {schema && <Schema schema={schema} uniqueId={uniqueId} />}
  </>
);

export default ParametersDescriptionCell;
