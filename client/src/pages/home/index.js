import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link
} from '@mui/material'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  DatePicker,
  FormInputAutocomplete,
  FormInputDropdown,
  FormInputText,
  Toast,
  Topbar
} from '../../components'

import { useDispatch, useSelector } from 'react-redux'

import { getAllStations } from '../../data/data'
import { fetchLoggedInUser } from '../../features/auth/authApi'

const picture =
  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1584&q=80'

const Copyright = (props) => {
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

const defaultValues = {
  // from: 1,
  // to: 2,
  type: '1'
}

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState({
    isOpen: false,
    message: '',
    severity: 'error'
  })

  const dispatch = useDispatch()

  const { handleSubmit, reset, control, getValues } = useForm({
    defaultValues
  })

  const onSubmit = (data) => {
    setLoading(true)
    setTimeout(() => setLoading(false), 5000)
  }

  const { errorMessage = '' } = useSelector((state) => state?.auth ?? {})

  useEffect(() => {
    dispatch(fetchLoggedInUser())
  }, [])

  // useEffect(() => {
  //   if (errorMessage) setShowToast({ isOpen: true, message: errorMessage })
  // }, [errorMessage])

  return (
    <Box>
      <Toast
        open={showToast.isOpen}
        message={showToast.message}
        onClose={() => setShowToast({ isOpen: false, message: '' })}
        severity={showToast?.severity || 'error'}
      />
      <Topbar />
      <Grid
        container
        component="main"
        sx={{
          height: '90vh',
          backgroundImage: `url(${picture})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          component={Paper}
          elevation={6}
          square
          sx={{
            my: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography component="h1" variant="h5">
              Book Ticket
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ marginTop: '16px' }}>
                  <FormInputAutocomplete
                    control={control}
                    name="from"
                    rules={{
                      required: true
                    }}
                    label="From"
                    defaultProps={{
                      options: getAllStations(),
                      getOptionLabel: (option) => option.title
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: '16px' }}>
                  <FormInputAutocomplete
                    control={control}
                    name="to"
                    rules={{
                      required: true
                    }}
                    label="To"
                    defaultProps={{
                      options: getAllStations(),
                      getOptionLabel: (option) => option.title
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: '16px' }}>
                  <DatePicker
                    label="Date of Journey"
                    control={control}
                    name="doj"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: '16px' }}>
                  <FormInputDropdown
                    name="type"
                    label="Type"
                    control={control}
                    inputAttr={{
                      palceholder: 'Type'
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="personWithDiability" color="primary" />
                    }
                    label="Person With Disability Concession"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox value="flexibleWithDate" color="primary" />
                    }
                    label="Flexible With Date"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="trainWithAvailableBerth"
                        color="primary"
                      />
                    }
                    label="Train with Available Berth "
                  />
                  <LoadingButton
                    color="secondary"
                    loading={loading}
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Search
                  </LoadingButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
