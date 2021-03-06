import React, { useState } from "react";
import ReservationModal from "../../../ReservationModal";
import Spinner from "../../Loaders/buttonTailSpinner";
import { Wrapper } from "./findbedz.styled";
import GoogleMapModal from "./GoogleMap";

export default function Bedservices({
  user,
  data,
  updateShelter,
  activeId,
  bedReserved,
  loading,
  show_available_beds,
  filters,
  total_beds,
  avail_beds,
}) {
  const [modal, setModal] = useState(false);
  const [map_modal, setMapModal] = useState(false);
  const [shelter, setShelter] = useState("");
  const [coords, setCoords] = useState("-34.397,150.644");
  const openModal = (id) => {
    setModal(true);
    setShelter(id);
  };
  const closeModal = () => {
    setModal(false);
  };

  const renderBeds = () => {
    return data.map((item, index) => {
      var show = false;

      if (show_available_beds) {
        if (item.availableReservationBeds) {
          show = true;
        } else {
          show = false;
        }
      } else {
        show = true;
      }

      if (show) {
        return (
          <div
            key={index}
            className="abc_details ml-1 mr-3 pl-3 pr-3 mb-2"
            style={{
              background: item.id === activeId ? "rgba(221, 235, 255, 1)" : "",
            }}
            onClick={() => updateShelter(item)}
          >
            {item.availableBeds > 0 ? (
              <div className="avail">
                <div className="cricle_div23 green">{item.availableBeds}</div>
                <img
                  className="ml-3"
                  style={{ height: "30px" }}
                  src="/images/sleepbed.svg"
                  alt=""
                />
                <p className="avail_title m-3">available</p>
              </div>
            ) : (
              <div className="avail">
                <div className="cricle_div23 red">{item.availableBeds}</div>
                <img
                  className="ml-3"
                  style={{ height: "30px" }}
                  src="/images/sleepbed.svg"
                  alt=""
                />
                <p className="avail_title m-3">available</p>
              </div>
            )}

            <div className="abc_personall">
              <div className="title_shelter">{item.shelterName}</div>
              {item.milesAway !== undefined && (
                <div className="adress_title">
                  {item.milesAway.toFixed(1)} Miles Away
                </div>
              )}
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
                <div
                  style={{ textAlign: "center" }}
                  className="pr-3"
                  onClick={() => openMapModal(item.coords)}
                >
                  <img className="m-2" src="/images/location.svg" alt="" />
                  <div className="avail_title font10">DIRECTIONS</div>
                </div>

                {user.role !== "user" ? (
                  <div
                    style={{ textAlign: "center", marginTop: "-25px" }}
                    className="pr-3"
                  >
                    <div className="cricle_div23 golden">
                      {item.availableReservationBeds}
                    </div>
                    <div
                      className="avail_title font10"
                      style={{ marginTop: "-18px" }}
                    >
                      <button
                        style={{ border: "none" }}
                        className="reserve-btn"
                        onClick={() => openModal(item.id)}
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      } else {
        return <></>;
      }
    });
  };

  const closeMapModal = () => {
    setMapModal(false);
  };

  const openMapModal = (coords) => {
    console.log(coords);
    setCoords(coords);
    setMapModal(true);
  };

  return (
    <Wrapper>
      <GoogleMapModal
        user={user}
        map_modal={map_modal}
        closeMapModal={closeMapModal}
        coords={coords}
      />

      <ReservationModal
        shelterId={shelter}
        user={user}
        modal={modal}
        closeModal={closeModal}
        make={true}
        bedReserved={bedReserved}
      />
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

      {loading ? (
        <div className="text-center">
          <Spinner width="60" height="60" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {renderBeds()}

          {data.length < 1 ? (
            <div className="text-center mt-5">
              <h1 className="no-shelter">No Shelter Available!</h1>
            </div>
          ) : null}
        </>
      )}
    </Wrapper>
  );
}
