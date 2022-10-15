import { Alert, AlertTitle, Snackbar } from '@mui/material'

// variant = outlined | filled |
// severity = success | warning | info | success

export const Toast = ({
  message = 'This is a success alert — check it out!',
  onClose = () => {},
  severity = 'success',
  variant = 'filled',
  color = '',
  title = '',
  open = '',
  vertical = 'top',
  horizontal = 'right'
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant={variant}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
