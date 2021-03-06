import React, { useState } from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import { checkIn, reserveBed } from "../../../services/beds";
import Spinner from "../../Loaders/buttonTailSpinner";
import { Wrapper } from "./reservations.styled";

const ReservationConfirmModal = ({
  shelterId,
  user,
  modal,
  data,
  closeModal,
  make,
  bedReserved,
  instant,
}) => {
  const [loading, setLoading] = useState(false);
  const customStyles = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#101B79",
    },
    header_title: {
      color: "white",
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 300,
    },
    confirm_btn: {
      background: "#FF1E1E",
      color: "white",
    },
    cancel_btn: {
      marginLeft: "30px",
      background: "transparent",
      border: "none",
      color: "white",
    },
  };

  const reserve = async () => {
    setLoading(true);

    try {
      var result = await reserveBed(shelterId, data);
      closeModal();
      setLoading(false);
      console.log(result);
      if (instant) {
        const reservation_id = result.data.reservation._id;
        await checkIn(reservation_id);
      }
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      bedReserved();
    } catch (e) {
      try {
        setLoading(false);
        toast.error(e.response.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (e) {
        window.location.reload("refresh");
      }
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Reservation Delete Modal"
        ariaHideApp={false}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center mb-3">
              <h5 className="" style={customStyles.header_title}>
                Do you really want to {make ? "make" : "Add"} this reservation ?
              </h5>
            </div>
            <div class="col-md-12 m-0 p-0">
              <div className="text-center">
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <button
                      className="signupbtn"
                      type={"button"}
                      onClick={reserve}
                      style={customStyles.confirm_btn}
                    >
                      YES
                    </button>
                    <button
                      onClick={closeModal}
                      style={customStyles.cancel_btn}
                    >
                      NO
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Wrapper>
  );
};
export default ReservationConfirmModal;
