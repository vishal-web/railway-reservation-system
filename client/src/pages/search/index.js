import { useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@mui/material'

import LoadingButton from '@mui/lab/LoadingButton'
import { useForm } from 'react-hook-form'

import {
  DatePicker,
  FormInputAutocomplete,
  FormInputDropdown,
  FormInputText,
  Topbar
} from '../../components'

import { useLocation } from 'react-router-dom'
import { RefreshOutlined } from '@mui/icons-material'

import { getAllStations } from '../../data/data'

const defaultValues = {
  // from: 1,
  // to: 2,
  type: '3'
}

export const Search = () => {
  const location = useLocation()
  const urlSearchParams = new URLSearchParams(location?.search)

  const urlSearchParamData = {
    from: urlSearchParams.get('from'),
    to: urlSearchParams.get('to'),
    type: urlSearchParams.get('type')
  }

  const { handleSubmit, control, setValue } = useForm({
    defaultValues
  })

  useEffect(() => {
    const { from = '', to = '', type = '1' } = urlSearchParamData

    if (from && to) {
      setValue(
        'from',
        getAllStations()?.find((row) => row?.value === +from)
      )
      setValue(
        'to',
        getAllStations()?.find((row) => row?.value === +to)
      )
    }

    setValue('type', type)
  }, [urlSearchParamData])

  const onSubmit = (data) => {
    console.log({
      data
    })
  }

  const loading = false

  return (
    <Box>
      <Topbar />
      <Container maxWidth="lg">
        <Box component={Paper} sx={{ my: 4, px: 2 }}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} direction="row">
              <Grid item sm={3}>
                <FormInputAutocomplete
                  control={control}
                  name="from"
                  rules={{
                    required: true
                  }}
                  label="From"
                  defaultProps={{
                    options: getAllStations(),
                    getOptionLabel: (option) => option?.title ?? ''
                  }}
                />
              </Grid>
              <Grid item sm={3}>
                <FormInputAutocomplete
                  control={control}
                  name="to"
                  rules={{
                    required: true
                  }}
                  label="To"
                  defaultProps={{
                    options: getAllStations(),
                    getOptionLabel: (option) => option?.title ?? ''
                  }}
                />
              </Grid>
              <Grid item sm={2}>
                <DatePicker
                  label="Date of Journey"
                  control={control}
                  name="doj"
                />
              </Grid>
              <Grid item sm={2}>
                <FormInputDropdown
                  name="type"
                  label="Type"
                  control={control}
                  inputAttr={{
                    palceholder: 'Type'
                  }}
                />
              </Grid>
              <Grid item sm={2}>
                <LoadingButton
                  color="warning"
                  loading={loading}
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{ py: 2 }}
                >
                  Modify Search
                </LoadingButton>
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
                    <Checkbox value="trainWithAvailableBerth" color="primary" />
                  }
                  label="Train with Available Berth "
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box component={Paper} sx={{ my: 4 }}>
          <Grid container sx={{ minHeight: 240 }}>
            <Grid
              container
              xs={12}
              sx={{
                px: 2,
                display: 'flex',
                direction: 'row',
                alignItems: 'center',
                backgroundColor: '#ccc',
                justifyContent: 'space-between'
              }}
            >
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  ADI DURONTO (12298)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Runs On: M T W T F S S
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <a href="...">Train Schedule</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sx={{
                px: 2,
                display: 'flex',
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Grid item>
                <Typography variant="subtitle1" component="div" fontSize={18}>
                  <strong>23:10</strong> | MUMBAI CENTRAL | Sun, 16 Oct
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div" fontSize={18}>
                  --- 06:10 ---
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div" fontSize={18}>
                  <strong>05:20</strong> | AHMEDABAD JN | Mon, 17 Oct
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sx={{
                px: 2,
                display: 'flex',
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
              spacing={2}
            >
              <Grid item sx={{ border: '1' }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    border: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '15px',
                    minHeight: 20,
                    padding: '10px'
                  }}
                  fontSize={18}
                >
                  <strong>AC 3 Economy (3E)</strong>
                  <span
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    Refresh <RefreshOutlined />{' '}
                  </span>
                </Typography>
              </Grid>
              <Grid item sx={{ border: '1' }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    border: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '15px',
                    minHeight: 20,
                    padding: '10px'
                  }}
                  fontSize={18}
                >
                  <strong>AC 2 Tier (2A)</strong>
                  <span
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    Refresh <RefreshOutlined />{' '}
                  </span>
                </Typography>
              </Grid>
              <Grid item sx={{ border: '1' }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    border: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '15px',
                    minHeight: 20,
                    padding: '10px'
                  }}
                  fontSize={18}
                >
                  <strong>AC 1 Tier (1A)</strong>
                  <span
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    Refresh <RefreshOutlined />{' '}
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              sx={{
                px: 2,
                display: 'flex',
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
              spacing={2}
            >
              <Grid item>
                <Button variant="contained" color="warning" size="large">
                  Book
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large">
                  Other Date
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
