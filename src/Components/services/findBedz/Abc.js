import React, { useState, useEffect } from "react";
import { Wrapper } from "./findbedz.styled";
import ReservationModal from "../../../ReservationModal";
import moment from "moment";

function Abc({ shelter, user, date }) {
  const [modal, setModal] = useState(false);
  const [masterImage, setMasterImage] = useState("");

  const openModal = (id) => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (shelter.image.length > 0) {
      changeImage(shelter.image[0]);
    }
  }, [shelter]);

  const changeImage = (image) => {
    setMasterImage(image);
  };

  const capitalize = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  return (
    <Wrapper>
      <ReservationModal
        shelterId={shelter.id}
        user={user}
        modal={modal}
        closeModal={closeModal}
        make={true}
      />
      {shelter.id !== "" ? (
        <>
          <div className="company-page">
            <p className="update-time">
              LAST UPDATED {moment(shelter.updatedAt).fromNow()}
            </p>
            <div className="">
              <div className="abc_personal">
                <div className="title_shelterr mt-2">{shelter.shelterName}</div>

                <div className="adress_title mt-1">
                  <img className="m-1" src="/images/location.svg" alt="" />
                  <span className="ml-2" style={{ fontWeight: "bold" }}>
                    <span>{shelter.address}</span> <br />
                    <span className="p-rn">
                      {shelter.city},{shelter.county} {shelter.state}{" "}
                      {shelter.zipCode}
                    </span>
                  </span>
                </div>
                <div className="adress_title mb-2">
                  <img className="m-1" src="/images/phone.svg" alt="" />
                  <span className="ml-2">{shelter.phone}</span>
                </div>

                <div className="available_round">
                  <div className="avail_beds">
                    <div
                      className={`round ${
                        shelter.availableBeds !== 0 ? "green" : "red"
                      }`}
                    >
                      {shelter.availableBeds}
                    </div>
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
                      <div className="round golden">
                        {shelter.availableReservationBeds}
                      </div>
                      <img
                        className="available_image"
                        src="/images/sleepbed.svg"
                        alt=""
                      />
                      <p className="available_title">
                        AVAILABLE FOR RESERVATION
                        <>
                          <br />
                          click
                          <button
                            style={{ border: "none" }}
                            className="reserve-btn ml-1 mr-1"
                            onClick={openModal}
                          >
                            Reserve
                          </button>
                          to hold a bed
                        </>
                      </p>
                    </div>
                  </div>
                ) : null}

                {shelter.image.length > 0 ? (
                  <div className="company_images">
                    <img
                      className="largepic"
                      src={masterImage}
                      alt=""
                      style={{
                        height: "250px",
                        width: "100%",
                        marginTop: "10px",
                      }}
                    />
                    {shelter.image.length > 1 ? (
                      <>
                        <div className="mt-1">
                          {shelter.image.map((image, index) => {
                            // if(index !== 0){
                            return (
                              <img
                                className="mr-2 smallpic"
                                src={image}
                                width="50px"
                                height="50px"
                                alt=""
                                onClick={() => changeImage(image)}
                              />
                            );
                            // }else{return(<></>)}
                          })}
                        </div>
                      </>
                    ) : null}
                  </div>
                ) : null}
                <div className="mt-2 facilities">
                  <div className="meals_section">
                    <img src="/images/meals_offered.svg" alt="" />
                    <span className="meals_title">MEALS OFFERED</span>
                    <div className="mt-2 faciliites_list">
                      {shelter.food.map((food) => {
                        return <span className="">{capitalize(food)}</span>;
                      })}
                      {shelter.food.length < 1 ? (
                        <span className="">None</span>
                      ) : null}
                    </div>
                  </div>

                  <div className="meals_section">
                    <img src="/images/shelter_type.svg" alt="" />
                    <span className="meals_title">TYPE OF SHELTER</span>
                    <div className="mt-2 faciliites_list">
                      <span className="">
                        {capitalize(shelter.shelterIsFor)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {shelter.description ? (
                <div className="meals_section">
                  <span className="meals_title" style={{ fontSize: "12px" }}>
                    DESCRIPTION
                  </span>
                  <p
                    className="meals_description text-secondary"
                    style={{ fontSize: "9px" }}
                  >
                    {shelter.description}
                  </p>
                </div>
              ) : null}

              {shelter.rules ? (
                <div className="meals_section" style={{ marginTop: "-10px" }}>
                  <span className="meals_title" style={{ fontSize: "12px" }}>
                    RULES / REQUIREMENTS
                  </span>
                  <div className="rules mt-1" style={{ color: "grey" }}>
                    <div
                      className="selected_icon mr-2 mt-1"
                      style={{
                        width: "10px",
                        height: "10px",
                        background: "#101B79",
                        borderRadius: "50%",
                        float: "left",
                      }}
                    ></div>
                    <p className="" htmlFor="1" style={{ fontSize: "10px" }}>
                      {shelter.rules}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </Wrapper>
  );
}

export default Abc;
