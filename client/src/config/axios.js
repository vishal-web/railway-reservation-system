import axios from 'axios'
import { getEnv } from './config'
import { IS_PRODUCTION } from './constant'

export const axiosInstance = axios.create({
  baseURL: IS_PRODUCTION ? getEnv('API_ENDPOINT') : ''
})
