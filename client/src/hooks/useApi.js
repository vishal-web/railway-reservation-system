import { useState } from 'react'
import { axiosInstance } from '../config/axios'

export const useApi = () => {
  const [loading, setLoading] = useState(false)

  const getApi = (url, params = {}) => {
    setLoading(true)
    return axiosInstance
      .get(url, { params })
      .then(({ data }) => {
        return data
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        throw error
      })
  }

  const postApi = (url, params = {}) => {
    setLoading(true)
    return axiosInstance
      .post(url, params)
      .then(({ data }) => {
        return data
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        throw error
      })
  }

  const putApi = (url, params = {}) => {
    setLoading(true)
    return axiosInstance
      .put(url, { params })
      .then(({ data }) => {
        return data
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        throw error
      })
  }

  const deleteApi = (url, params = {}) => {
    setLoading(true)
    return axiosInstance
      .delete(url, { params })
      .then(({ data }) => {
        return data
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        throw error
      })
  }

  return {
    loading,
    getApi,
    postApi,
    putApi,
    deleteApi
  }
}
