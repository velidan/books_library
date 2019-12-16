import * as React from "react";

import { RoundButton } from "shared/components";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  data: HeadItem[];
  onAdd: () => void;
};

export default function Head({ data, onAdd }: Props) {
  return (
    <tr className="table-head">
      {data.map(o => {
        return (
          <th key={o.field} className="table-head-row">
            {o.label}
          </th>
        );
      })}
      <th>
        {<RoundButton className="add" icon={<AddIcon />} onClick={onAdd} />}
      </th>
    </tr>
  );
}
