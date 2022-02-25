import React, {useState} from "react";
import ReservationModal from "../../../ReservationModal";
import { Wrapper } from "./findbedz.styled";

export default function Bedservices() {
  const [user] = useState(JSON.parse(localStorage.getItem('user_data')))
  const [modal, setModal] = useState(false)
  const openModal = () => {
      setModal(true)
  }
  const closeModal = () => {
      setModal(false)
  }
  return (
    <Wrapper>
      <ReservationModal  user={user} modal={modal} closeModal={closeModal} make={true} />
      <div className="bedservices mt-2 mb-5">
        <div className="available_round">
          <div className="avail_beds">
            <div className="round black">1500</div>
            <div>Total Beds</div>
          </div>
          <div className="avail_beds">
            <div className="round green">243</div>
            <div>Available Beds</div>
          </div>
        </div>
        <div className="abc_flex_sheltor"></div>
      </div>


      <div className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2">
        <div className="avail">
          <div className="cricle_div23 red">0</div>
          <img
            className="ml-3"
            style={{ height: "30px" }}
            src="/images/sleepbed.svg"
            alt=""
          />
          <p className="avail_title m-3">available</p>
        </div>
        <div className="abc_personall">
          <div className="title_shelter">LIGHT SOURCE</div>
          <div className="adress_title">2.3 Miles Away</div>
          <div className="adress_title">
          127 Topanga Canyon Blvd <br/>Malibu, CA 90265
          </div>
          <div className="adress_title">(310) 456-1234</div>
        </div>
        <div className="contactdiv">
          <div className="phonecall">
            <div style={{ textAlign: "center" }} className="pr-3 mt-1">
              <img className="m-2" src="/images/phone.svg" alt="" />
              <div className="avail_title font10">CALL</div>
            </div>
            <div style={{ textAlign: "center" }} className="pr-3">
              <img className="m-2" src="/images/location.svg" alt="" />
              <div className="avail_title font10">DIRECTIONS</div>
            </div>
            
            {user.role !== 'user'?
              <div style={{ textAlign: "center", marginTop: '-25px' }} className="pr-3">
                <div className="cricle_div23 golden">3</div>
                <div className="avail_title font10" style={{marginTop: '-18px'}}><button className="reserve-btn" onClick={openModal}>Reserve</button></div>
              </div> 
            :null}
                
          </div>
        </div>
      </div>

      <div className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2">
        <div className="avail">
          <div className="cricle_div23 green">3</div>
          <img
            className="ml-3"
            style={{ height: "30px" }}
            src="/images/sleepbed.svg"
            alt=""
          />
          <p className="avail_title m-3">available</p>
        </div>
        <div className="abc_personall">
          <div className="title_shelter">SAINT FRANCIS SHELTER</div>
          <div className="adress_title">12 Miles Away</div>
          <div className="adress_title">
          99 Main Street <br/>Santa Monica, CA 90403
          </div>
          <div className="adress_title">(310) 456-1234</div>
        </div>
        <div className="contactdiv">
          <div className="phonecall">
            <div style={{ textAlign: "center" }} className="pr-3 mt-1">
              <img className="m-2" src="/images/phone.svg" alt="" />
              <div className="avail_title font10">CALL</div>
            </div>
            <div style={{ textAlign: "center" }} className="pr-3">
              <img className="m-2" src="/images/location.svg" alt="" />
              <div className="avail_title font10">DIRECTIONS</div>
            </div>
            {user.role !== 'user'?
              <div style={{ textAlign: "center", marginTop: '-25px' }} className="pr-3">
                <div className="cricle_div23 golden">3</div>
                <div className="avail_title font10" style={{marginTop: '-18px'}}><button className="reserve-btn" onClick={openModal}>Reserve</button></div>
              </div> 
            :null}
          </div>
        </div>
      </div>
    
      <div className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2">
        <div className="avail">
          <div className="cricle_div23 green">7</div>
          <img
            className="ml-3"
            style={{ height: "30px" }}
            src="/images/sleepbed.svg"
            alt=""
          />
          <p className="avail_title m-3">available</p>
        </div>
        <div className="abc_personall">
          <div className="title_shelter">ABC SHELTER</div>
          <div className="adress_title">2.7 Miles Away</div>
          <div className="adress_title">
          17 Billingsgate Avenue<br/> West Los Angeles, CA 91118
          </div>
          <div className="adress_title">(310) 555-9898</div>
        </div>
        <div className="contactdiv">
          <div className="phonecall">
            <div style={{ textAlign: "center" }} className="pr-3 mt-1">
              <img className="m-2" src="/images/phone.svg" alt="" />
              <div className="avail_title font10">CALL</div>
            </div>
            <div style={{ textAlign: "center" }} className="pr-3">
              <img className="m-2" src="/images/location.svg" alt="" />
              <div className="avail_title font10">DIRECTIONS</div>
            </div>
            {user.role !== 'user'?
              <div style={{ textAlign: "center", marginTop: '-25px' }} className="pr-3">
                <div className="cricle_div23 golden">3</div>
                <div className="avail_title font10" style={{marginTop: '-18px'}}><button className="reserve-btn" onClick={openModal}>Reserve</button></div>
              </div> 
            :null}
          </div>
        </div>
      </div>
      <div className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2">
        <div className="avail">
          <div className="cricle_div23 red">0</div>
          <img
            className="ml-3"
            style={{ height: "30px" }}
            src="/images/sleepbed.svg"
            alt=""
          />
          <p className="avail_title m-3">available</p>
        </div>
        <div className="abc_personall">
          <div className="title_shelter">SOCAL MENS HOUSE</div>
          <div className="adress_title">8.7 Miles Away</div>
          <div className="adress_title">
          111 Rose Avenue<br/> Venice, CA 90211
          </div>
          <div className="adress_title">(800) 555-4321</div>
        </div>
        <div className="contactdiv">
          <div className="phonecall">
            <div style={{ textAlign: "center" }} className="pr-3 mt-1">
              <img className="m-2" src="/images/phone.svg" alt="" />
              <div className="avail_title font10">CALL</div>
            </div>
            <div style={{ textAlign: "center" }} className="pr-3">
              <img className="m-2" src="/images/location.svg" alt="" />
              <div className="avail_title font10">DIRECTIONS</div>
            </div>
            {user.role !== 'user'?
              <div style={{ textAlign: "center", marginTop: '-25px' }} className="pr-3">
                <div className="cricle_div23 golden">3</div>
                <div className="avail_title font10" style={{marginTop: '-18px'}}><button className="reserve-btn" onClick={openModal}>Reserve</button></div>
              </div> 
            :null}
          </div>
        </div>
      </div>
      <div className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2">
        <div className="avail">
          <div className="cricle_div23 green">3</div>
          <img
            className="ml-3"
            style={{ height: "30px" }}
            src="/images/sleepbed.svg"
            alt=""
          />
          <p className="avail_title m-3">available</p>
        </div>
        <div className="abc_personall">
          <div className="title_shelter">PATH TO HOPE</div>
          <div className="adress_title">10.2 Miles Away</div>
          <div className="adress_title">
          25999 Ventura Blvd<br/> Calabasas, CA 90309
          </div>
          <div className="adress_title">(818) 555-0007</div>
        </div>
        <div className="contactdiv">
          <div className="phonecall">
            <div style={{ textAlign: "center" }} className="pr-3 mt-1">
              <img className="m-2" src="/images/phone.svg" alt="" />
              <div className="avail_title font10">CALL</div>
            </div>
            <div style={{ textAlign: "center" }} className="pr-3">
              <img className="m-2" src="/images/location.svg" alt="" />
              <div className="avail_title font10">DIRECTIONS</div>
            </div>
            {user.role !== 'user'?
              <div style={{ textAlign: "center", marginTop: '-25px' }} className="pr-3">
                <div className="cricle_div23 golden">3</div>
                <div className="avail_title font10" style={{marginTop: '-18px'}}><button className="reserve-btn" onClick={openModal}>Reserve</button></div>
              </div> 
            :null}
          </div>
        </div>
      </div>
      <div className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2">
        <div className="avail">
          <div className="cricle_div23 green">3</div>
          <img
            className="ml-3"
            style={{ height: "30px" }}
            src="/images/sleepbed.svg"
            alt=""
          />
          <p className="avail_title m-3">available</p>
        </div>
        <div className="abc_personall">
          <div className="title_shelter">UPWARD BOUND</div>
          <div className="adress_title">14.7 Miles Away</div>
          <div className="adress_title">
          555 Oxnard Blvd<br/> Oxnard, CA 92225
          </div>
          <div className="adress_title">(805)555-9090</div>
        </div>
        <div className="contactdiv">
          <div className="phonecall">
            <div style={{ textAlign: "center" }} className="pr-3 mt-1">
              <img className="m-2" src="/images/phone.svg" alt="" />
              <div className="avail_title font10">CALL</div>
            </div>
            <div style={{ textAlign: "center" }} className="pr-3">
              <img className="m-2" src="/images/location.svg" alt="" />
              <div className="avail_title font10">DIRECTIONS</div>
            </div>
            {user.role !== 'user'?
              <div style={{ textAlign: "center", marginTop: '-25px' }} className="pr-3">
                <div className="cricle_div23 golden">3</div>
                <div className="avail_title font10" style={{marginTop: '-18px'}}><button className="reserve-btn" onClick={openModal}>Reserve</button></div>
              </div> 
            :null}
          </div>
        </div>
      </div>
      
    </Wrapper>
  );
}
