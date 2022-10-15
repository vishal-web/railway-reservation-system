import axios from 'axios'
import { getEnv } from './config'
import { IS_PRODUCTION } from './constant'

const token = localStorage?.getItem('token') || ''

export const axiosInstance = axios.create({
  baseURL: IS_PRODUCTION ? getEnv('API_ENDPOINT') : '',
  headers: { Authorization: `Bearer ${token}` }
})
