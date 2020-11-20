import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";

const NumberFormatElement: React.ComponentType<any> = (props) => (
  <NumberFormat format="+38 (###) ###-####" mask="_" {...props} />
);

const PhoneField: React.ComponentType<TextFieldProps> = (props) => {
  return (
    <TextField
      InputProps={{
        inputComponent: NumberFormatElement,
      }}
      {...props}
    />
  );
};

export default PhoneField;
