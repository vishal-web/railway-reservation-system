import { Alert, AlertTitle, Snackbar } from '@mui/material'

// variant = outlined | filled |
// severity = success | warning | info | success

export const Toast = ({
  message = 'This is a success alert — check it out!',
  onClose = () => {},
  severity = 'success',
  variant = '',
  color = '',
  title = '',
  open = '',
  vertical = 'top',
  horizontal = 'right'
}) => {
  return (
    <Snackbar
      open={open}
      severity={severity}
      variant={variant}
      message={message}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical, horizontal }}
    />
  )
}
