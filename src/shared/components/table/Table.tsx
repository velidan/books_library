import * as React from "react";

import Head from "./Head";
import Row from "./Row";
import cn from "classnames";

type Props<T> = {
  className?: string;
  data: TableData<T>;
  actions: TableActions<T>;
};

export default function Table<T>(props: Props<T>) {
  const { data, actions, className } = props;

  return (
    <table className={cn("table", className)}>
      <thead>
        <Head data={data.columns} onAdd={actions.onRowAdd} />
      </thead>

      <tbody>
        {data.rows.map(rowData => {
          return (
            <Row<T>
              key={Object.values(rowData)[0]}
              rowData={rowData}
              columnsData={data.columns}
              onEdit={actions.onRowEdit}
              onDelete={actions.onRowDelete}
            />
          );
        })}
      </tbody>
    </table>
  );
}
