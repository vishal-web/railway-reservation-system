import React from 'react'
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { Controller } from 'react-hook-form'

const options = [
  {
    label: 'All Classes',
    value: '1'
  },
  {
    label: 'AC 3 Tier (3A)',
    value: '2'
  },
  {
    label: 'AC 2 Tier (2A)',
    value: '3'
  },
  {
    label: 'AC 1 Tier (1A)',
    value: '4'
  },
  {
    label: 'AC 1 Tier (1A)',
    value: '5'
  },
  {
    label: 'Sleeper (SL)',
    value: '6'
  }
]

export const FormInputDropdown = ({ name, control, label, inputAttr }) => {
  const generateSelectOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`select-${name}-label`}
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={onChange}
            {...inputAttr}
          >
            {generateSelectOptions()}
          </Select>
        </FormControl>
      )}
    />
  )
}
