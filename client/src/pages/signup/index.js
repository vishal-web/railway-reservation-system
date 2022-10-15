import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AlertMessage, FormInputText, Layout, Toast } from '../../components'
import { useApi } from '../../hooks/useApi'
import { Endpoints } from '../../config/endpoint'
import { useForm } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

export const SignUp = () => {
  const { loading, postApi } = useApi()
  const [toast, setToast] = React.useState({
    open: false,
    message: ''
  })

  const [showAlert, setAlert] = React.useState({
    open: false,
    message: ''
  })

  const { handleSubmit, reset, control } = useForm({
    defaultValues
  })

  const onSubmit = (data) => {
    postApi(Endpoints.SIGNUP, {
      ...data
    })
      .then((resp) => {
        setAlert({
          open: true,
          severity: 'success',
          message: 'You have been successfully registered'
        })
        reset(defaultValues)
      })
      .catch((error) => {
        const errorMsg = error?.response?.data?.error || 'Something went wrong.'

        setAlert({
          open: true,
          severity: 'error',
          message: errorMsg
        })
      })
  }

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Toast open={toast.open} message={toast.message} />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <AlertMessage
              message={showAlert?.message}
              variant="filled"
              open={showAlert?.open}
              severity={showAlert?.severity}
              onClose={() => setAlert({})}
            />

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormInputText
                    control={control}
                    name="firstName"
                    rules={{
                      required: true
                    }}
                    label="First Name"
                    inputAttr={{
                      autoFocus: true,
                      fullWidth: true,
                      id: 'firstName',
                      autoComplete: 'given-name'
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormInputText
                    control={control}
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    rules={{
                      required: true
                    }}
                    inputAttr={{
                      fullWidth: true,
                      id: 'lastName',
                      autoComplete: 'family-name'
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormInputText
                    control={control}
                    label="Email Address"
                    name="email"
                    rules={{
                      required: true
                    }}
                    inputAttr={{
                      type: 'email',
                      fullWidth: true,
                      id: 'email',
                      autoComplete: 'email'
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormInputText
                    control={control}
                    fullWidth
                    name="password"
                    label="Password"
                    rules={{
                      required: true
                    }}
                    inputAttr={{
                      fullWidth: true,
                      type: 'password',
                      id: 'password',
                      autoComplete: 'new-password'
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <LoadingButton
                color="secondary"
                loading={loading}
                variant="contained"
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </Layout>
  )
}
