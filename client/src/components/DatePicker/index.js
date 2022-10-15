import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { TextField, Stack } from '@mui/material'
import { Controller } from 'react-hook-form'

export const DatePicker = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label={label}
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={onChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      )}
    />
  )
}
