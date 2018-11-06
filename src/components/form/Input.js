import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({
  input,
  required,
  multiline,
  label,
  type,
  className,
  onChange,
  value,
  inputProps,
  meta: { touched, error, warning }
}) => (
  <div>
    <TextField
      {...input}
      label={label}
      className={className}
      type={type}
      defaultValue={input.value}
      value={value}
      required={required}
      multiline={multiline}
      inputProps={inputProps}
    />
    {touched &&
      ((error && <span className="text-danger">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)
