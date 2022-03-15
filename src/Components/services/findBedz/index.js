import React, {useEffect, useState} from "react";
import BedsHeader from "./BedsHeader";
import Abc from "./Abc";
import Bedservices from "./Bedservices";
import Filters from "./Filters";
import { Wrapper } from "./findbedz.styled";
import DashboardNav from '../../Auth/Navs/DashboardNav'
import { getBeds } from "../../../services/beds";
import GoogleMapModal from "./GoogleMap";

const FindAbed = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user_data')))
  const [map_modal, setMapModal] = useState(false)
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [shelter, setShelter] = useState({
    "food": [], "shelterIsFor": "",
    "amenities": [], "pets_allowed": [], "storage": "", "image": [], "isblock": false, 
    "role": "", "userName": "", "address": "", "shelterName": "", "phone": "", "email": "", 
    "password": "", "city": "", "state": "", "contact_person_name": "", "zipCode": "", "totalAllowedForReservation": 0,
    "totalNumberOfBeds": 0, "description": "", "rules": "", "maxTimeToHoldABed": 0, "id": ""
  })
  const [filters, setFilters] = useState({
    searchBy: '',
    address: '',
    currentLocation: true,
    upto: '',
    state: '',
    city: '',
    county: '',
    shelterIsFor: 'adults',
    limit: 100,
    page: 1,
  })

  const updateFilters = (filters) => {
    console.log(filters);
    setFilters(filters)
    if(!loading){
      findBeds()
    }
  }

  const updateShelter = (data) => {
    setShelter(data)
  }

  const findBeds = async()=> {    
    setLoading(true)
    try{
      var response = await getBeds(filters)
      setLoading(false)
      setData(response.data.results)
      if(response.data.results.length > 0){
        setShelter(response.data.results[0])
      }
    }
    catch(e){
      setLoading(false)
      console.log(e);
    }
  }

  const closeMapModal = () => {
    setMapModal(false)
  }

  const openMapModal = () => {
    setMapModal(true)
  }
  useEffect(()=> {
    /* eslint-disable */
    findBeds()
  }, [])

  return (
    <>
    <Wrapper>


      {/* <BedsHeader />
      <div class="account">
        <div className="find_services">
          <div className="filters">
            <Filters />
          </div>
          <div className="bed_services">
            <Bedservices />
          </div>
          <div className="abc_section">
            <Abc />
          </div>
        </div>
      </div> */}


    <DashboardNav/>
    <BedsHeader />
    <GoogleMapModal user={user} map_modal={map_modal} closeMapModal={closeMapModal}/> 
   
    <div class="account">
      <div class="row">
        <div class="col-md-3">
          <div className="filters">
            <Filters service={false} filters={filters} updateFilters={updateFilters} />
          </div>
        </div>
        <div class="col-md-6 m-0">
          <div class="beds">
            <Bedservices user={user} data={data} updateShelter={updateShelter} activeId={shelter.id} openMapModal={openMapModal}/>
          </div>
        </div>
        <div class="col-md-3 m-0 pl-0 pr-2">
          <div class="company">
            <Abc shelter={shelter} user={user}/>
          </div>
        </div>
    </div>
  </div>
  </Wrapper>
      
    </>
  );
};

export default FindAbed;
