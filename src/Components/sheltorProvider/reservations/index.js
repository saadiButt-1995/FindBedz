import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Wrapper } from "./reservations.styled"
import DashboardNav from "../../Auth/Navs/DashboardNav"
// import ReservationModal from "./ReservationModal"
import ReservationExtendModal from "./ReservationExtendModal"
import ReservationDeleteModal from "./ReservationDeleteModal"
// import ReservationModal from "./ReservationModal";

function Sheltordashboard() {
  const [user] = useState(JSON.parse(localStorage.getItem('user_data')))
  const [modal, setModal] = useState(false)
  const [modal_extend, setModalExtend] = useState(false)
  const [modal_delete, setModalDelete] = useState(false)
//   const [modal, setModal] = useState(false)
  console.log(modal);
    const openModal = () => {
        setModal(true)
    }
    // const closeModal = () => {
    //     setModal(false)
    // }
    const openModalExtend = () => {
        setModalExtend(true)
    }
    const closeModalExtend = () => {
        setModalExtend(false)
    }
    const openModalDelete = () => {
        setModalDelete(true)
    }
    const closeModalDelete = () => {
        setModalDelete(false)
    }

  return (
    <>
      <Wrapper>
      <DashboardNav/>
      {/* <ReservationModal user={user} modal={modal} closeModal={closeModal} make={false} /> */}
      <ReservationExtendModal  user={user} modal={modal_extend} closeModal={closeModalExtend} />
      <ReservationDeleteModal  user={user} modal={modal_delete} closeModal={closeModalDelete} />
      <div className="account">
        <img
          className="dashboard_image"
          src="/images/bed.svg"
          alt=""
        />
        <p className="header_title mt-2"> MANAGE RESERVATIONS </p>
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <h4 className="table-title">BEDS CURRENTLY BEING HELD</h4>
                            <p className="table-text">Last Updated On: 2 Hours Ago</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="form-group">
                            <button className="table-btn btn btn-lg table-title" onClick={openModal}>
                                {/* <i className="fa fa-plus fa-2x"></i>  */}
                                + NEW RESERVATION
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <table class="reservation-table table ">
                                <thead class="thead-inverse table-head" style={{borderRadius: '10px'}}>
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
                                    <tr>
                                        <td>George</td>
                                        <td>Sheriff Joe</td>
                                        <td>7:30 PM </td>
                                        <td>2 hours</td>
                                        <td>1 hour 20 minutes</td>
                                        <td>
                                            <div className="reserve-action-btns">
                                                <button className="text-primary" onClick={openModalExtend}>EXTEND</button>
                                                <button className="text-danger" onClick={openModalDelete}>CANCEL</button>
                                                <button className="text-success">CHECK IN</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>George</td>
                                        <td>Sheriff Joe</td>
                                        <td>7:30 PM </td>
                                        <td>2 hours</td>
                                        <td>1 hour 20 minutes</td>
                                        <td>
                                            <div className="reserve-action-btns">
                                                <button className="text-primary">EXTEND</button>
                                                <button className="text-danger">CANCEL</button>
                                                <button className="text-success">CHECK IN</button>
                                            </div>
                                        </td>
                                    </tr>
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
