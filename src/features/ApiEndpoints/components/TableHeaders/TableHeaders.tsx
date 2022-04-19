import { Headers } from "../../../../types/Paths";
import Table from "../../../../components/Table/Table";

interface TableProps {
  headers: Headers;
}

const getRows = (headers: Headers) => {
  return Object.keys(headers).map((name) => ({
    name,
    type: headers[name].type,
    description: headers[name].description,
    format: headers[name].format,
  }));
};

const TableHeaders = ({ headers }: TableProps) => {
  const columns = [
    { name: "Name" },
    { name: "Description" },
    { name: "Type" },
    { name: "Format" },
  ];
  return <Table columns={columns} data={getRows(headers)} />;
};

export default TableHeaders;
