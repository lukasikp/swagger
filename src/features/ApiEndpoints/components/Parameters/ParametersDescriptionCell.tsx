import { Parameters } from "../../../../types/Paths";
import Schema from "../Schema/Schema";
const ParametersDescriptionCell = ({
  description,
  schema,
}: Pick<Parameters, "description" | "schema">) => (
  <>
    <span className="text-bold text-black block">{description}</span>
    {schema && <Schema schema={schema} uniqueId={"ff"} />}
  </>
);

export default ParametersDescriptionCell;
