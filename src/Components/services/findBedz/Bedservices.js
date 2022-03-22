import React, {useState} from "react";
import ReservationModal from "../../../ReservationModal";
import Spinner from "../../Loaders/buttonTailSpinner";
import { Wrapper } from "./findbedz.styled";

export default function Bedservices({user, data, updateShelter, activeId, openMapModal, bedReserved, loading, show_available_beds, filters, total_beds, avail_beds}) {
  const [modal, setModal] = useState(false)
  const openModal = () => {
      setModal(true)
  }
  const closeModal = () => {
      setModal(false)
  }

  const renderBeds = () => {
    return data.map((item, index)=> {
      var show = false

      if(show_available_beds){
        if(item.totalAllowedForReservation){
          show = true
        }else{
          show = false
        }
      }else{
        show = true
      }
      // if(filters.shelterIsFor === item.shelterIsFor){
      //   show = true
      // }else{
      //   show = false
      // }
      if(show){
        return (
        <div key={index} className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2" style={{background: item.id === activeId?'rgba(221, 235, 255, 1)':''}} onClick={()=> updateShelter(item)}>
          {item.totalAllowedForReservation > 0?
            <div className="avail">
              <div className="cricle_div23 green">{item.totalAllowedForReservation}</div>
              <img
                className="ml-3"
                style={{ height: "30px" }}
                src="/images/sleepbed.svg"
                alt=""
              />
              <p className="avail_title m-3">available</p>
            </div>
            :
            <div className="avail">
              <div className="cricle_div23 red">{item.totalAllowedForReservation}</div>
              <img
                className="ml-3"
                style={{ height: "30px" }}
                src="/images/sleepbed.svg"
                alt=""
              />
              <p className="avail_title m-3">available</p>
            </div>
          }

          <div className="abc_personall">
            <div className="title_shelter">{item.shelterName}</div>
            <div className="adress_title">2.3 Miles Away</div>
            <div className="adress_title">
              {item.address} <br />
              {item.city}, {item.state} {item.zipCode}
            </div>
            <div className="adress_title">{item.phone}</div>
          </div>
          <div className="contactdiv">
            <div className="phonecall">
              <div style={{ textAlign: "center" }} className="pr-3 mt-1">
                <a href={`tel:${item.phone}`}>
                  <img className="m-2" src="/images/phone.svg" alt="" />
                  <div className="avail_title font10">CALL</div>
                </a>
              </div>
              <div style={{ textAlign: "center" }} className="pr-3" onClick={()=> openMapModal(item.coords)}>
                <img className="m-2" src="/images/location.svg" alt="" />
                <div className="avail_title font10">DIRECTIONS</div>
              </div>

              {user.role !== "user" ? (
                <div
                  style={{ textAlign: "center", marginTop: "-25px" }}
                  className="pr-3"
                >
                  <div className="cricle_div23 golden">3</div>
                  <div
                    className="avail_title font10"
                    style={{ marginTop: "-18px" }}
                  >
                    <button
                      style={{ border: "none" }}
                      className="reserve-btn"
                      onClick={openModal}
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        )
      }else{
        return (<></>)
      } 
    })
  }
  


  return (
    <Wrapper>

      
      <ReservationModal user={user} modal={modal} closeModal={closeModal} make={true} bedReserved={bedReserved} />
      <div className="bedservices mt-2 mb-5">
        <div className="available_round">
          <div className="avail_beds">
            <div className="round black">{total_beds}</div>
            <div>Total Beds</div>
          </div>
          <div className="avail_beds">
            <div className="round green">{avail_beds}</div>
            <div>Available Beds</div>
          </div>
        </div>
        <div className="abc_flex_sheltor"></div>
      </div>

      {loading?
      <div className="text-center">

        <Spinner width="60" height="60"  />
        <p>Loading...</p>
      </div>
      :
      <>
        {renderBeds()}

        {data.length < 1?
          <div className="text-center mt-5">
              <h1 className="no-shelter">No Shelter Available!</h1>
          </div>
        :null}
      </>
      }

    </Wrapper>
  );
}
