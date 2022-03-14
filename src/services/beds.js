import {axios} from '../config'

const getBeds = async(data) => {
    var query = ''
    query += data.city?'city='+data.city+'&':'' 
    query += data.state?'state='+data.state+'&':'' 
    query += data.county?'county='+data.county+'&':'' 
    query += data.shelterIsFor?'shelterIsFor='+data.shelterIsFor+'&':'' 
    // query += data.city?'city='+data.city:'' 
    var response = await axios.get(`shelter/query?${query}`, data)
    if (response.status === 200) {
        return response
    }
}

const reserveBed = async(shelterId, data) => {
    var query = `shelter/reservation?shelterId=${shelterId}`
    var response = await axios.post(query, data)
    if (response.status === 201) {
        return response
    }
}


export {
    getBeds,
    reserveBed,
}