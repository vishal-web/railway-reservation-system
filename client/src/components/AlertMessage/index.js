import { AlertTitle } from '@mui/material'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

// variant = outlined | filled |
// severity = success | warning | info | success

export const AlertMessage = ({
  message = 'This is a success alert — check it out!',
  onClose = () => {},
  severity = 'success',
  variant = '',
  color = '',
  title = '',
  open = false
}) => {
  if (!open) return null
  return (
    <Stack sx={{ width: '100%' }}>
      <Alert
        severity={severity}
        variant={variant}
        color={color}
        onClose={onClose}
        open={open}
      >
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        {message}
      </Alert>
    </Stack>
  )
}
