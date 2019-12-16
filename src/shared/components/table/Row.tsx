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
      {columnsData.map(o => {
        const val = (rowData as any)[o.field];
        // a class to have a possibility to use CSS for a dedicated cell. Eg capitalize title
        return (
          <td key={val} className={o.field}>
            {val}
          </td>
        );
      })}
      <td>
        <RoundButton
          className="edit"
          icon={<EditIcon />}
          onClick={() => onEdit(rowData)}
        />
        <RoundButton
          className="delete"
          icon={<DeleteIcon />}
          onClick={() => onDelete(rowData)}
        />
      </td>
    </tr>
  );
}
