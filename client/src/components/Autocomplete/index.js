import * as React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

export const FormInputAutocomplete = ({
  name,
  control,
  label,
  rules,
  defaultProps = {}
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { ref, onChange, value, ...field },
        fieldState: { error }
      }) => (
        <Autocomplete
          id="controlled-demo"
          {...defaultProps}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          fullWidth
          onChange={(_, data) => onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              {...field}
              error={!!error}
              fullWidth
              inputRef={ref}
              label={label}
            />
          )}
        />
      )}
    />
  )
}
