import React, {useEffect, useState} from "react";
import BedsHeader from "./BedsHeader";
import Abc from "./Abc";
import Bedservices from "./Bedservices";
import Filters from "./Filters";
import { Wrapper } from "./findbedz.styled";
import DashboardNav from '../../Auth/Navs/DashboardNav';
import { getBeds } from "../../../services/beds";
import { SocketPath } from "../../../config";
import io from 'socket.io-client'


const FindAbed = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user_data')))
  const [loading, setLoading] = useState(false);
  const [total_beds, setTotalBeds] = useState(0);
  const [avail_beds, setAvailableBeds] = useState(0);
  const [show_available_beds, setShowAvailableBed] = useState(false);
  const [data, setData] = useState([])
  const [date, setDate] = useState(new Date())

  const [shelter, setShelter] = useState({
    "food": [], "shelterIsFor": "",
    "amenities": [], "pets_allowed": [], "storage": "", "image": [], "isblock": false, 
    "role": "", "userName": "", "address": "", "shelterName": "", "phone": "", "email": "", 
    "password": "", "city": "", "state": "", "contact_person_name": "", "zipCode": "", "totalAllowedForReservation": 0,
    "totalNumberOfBeds": 0, "description": "", "rules": "", "maxTimeToHoldABed": 0, "id": ""
  })
  const [filters, setFilters] = useState({
    searchBy: 'distance',
    address: '',
    currentLocation: true,
    upto: '2',
    state: '',
    city: '',
    county: '',
    shelterIsFor: 'adults',
    limit: 100,
    page: 1,
    userId: user._id,
    coords: '',
  })

  useEffect(()=> {
    /* eslint-disable */
 
    const socket = io(SocketPath);
    console.log(socket);

    // client-side
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
      findBeds(true)
      console.log('Connected');
      socket.emit('socketShelter')
    });

    socket.on('socketShelter', (data)=> {
      findBeds(false)
      setDate(new Date())
    })

    
    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
      console.log('Socket Disconnected!');
    });

    socket.on("connect_error", (error) => {
      // socket.connect();
      console.log('Socket Error: '+ error);
    });

  }, [])
  useEffect(()=> {
    /* eslint-disable */
    // findBeds()
  }, [])

  const updateFilters = (filters) => {
    setFilters(filters)
    // if(!loading){
      findBeds()
    // }
  }

  const toggleAvailableBeds = () => {
    setShowAvailableBed(!show_available_beds)
  }

  const updateShelter = (data) => {
    setShelter(data)
  }

  const findBeds = async(first)=> {    
    setLoading(true)
    try{
      var response = await getBeds(filters)
      setLoading(false)
      const shelters = response.data.shelters?response.data.shelters.results:response.data.shelters
      setData(shelters)
      setAvailableBeds(response.data.kpi[0].availableBeds)
      setTotalBeds(response.data.kpi[0].totalBeds)
      if(first){
        if(shelters.length > 0){
          setShelter(shelters[0])
        }else{
          setShelter({
            "food": [], "shelterIsFor": "",
            "amenities": [], "pets_allowed": [], "storage": "", "image": [], "isblock": false, 
            "role": "", "userName": "", "address": "", "shelterName": "", "phone": "", "email": "", 
            "password": "", "city": "", "state": "", "contact_person_name": "", "zipCode": "", "totalAllowedForReservation": 0,
            "totalNumberOfBeds": 0, "description": "", "rules": "", "maxTimeToHoldABed": 0, "id": ""
          })
        }
      }
    }
    catch(e){
      setLoading(false)
      console.log(e);
    }
  }


  const bedReserved = () => {
    // findBeds()
  }  

  useEffect(()=> {

  }, [])



  return (
    <>
    <Wrapper>

    <DashboardNav/>
    <BedsHeader />
   
    <div class="account">
      <div class="row">
        <div class="col-md-3">
          <div className="filters">
            <Filters service={false} filters={filters} updateFilters={updateFilters} toggleAvailableBeds={toggleAvailableBeds} show_available_beds={show_available_beds}/>
          </div>
        </div>
        <div class="col-md-6 m-0">
          <div class="beds">
            <Bedservices user={user} data={data} updateShelter={updateShelter} activeId={shelter.id} bedReserved={bedReserved} loading={loading} show_available_beds={show_available_beds} filters={filters} avail_beds={avail_beds} total_beds={total_beds}/>
          </div>
        </div>
        <div class="col-md-3 m-0 pl-0 pr-2">
          <div class="company">
            <Abc shelter={shelter} user={user} date={date}/>
          </div>
        </div>
    </div>
  </div>
  </Wrapper>
      
    </>
  );
};

export default FindAbed;
