interface TableProps {
  columns: column[];
  data: data[];
}

type column = { name: string };
type data = { [key: column["name"]]: string | JSX.Element };

const Table = ({ columns, data }: TableProps) => {
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              {columns.map(({ name }) => (
                <th
                  key={`header-${name}`}
                  className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-left text-black"
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row, i) => (
              <tr key={`row-${i}`}>
                {columns.map(({ name }) => (
                  <td
                    key={`row-${i}-${name}`}
                    className="border-b border-slate-100 p-4 pl-8 text-slate-500 align-top"
                  >
                    {row[name.toLowerCase()]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
