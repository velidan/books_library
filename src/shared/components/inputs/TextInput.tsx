import * as React from "react";
import MaterialTextField from "@material-ui/core/TextField";

import _debounce from "lodash/debounce";
import _attempt from "lodash/attempt";

type Props = {
  value: string;
  id: string;
  label: string;
  onChange: (value: string) => void;
  validators: Validator[];
  [index: string]: any;
};

type State = {
  label: string;
  valid: boolean;
};

export default class TextField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      label: props.label,
      valid: false
    };
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;

    const val = e.target.value;

    _attempt(onChange, val);
  };

  render() {
    const { value, onChange, id, label, validators, ...others } = this.props;

    return (
      <MaterialTextField
        {...others}
        autoFocus
        margin="dense"
        id={id}
        label={label}
        type="text"
        value={value}
        onChange={this.handleOnChange}
        fullWidth
      />
    );
  }
}
