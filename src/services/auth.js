import {axios} from '../config'



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

    var result = await getUserDetails(user)
    localStorage.setItem('user_data', JSON.stringify(result.data.user))
    console.log(result.data);
}

const getUserDetails = async(user_query) => {
    return await axios.get(`users/${user_query}`)
}

const individualSignup = async(data) => {
    return await axios.post(`auth/registerUser`, data)
}


const organizationSignup = async(data) => {
    return await axios.post(`auth/registerSheriff`, data)
}

const providerSignup = async(data) => {
    return await axios.post(``, data)
}





export {setLocalValues, login, logout, individualSignup, organizationSignup, providerSignup}