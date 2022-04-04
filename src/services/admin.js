import {axios} from '../config'
import {login} from './auth'
// const user = localStorage.getItem("user")
// const token = `Bearer ${localStorage.getItem("token")}`

const shelterMonitoring = async(data) => {
    const response = await login(data)
    
}



export {
    shelterMonitoring
}