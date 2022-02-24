import React, { useState } from "react";
import Modal from 'react-modal';
import { Wrapper } from "./reservations.styled";
import ReservationConfirmModal from "./ReservationConfirmModal";

const ReservationModal = ({user, modal, closeModal, make}) => {

    const [bed_holder, setBedHolder] = useState("")
    const [requester, setRequester] = useState("")
    const [hour, setHour] = useState(0);  
    const [confirm, setConfirm] = useState(false);  
    // const [incVal, setIncVal] = useState(0);

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
        progress1: {
            
        }
    };

    const input_labels = {
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: 700,
    }

    const crossBtn = {
        fontSize: '20px',
        float: 'right',
        background: '#101B79',
        color: 'white',
        padding: '3px 8px',
        borderRadius: '50%',
        cursor: 'pointer',
    }

    return (
        <Wrapper>
        <ReservationConfirmModal user={user} modal={confirm} closeModal={closeConfirmModal} make={make} />
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
                        <h3 className="reserve_modal_title" style={input_labels}>
                            New Reservation 
                            <span className="" style={crossBtn}  onClick={closeModal}>X</span>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <div className="form-group login_inputs">
                            <label className="reserve_modal_input_label" style={input_labels}> BED WILL BE HELD FOR </label>
                            <input name="text" value={bed_holder} onChange={(e)=> setBedHolder(e.target.value)} 
                            type="text" placeholder="Name of bed holder" className="form-control login_field" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className="form-group login_inputs">
                            <label className="reserve_modal_input_label" style={input_labels}> REQUESTED BY </label>
                            <input name="text" value={requester} onChange={(e)=> setRequester(e.target.value)} 
                            type="text" placeholder="Name of requester" className="form-control login_field" />
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div className="progress_card mt-4">
                            <h4 className="">ADD THE FOLLOWING TIME</h4>
                            <div className="progress1" style={{marginTop: '-40px'}}>
                                <div className="cricle_div bluplus">{hour} Hr</div>
                                <div className="calcu_btns">
                                    <button
                                    className="plusbtn"
                                    style={{background: '#DDC114', fontWeight: 'bold'}}
                                    onClick={hourInc}
                                    // disabled={incVal === 0}
                                    >
                                    +
                                    </button>
                                    <button
                                    className="plusbtn color_red"
                                    style={{fontWeight: 'bold'}}
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
// Modal.setAppElement('#App');
export default ReservationModal