import {axios} from '../config'

const user = localStorage.getItem("user")
const token = `Bearer ${localStorage.getItem("token")}`

const login = async(data) => {
    var response = await axios.post(`auth/login`, data)
    if (response.status === 200) {
        setLocalValues(response.data)
    return response
    }
}


const logout = async() => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('status')
    localStorage.removeItem('role')
    localStorage.removeItem('user_data')
}


const setLocalValues = async(data) => {
    var user = data.user
    var token = data.tokens
    var status = data.status
    var role = data.role

    localStorage.setItem('user', user)
    localStorage.setItem('token', token)
    localStorage.setItem('status', status)
    localStorage.setItem('role', role)

    setUsersData(user)
}

const setUsersData = async(user)=> {
    var result = await getUserDetails(user)
    localStorage.setItem('user_data', JSON.stringify(result.data.user))
}

const getUserDetails = async(user_query) => {
    return await axios.get(`users/${user_query}`)
}

const getShelterDetails = async(user_query) => {
    var result = await axios.get(`shelter/get?shelterId=${user_query}`)
    localStorage.setItem('user', user_query)
    localStorage.setItem('token', user_query)
    localStorage.setItem('status', true)
    localStorage.setItem('role', "shelter")
    localStorage.setItem("user_data", JSON.stringify(result.data.shelter))
}


const updateUserDetails = async(data) => {
    return await axios.put(`users/${user}`, data, {headers: {
        Authorization: token,
      }})
}

const individualSignup = async(data) => {
    return await axios.post(`auth/registerUser`, data)
}


const organizationSignup = async(data) => {
    return await axios.post(`auth/registerSheriff`, data)
}

const providerSignup = async(data) => {
    return await axios.post(`shelter/create`, data, {headers: {
        'Content-Type': 'multipart/form-data'
      }})
}





export {
    setLocalValues, 
    login, 
    logout, 
    individualSignup, 
    organizationSignup, 
    providerSignup, 
    updateUserDetails,
    setUsersData,
    getShelterDetails,
}