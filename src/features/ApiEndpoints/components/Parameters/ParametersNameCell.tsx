import { Parameters } from "../../../../types/Paths";
const ParametersNameCell = (
  props: Pick<Parameters, "name" | "format" | "in" | "required">
) => (
  <>
    <span className="text-bold text-black block">
      {props.name}{" "}
      {props.required && <span className="text-red-400 text-xs">Required</span>}
    </span>
    <span className="text-xs block">
      {props.in}
      {props.format && <span className="italic pl-1">({props.format})</span>}
    </span>
  </>
);

export default ParametersNameCell;
