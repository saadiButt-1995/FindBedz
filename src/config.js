import Axios from "axios"

const basePath = "https://shelterprovider.herokuapp.com/v1/"
Axios.defaults.baseURL = basePath
Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

const axios = Axios

export {axios, basePath}