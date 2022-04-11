import {axios} from '../config'

const getBeds = async(data) => {
    console.log(data);
    var query = ''
    if(data.searchBy === 'city')
        query += data.city?'city='+data.city+'&':'' 

    if(data.searchBy === 'county'){
        query += data.state?'state='+data.state+'&':'' 
        query += data.county?'county='+data.county+'&':'' 
    
    }
    if(data.searchBy === 'distance'){
        query += data.upto?'distance='+data.upto+'&':''
        query += data.coords?'coords='+data.coords+'&':''
    }
    if(data.userId !== ''){
        query += data.userId?'userId='+data.userId+'&':''
    }
    query += data.shelterIsFor?'shelterIsFor='+data.shelterIsFor+'&':'' 
    // query += data.city?'city='+data.city:'' 
    var response = await axios.get(`shelter/query?${query}`, data)
    if (response.status === 200) {
        return response
    }
}

const getAllReservations = async(shelterId, data) => {
    var query = `shelter/getReservations?shelterId=${shelterId}`
    var response = await axios.get(`${query}`, data)
    if (response.status === 200) {
        return response
    }
}

const getReservationDetail = async(reservationId) => {
    var query = `shelter/getReservation?reservationId=${reservationId}`
    var response = await axios.get(`shelter/query?${query}`)
    if (response.status === 200) {
        return response
    }
}

const reserveBed = async(shelterId, data) => {
    var query = `shelter/reservation?shelterId=${shelterId}`
    var response = await axios.post(query, data)
    return response
}

const extendReservation = async(reservationId, data) => {
    var query = `shelter/extendReservation?reservationId=${reservationId}`
    var response = await axios.post(query, data)
    if (response.status === 201) {
        return response
    }
}

const cancelReservation = async(reservationId) => {
    var query = `shelter/cancelReservation?reservationId=${reservationId}`
    var response = await axios.post(query)
    if (response.status === 201) {
        return response
    }
}

const checkIn = async (reservationId) => {
    var query = `shelter/checkin?reservationId=${reservationId}`
    var response = await axios.post(query)
    // if (response.status === 201) {
    return response
    // }
}

const checkOut = async (reservationId) => {
    var query = `shelter/checkout?reservationId=${reservationId}`
    var response = await axios.post(query)
    // if (response.status === 201) {
    return response
    // }
}


export {
    getBeds,
    reserveBed,
    extendReservation,
    getAllReservations,
    getReservationDetail,
    cancelReservation,
    checkIn,
    checkOut,
}