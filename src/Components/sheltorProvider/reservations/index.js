import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Wrapper } from "./reservations.styled";
import DashboardNav from "../../Auth/Navs/DashboardNav";
// import ReservationModal from "./ReservationModal"
import ReservationExtendModal from "./ReservationExtendModal";
import ReservationDeleteModal from "./ReservationDeleteModal";
import ReservationModal from "../../../ReservationModal";
import {
  cancelReservation,
  checkIn,
  checkOut,
  extendReservation,
  getAllReservations,
} from "../../../services/beds";
import moment from "moment";
import { toast } from "react-toastify";
import Spinner from "../../Loaders/buttonTailSpinner";

function Sheltordashboard() {
  const [user] = useState(JSON.parse(localStorage.getItem("user_data")));
  const [modal, setModal] = useState(false);
  const [modal_extend, setModalExtend] = useState(false);
  const [modal_delete, setModalDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reservation, setReservation] = useState("");
  const [held_for, setHeldFor] = useState("");

  const [reservations, setReservations] = useState([]);

  //   const [modal, setModal] = useState(false)
  //   console.log(modal);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openModalExtend = (item) => {
    setModalExtend(true);
    setReservation(item);
    setHeldFor(item.bedHeldFor);
  };
  const closeModalExtend = () => {
    setModalExtend(false);
  };
  const openModalDelete = (item) => {
    setModalDelete(true);
    setReservation(item);
  };
  const closeModalDelete = () => {
    setModalDelete(false);
  };

  const bedReserved = async () => {
    getAllReserves();
  };

  const getAllReserves = async () => {
    setLoading(true);
    try {
      var response = await getAllReservations(user.id);
      setLoading(false);
      setReservations(response.data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const cancelReserve = async () => {
    setLoading(true);
    try {
      await cancelReservation(reservation.id);
      setLoading(false);
      getAllReserves();
    } catch (e) {
      setLoading(false);
      toast.error(e.response.data, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const checkInn = async (reservation) => {
    setLoading(true);
    try {
      await checkIn(reservation.id);
      setLoading(false);
      getAllReserves();
    } catch (e) {
      setLoading(false);
      toast.error(e.response.data, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const checkOutt = async (reservation) => {
    setLoading(true);
    try {
      await checkOut(reservation.id);
      setLoading(false);
      getAllReserves();
    } catch (e) {
      setLoading(false);
      toast.error(e.response.data, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const extendReserve = async (hour) => {
    setLoading(true);
    if (hour === 0) {
      toast.error("Please enter time to hold a bed!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
      return;
    }
    try {
      await extendReservation(reservation.id, {
        howLong: parseFloat(hour) + parseFloat(reservation.howLong),
      });
      setLoading(false);
      getAllReserves();
      toast.success("Reservation Extended!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      setLoading(false);
      toast.error(e.response.data, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(e.response.data);
    }
  };

  const remaingTime = (reserveDate, hours) => {
    const now = new Date();
    const newDate = moment(reserveDate)
      .add(hours, "hours")
      .format("YYYY-MM-DD hh:mm:ss a");
    // const newDate = new Date(reserveDate);
    // newDate.setHours(newDate.getHours() + hours);
    // const remaingTime = (Math.abs(new Date(now) - new Date(newDate)))
    const remainingTime = (
      Math.abs(new Date(now) - new Date(newDate)) /
      (1000 * 60 * 60)
    ).toFixed(1);
    console.log(parseFloat(Number(remainingTime)) < 0.0);
    console.log(typeof remainingTime);
    if (parseFloat(remainingTime) < 0) {
      return `${(remainingTime * 60).toFixed()} Minutes Left`;
    } else {
      return `${remainingTime} Hours Left`;
    }
  };

  useEffect(() => {
    /* eslint-disable */
    getAllReserves();
  }, []);

  return (
    <>
      <Wrapper>
        <DashboardNav />
        <ReservationModal
          shelterId={user._id ? user._id : user.id}
          user={user}
          modal={modal}
          closeModal={closeModal}
          make={false}
          bedReserved={bedReserved}
        />
        <ReservationExtendModal
          user={user}
          modal={modal_extend}
          held_for={held_for}
          closeModal={closeModalExtend}
          extendReserve={extendReserve}
        />
        <ReservationDeleteModal
          user={user}
          modal={modal_delete}
          closeModal={closeModalDelete}
          cancelReserve={cancelReserve}
        />

        <div className="account">
          <img className="dashboard_image" src="/images/bed.svg" alt="" />
          <p className="header_title mt-2"> MANAGE RESERVATIONS </p>
          <div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <h4 className="table-title">BEDS CURRENTLY BEING HELD</h4>
                    <p className="table-text text-capitalize">
                      Last Updated On: {moment(user.updatedAt).fromNow()}
                    </p>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <div className="form-group">
                    <button
                      className="table-btn btn btn-lg table-title"
                      onClick={openModal}
                    >
                      {/* <i className="fa fa-plus fa-2x"></i>  */}+ NEW
                      RESERVATION
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <table class="reservation-table table ">
                      <thead
                        class="thead-inverse table-head"
                        style={{ borderRadius: "10px" }}
                      >
                        <tr>
                          <th>Bed Held For</th>
                          <th>Requested By</th>
                          <th>Reserved At</th>
                          <th>How Long</th>
                          <th>Remaining Time</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr className="text-center">
                            <td colSpan={6}>
                              <Spinner width="60" height="60" />
                              <p>Loading...</p>
                            </td>
                          </tr>
                        ) : (
                          <>
                            {reservations.map((item) => {
                              return (
                                <tr>
                                  <td>{item.bedHeldFor}</td>
                                  <td>{item.requestedBy}</td>
                                  <td>
                                    {moment(item.reservedAt).format(
                                      "D MMMM H:m A"
                                    )}{" "}
                                  </td>
                                  <td>{item.howLong} Hours</td>
                                  {/* <td>{moment.duration(remaingTime(item.reservedAt, item.howLong).asHours())} Hours Left</td> */}
                                  <td>
                                    {remaingTime(item.reservedAt, item.howLong)}
                                  </td>
                                  <td>
                                    <div className="reserve-action-btns">
                                      {item.checkin ? (
                                        <button
                                          className="text-secondary"
                                          onClick={() => checkOutt(item)}
                                        >
                                          CHECK OUT
                                        </button>
                                      ) : (
                                        <>
                                          <button
                                            className="text-primary"
                                            onClick={() =>
                                              openModalExtend(item)
                                            }
                                          >
                                            EXTEND
                                          </button>
                                          <button
                                            className="text-danger"
                                            onClick={() =>
                                              openModalDelete(item)
                                            }
                                          >
                                            CANCEL
                                          </button>
                                          <button
                                            className="text-success"
                                            onClick={() => checkInn(item)}
                                          >
                                            CHECK IN
                                          </button>
                                        </>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                            {reservations.length < 1 ? (
                              <tr className="text-center">
                                <td colSpan={6}>
                                  <p>No Data Found!</p>
                                </td>
                              </tr>
                            ) : null}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Sheltordashboard;
