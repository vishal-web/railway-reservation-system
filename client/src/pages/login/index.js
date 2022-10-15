import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AlertMessage, FormInputText, Layout, Topbar } from '../../components'
import { useForm } from 'react-hook-form'
import { Endpoints } from '../../config/endpoint'
import { useApi } from '../../hooks/useApi'
import LoadingButton from '@mui/lab/LoadingButton'
import { useNavigate } from 'react-router-dom'

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
  email: '',
  password: ''
}

export const Login = () => {
  const { postApi, loading } = useApi()

  const navigate = useNavigate()

  const [showAlert, setAlert] = React.useState({
    open: false,
    message: ''
  })

  const onSubmit = (data) => {
    postApi(Endpoints.LOGIN, {
      ...data
    })
      .then((resp) => {
        if (resp?.token) {
          reset(defaultValues)
          setAlert({})
          localStorage.setItem('token', resp.token)
          navigate('/')
        } else {
          setAlert({
            open: true,
            severity: 'error',
            message: resp?.message
          })
        }
      })
      .catch((error) => {
        const errorMsg =
          error?.response?.data?.error ||
          error?.response?.data?.message ||
          'Something went wrong.'

        setAlert({
          open: true,
          severity: 'error',
          message: errorMsg
        })
      })
  }

  const { handleSubmit, reset, control } = useForm({
    defaultValues
  })

  // const random = 'https://source.unsplash.com/random'

  return (
    <Layout>
      <Box
        sx={{
          my: 8,
          mx: 4,
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <FormInputText
            control={control}
            name="email"
            rules={{
              required: true
            }}
            label="Email Address"
            inputAttr={{
              margin: 'normal',
              autoFocus: true,
              fullWidth: true,
              id: 'email',
              autoComplete: 'given-name'
            }}
          />

          <FormInputText
            control={control}
            name="password"
            rules={{
              required: true
            }}
            label="Password"
            inputAttr={{
              margin: 'normal',
              fullWidth: true,
              id: 'password',
              autoComplete: 'current-password',
              type: 'password'
            }}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <LoadingButton
            color="secondary"
            loading={loading}
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Layout>
  )
}
