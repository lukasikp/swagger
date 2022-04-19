import Table from "../../../../components/Table/Table";
import { Parameters } from "../../../../types/Paths";
import NameCell from "./ParametersNameCell";
import ParametersDescriptionCell from "./ParametersDescriptionCell";

interface ParametersProps {
  parameters: Parameters[];
}

const ParametersComponent = ({ parameters }: ParametersProps) => {
  const columns = [{ name: "Name" }, { name: "Description" }];
  const rows = parameters.map((param) => ({
    name: (
      <NameCell
        name={param.name}
        in={param.in}
        format={param.format}
        required={param.required}
      />
    ),
    description: (
      <ParametersDescriptionCell
        description={param.description}
        schema={param.schema}
      />
    ),
  }));

  return <Table columns={columns} data={rows} />;
};

export default ParametersComponent;
