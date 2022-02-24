import React, { useState } from "react";
import Modal from 'react-modal';
import { Wrapper } from "./reservations.styled";
import ReservationConfirmExtendModal from "./ReservationConfirmExtendModal";

const ReservationExtendModal = ({user, modal, closeModal}) => {

    const [hour, setHour] = useState(0);  
    const [confirm, setConfirm] = useState(false);  

    const openConfirmModal = () => {
        closeModal()
        setConfirm(true)
    }
    const closeConfirmModal = () => {
        setConfirm(false)
    }
    const hourInc = () => {
        if (hour < 4) {
          setHour(hour + 0.5);
        } else {
          setHour(4);
        }
    };
    
    const hourDec = () => {
        if (hour > 0) {
          setHour(hour - 0.5);
        } else {
          setHour(0);
        }
    };

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width: '50%',
          borderRadius: '50px',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        input_labels: {
            fontFamily: `'Poppins', sans-serif`,
            fontWeight: 700,
        },
        username_input_div: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
        },
        username_btn: {
            fontFamily: `'Poppins', sans-serif`,
            fontWeight: 700,
            background: '#008E00',
            textAlign: 'center',
            color: 'black',
            width: '300px',
            height: '50px',
            border: 'none',
        }
    };


    return (
        <Wrapper>
        <ReservationConfirmExtendModal user={user} modal={confirm} closeModal={closeConfirmModal} />
        <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Reservation Modal"
            ariaHideApp={false}
        >
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center mb-3">
                        <h3 className="" style={customStyles.input_labels}>EXTEND RESERVATION</h3>
                    </div>
                    <div class="col-md-12">
                        <div className="form-group" style={customStyles.username_input_div}>
                            <button className="username-btn" style={customStyles.username_btn} onClick={closeModal} disabled> USERNAME </button>
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div className="progress_card mt-4">
                            <h4 className="">ADD THE FOLLOWING TIME</h4>
                            <div className="progress1" style={{marginTop: '-40px'}}>
                                <div className="cricle_div bluplus">{hour} Hr</div>
                                <div className="calcu_btns">
                                    <button
                                    className="plusbtn plusgreen bluplus"
                                    onClick={hourInc}
                                    // disabled={incVal === 0}
                                    >
                                    +
                                    </button>
                                    <button
                                    className="plusbtn color_red"
                                    onClick={hourDec}
                                    // disabled={incVal === 0}
                                    >
                                    -
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div className="signup_footer">
                            <button
                                className="signupbtn"
                                type={"button"}
                                onClick={openConfirmModal}
                            >
                                SUBMIT
                            </button>
                            <p className="footer_sign_up" onClick={closeModal}>CANCEL</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        </Wrapper>
    )
}
export default ReservationExtendModal