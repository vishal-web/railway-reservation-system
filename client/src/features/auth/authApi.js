import { axiosInstance } from '../../config/axios'
import {
  setErrorMessage,
  setFetchingLoggedInUser,
  setUserLoggedInUser
} from './authSlice'
import { Endpoints } from '../../config/endpoint'

export const fetchLoggedInUser = () => (dispatch) => {
  dispatch(setFetchingLoggedInUser(true))

  axiosInstance
    .get(Endpoints.GET_LOGGED_IN_USER, {
      headers: {
        Authorization: `Bearer ${localStorage?.getItem('token') || ''}`
      }
    })
    .then((res) => {
      if (res?.data?.data?.user)
        dispatch(setUserLoggedInUser(res?.data?.data?.user))
    })
    .catch((e) => {
      const errorMessage =
        e?.response?.data?.error ||
        e?.response?.data?.message ||
        e?.message ||
        'Something went wrong..!'

      dispatch(setErrorMessage(errorMessage))
    })
    .finally(() => dispatch(setFetchingLoggedInUser(false)))
}
