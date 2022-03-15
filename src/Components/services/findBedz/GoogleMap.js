import React, { Component } from "react";
import Modal from 'react-modal';
import { Wrapper } from "./GoogleMap.styled";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50%',
      borderRadius: '10px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    progress1: {
        
    }
};


class GoogleMapModal extends Component{

    static defaultProps = {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_LWPOTamnTLKR0IVa5pX_w2Zxo9hE0Sw&v=3.exp&libraries=geometry,drawing,places",
    }

    CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.children}
        </GoogleMap>
      ));

    render() {
        return (
            <>
            <Wrapper>
            <Modal
                isOpen={this.props.map_modal}
                onRequestClose={this.props.closeMapModal}
                style={customStyles}
                contentLabel="Reservation Modal"
                ariaHideApp={false}
            >
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <this.CMap
                            googleMapURL={this.props.googleMapURL}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `500px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            center= {{ lat: 25.03, lng: 121.6 }} 
                        >
                            <Marker
                                position={{ lat: -34.397, lng: 150.644 }}
                            />
                        </this.CMap>
                        </div>
                        <div class="col-md-12">
                            <div className="signup_footer">
                                <button
                                    className="signupbtn"
                                    type={"button"}
                                    onClick={this.props.closeMapModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            </Wrapper>
            </>
            
        );
    }
}

export default GoogleMapModal;