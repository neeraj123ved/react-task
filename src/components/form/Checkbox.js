import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          {...input}
          value={input.name}
          iconstyle={{ fill: '#F1C40F' }}
          inputstyle={{ color: '#F1C40F' }}
          style={{ color: '#F1C40F' }}
        />
      }
      label={label}
    />
    {touched &&
      ((error && <span className="text-danger">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)
