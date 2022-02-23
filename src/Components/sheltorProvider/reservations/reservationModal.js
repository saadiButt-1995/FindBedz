import React, { useState } from "react";
import Modal from 'react-modal';
import { Wrapper } from "./reservations.styled";

const ReservationModal = ({user, modal, closeModal}) => {

    const [bed_holder, setBedHolder] = useState("")
    const [requester, setRequester] = useState("")
    const [hour, setHour] = useState(0);  
    // const [incVal, setIncVal] = useState(0);

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

    return (
        <Wrapper>
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
                        <h3 className="reserve_modal_title">NEW RESERVATION</h3>
                    </div>
                    <div class="col-md-6">
                        <div className="form-group login_inputs">
                            <label className="reserve_modal_input_label"> BED WILL BE HELD FOR </label>
                            <input name="text" value={bed_holder} onChange={(e)=> setBedHolder(e.target.value)} 
                            type="password" placeholder="Name Of Bed Holder" className="form-control login_field" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className="form-group login_inputs">
                            <label className="reserve_modal_input_label"> REQUESTED BY </label>
                            <input name="text" value={requester} onChange={(e)=> setRequester(e.target.value)} 
                            type="password" placeholder="Name of requester" className="form-control login_field" />
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div className="progress_card mt-4">
                            <h4 className="">ADD THE FOLLOWING TIME</h4>
                            <div className="progress1" style={{marginTop: '-10px'}}>
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
                                onClick={closeModal}
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