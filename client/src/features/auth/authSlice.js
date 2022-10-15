import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isFetchingLoggedInUser: false,
  isUserLoggedIn: false,
  errorMessage: ''
}

const reducers = {
  setUserLoggedIn: (state, action) => {
    state.isUserLoggedIn = action.payload
  },
  setUserLoggedInUser: (state, action) => {
    state.user = action.payload
    if (action?.payload?.id) {
      state.isUserLoggedIn = true
    }
  },
  setFetchingLoggedInUser: (state, action) => {
    state.isFetchingLoggedInUser = action.payload
  },
  setErrorMessage: (state, action) => {
    state.errorMessage = action.payload
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    ...reducers
  }
})

export const {
  setUserLoggedIn,
  setUserLoggedInUser,
  setFetchingLoggedInUser,
  setErrorMessage
} = authSlice.actions

export default authSlice.reducer
