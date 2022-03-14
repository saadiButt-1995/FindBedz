import Axios from "axios"

const basePath = "https://find-bedz.herokuapp.com/v1/"
// const basePath = "http://192.168.11.127:5000/v1/"
Axios.defaults.baseURL = basePath
Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

const axios = Axios

export {axios, basePath}