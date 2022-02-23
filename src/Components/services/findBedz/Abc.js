import React, {useState} from "react";
import { Wrapper } from "./findbedz.styled";

function Abc() {

  const [user] = useState(JSON.parse(localStorage.getItem('user_data')))
  return (
    <Wrapper>
      <div className="company-page">
        <p className="update-time">
          LAST UPDATED 10 MINUTES AGO
        </p>
        <div className="">
          <div className="abc_personal">
            <div className="title_shelter">ABC SHELTER</div>
            {/* <div className="adress_title">
              <img className="m-1" src="/images/location.svg" alt="" />
              12 Miles Away
            </div> */}
            <div className="adress_title mt-1">
              <img className="m-1" src="/images/location.svg" alt="" />
              <span className="ml-2">17 Billingsgate Avenue MALIBU,</span>
            </div>
            <div className="adress_title">
              <img className="m-1" src="/images/phone.svg" alt="" />
              <span className="ml-2">### ###-####</span>
            </div>

            <div className="available_round">
              <div className="avail_beds">
                <div className="round green">2</div>
                <img
                  className="available_image"
                  src="/images/sleepbed.svg"
                  alt=""
                />
                <p className="available_title">AVAILABLE BEDS</p>
              </div>
            </div>
            <div className="available_round">
              <div className="avail_beds">
                <div className="round golden">14</div>
                <img
                  className="available_image"
                  src="/images/sleepbed.svg"
                  alt=""
                />
                <p className="available_title">
                  AVAILABLE FOR RESERVATION
                  {user.role !== 'user'?
                  <>
                    <br/>
                    click <button className="reserve-btn">Reserve</button> to hold a bed  
                  </>
                  :null}
                </p>
              </div>
            </div>
            
            <div className="company_images">
              <img
                className="largepic"
                src="/images/largepic.png"
                alt=""
              />
              <div className="mt-1">
                <img className="mr-2 smallpic" src="/images/smallpic1.png" alt="" />
                <img className="mr-2 smallpic" src="/images/smallpic2.png" alt="" />
                <img className="mr-2 smallpic" src="/images/smallpic3.png" alt="" />
                <img className="mr-2 smallpic" src="/images/smallpic4.png" alt="" />
              </div>
            </div>
            <div className="mt-2 facilities" >
            
              <div className="meals_section">
                <img src="/images/meals_offered.svg" alt="" />
                <span className="meals_title" >
                  MEALS OFFERED
                </span>
                <div className="mt-2 faciliites_list">
                  <span className="">BREAKFAST</span>
                  <span className="">LUNCH</span>
                  <span className="">DINNER</span>
                </div>
              </div>

              <div className="meals_section">
                <img src="/images/shelter_type.svg" alt="" />
                <span className="meals_title" >
                  MEALS OFFERED
                </span>
                <div className="mt-2 faciliites_list">
                  <span className="">BREAKFAST</span>
                  <span className="">LUNCH</span>
                  <span className="">DINNER</span>
                </div>
              </div>
            </div>
          </div>
          <div className="meals_section">
            <span className="meals_title" >
              DESCRIPTION
            </span>
            <p className="meals_description text-secondary" style={{fontSize: '12px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, amet
              risus sodales fames ut felis. Nunc, urna massa, cursus in ultrices
              dictumst. Nibh orci vitae ut sagittis tellus feugiat vulputate
              mauris tempus. Volutpat maecenas tempor etiam egestas. Habitant.
            </p>
          </div>

          <div className="meals_section" style={{marginTop: '-10px'}}>
            <span className="meals_title" >
              RULES / REQUIREMENTS
            </span>
            <div className="rules mt-1" style={{ color: 'grey'  }}>
              <div className="selected_icon mr-2 mt-1" style={{width: '15px',height: '15px', background: '#101B79',borderRadius: '50%', float: 'left'}}></div>
              <label className="form-check-label" htmlFor="1"> No Smoking </label>
            </div>
            <div className="rules mt-1" style={{ color: 'grey'  }}>
              <div className="selected_icon mr-2 mt-1" style={{width: '15px',height: '15px', background: '#101B79',borderRadius: '50%', float: 'left'}}></div>
              <label className="form-check-label" htmlFor="2" > Curfew ( 9:00 pm ) </label>
            </div>
            <div className="rules mt-1" style={{ color: 'grey'  }}>
              <div className="selected_icon mr-2 mt-1" style={{width: '15px',height: '15px', background: '#101B79',borderRadius: '50%', float: 'left'}}></div>
              <label className="form-check-label" htmlFor="3"> Hours Of Intake </label>
            </div>
        </div>
      </div>
    </div>

    </Wrapper>
  );
}

export default Abc;
