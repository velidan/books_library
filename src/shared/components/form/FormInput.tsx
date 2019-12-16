import * as React from "react";
import TextInput from "../inputs/TextInput";

type Props = {
  value: string;
  id: string;
  error: string;
  label: string;
  onChange: (value: string) => void;
  [index: string]: any; // any material field props
};

/* This component is a Bridge | Adapter abstraction layer
 * between Input implementation and Forms
 */
export default function FormInput(props: Props) {
  const { value, id, error, label, onChange, ...others } = props;

  const finalLabel = (error as string) || label;
  // Would be nice to add debounce to onChange to boos performance
  return (
    <TextInput
      {...others}
      id={id}
      label={finalLabel}
      error={Boolean(error)}
      value={value}
      onChange={onChange}
      name={id}
      type="text"
      margin="dense"
      fullWidth
    />
  );
}
