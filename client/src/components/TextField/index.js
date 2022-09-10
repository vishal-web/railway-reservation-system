import TextField from '@mui/material/TextField'

import { Controller } from 'react-hook-form'
import React from 'react'

export const FormInputText = ({ name, control, label, rules, inputAttr }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} label={label} error={!!error} {...inputAttr} />
      )}
    />
  )
}
