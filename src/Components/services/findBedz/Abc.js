import React, { useState } from "react";
import { Wrapper } from "./findbedz.styled";
import ReservationModal from "../../../ReservationModal";

function Abc() {
  const [user] = useState(JSON.parse(localStorage.getItem("user_data")));
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <Wrapper>
      <ReservationModal
        user={user}
        modal={modal}
        closeModal={closeModal}
        make={true}
      />
      <div className="company-page">
        <p className="update-time">LAST UPDATED 10 MINUTES AGO</p>
        <div className="">
          <div className="abc_personal">
            <div className="title_shelterr mt-5">SAINT FRANCIS SHELTER</div>
            {/* <div className="adress_title">
              <img className="m-1" src="/images/location.svg" alt="" />
              12 Miles Away
            </div> */}
            <div className="adress_title mt-1">
              <img className="m-1" src="/images/location.svg" alt="" />
              <span className="ml-2" style={{ fontWeight: "bold" }}>
                99 Main Street <br />
                <span className="p-rn">Santa Monica, CA 90403</span>
              </span>
            </div>
            <div className="adress_title mb-2">
              <img className="m-1" src="/images/phone.svg" alt="" />
              <span className="ml-2">(310) 555-9999</span>
            </div>

            <div className="available_round">
              <div className="avail_beds">
                <div className="round green">7</div>
                <img
                  className="available_image"
                  src="/images/sleepbed.svg"
                  alt=""
                />
                <p className="available_title">AVAILABLE BEDS</p>
              </div>
            </div>
            {user.role !== "user" ? (
              <div className="available_round">
                <div className="avail_beds">
                  <div className="round golden">3</div>
                  <img
                    className="available_image"
                    src="/images/sleepbed.svg"
                    alt=""
                  />
                  <p className="available_title">
                    AVAILABLE FOR RESERVATION
                    <>
                      <br />
                      click{" "}
                      <button style={{border:"none"}} className="reserve-btn" onClick={openModal}>
                        Reserve
                      </button>{" "}
                      to hold a bed
                    </>
                  </p>
                </div>
              </div>
            ) : null}

            <div className="company_images">
              <img className="largepic" src="/images/largepic.png" alt="" />
              <div className="mt-1">
                <img
                  className="mr-2 smallpic"
                  src="/images/smallpic1.png"
                  alt=""
                />
                <img
                  className="mr-2 smallpic"
                  src="/images/smallpic2.png"
                  alt=""
                />
                <img
                  className="mr-2 smallpic"
                  src="/images/smallpic3.png"
                  alt=""
                />
                <img
                  className="mr-2 smallpic"
                  src="/images/smallpic4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2 facilities">
              <div className="meals_section">
                <img src="/images/meals_offered.svg" alt="" />
                <span className="meals_title">MEALS OFFERED</span>
                <div className="mt-2 faciliites_list">
                  <span className="">BREAKFAST</span>
                  <span className="">LUNCH</span>
                  <span className="">DINNER</span>
                </div>
              </div>

              <div className="meals_section">
                <img src="/images/shelter_type.svg" alt="" />
                <span className="meals_title">TYPE OF SHELTER</span>
                <div className="mt-2 faciliites_list">
                  <span className="">FAMILY FRIENDLY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="meals_section">
            <span className="meals_title">DESCRIPTION</span>
            <p
              className="meals_description text-secondary"
              style={{ fontSize: "12px" }}
            >
              Saint Francis Shelter believes no one should have to live on the
              street or in a violent household. Our staff, volunteers and those
              we serve work together to address the effects of homelessness,
              poverty, mental and physical illness, abuse and addiction.
            </p>
          </div>

          <div className="meals_section" style={{ marginTop: "-10px" }}>
            <span className="meals_title">RULES / REQUIREMENTS</span>
            <div className="rules mt-1" style={{ color: "grey" }}>
              <div
                className="selected_icon mr-2 mt-1"
                style={{
                  width: "15px",
                  height: "15px",
                  background: "#101B79",
                  borderRadius: "50%",
                  float: "left",
                }}
              ></div>
              <label className="form-check-label" htmlFor="1">
                No Smoking (Except Cigars)
              </label>
            </div>
            <div className="rules mt-1" style={{ color: "grey" }}>
              <div
                className="selected_icon mr-2 mt-1"
                style={{
                  width: "15px",
                  height: "15px",
                  background: "#101B79",
                  borderRadius: "50%",
                  float: "left",
                }}
              ></div>
              <label className="form-check-label" htmlFor="2">
                CURFEW: 9:00 PM
              </label>
            </div>
            <div className="rules mt-1" style={{ color: "grey" }}>
              <div
                className="selected_icon mr-2 mt-1"
                style={{
                  width: "15px",
                  height: "15px",
                  background: "#101B79",
                  borderRadius: "50%",
                  float: "left",
                }}
              ></div>
              <label className="form-check-label" htmlFor="3">
                Hours of intake: 6:00 PM to 10:00 PM
              </label>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Abc;
