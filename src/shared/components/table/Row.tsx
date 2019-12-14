import * as React from "react";

import { RoundButton } from "shared/components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

type Props<T> = {
  columnsData: HeadItem[];
  rowData: T;
  onEdit: (rowData: T) => void;
  onDelete: (rowData: T) => void;
};

export default function Row<T>(props: Props<T>) {
  const { columnsData, rowData, onEdit, onDelete } = props;

  return (
    <tr>
      {columnsData.map(o => (
        <td>{(rowData as any)[o.field]}</td>
      ))}
      <td>
        <RoundButton icon={<EditIcon />} onClick={() => onEdit(rowData)} />
        <RoundButton icon={<DeleteIcon />} onClick={() => onDelete(rowData)} />
      </td>
    </tr>
  );
}
