import React from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  TextField,
  CssBaseline,
  FormControlLabel,
  Button,
  Checkbox,
  Link
} from '@mui/material'

import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'

import { Topbar } from '..'

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

export const Layout = ({ handleSubmit = () => {}, children: Component }) => {
  return (
    <Box>
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
          {Component}
        </Grid>
      </Grid>
    </Box>
  )
}
