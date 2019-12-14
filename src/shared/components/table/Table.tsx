import * as React from "react";

import Head from "./Head";
import Row from "./Row";

type Props<T> = {
  data: TableData<T>;
  actions: TableActions<T>;
};

export default function Table<T>(props: Props<T>) {
  const { data, actions } = props;

  return (
    <table>
      <thead>
        <Head data={data.columns} onAdd={actions.onRowAdd} />
      </thead>

      <tbody>
        {data.rows.map(rowData => {
          return (
            <Row<T>
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
