import React from "react";
// import React, { Component } from "react";
import Modal from 'react-modal';
import { Wrapper } from "./GoogleMap.styled";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import { MapKey } from "../../../config";

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

const GoogleMapModal = ({coords, map_modal, closeMapModal}) => {

    // const [latlng] = useState({ lat: parseFloat(coords.split(',')[0]), lng: parseFloat(coords.split(',')[1]) })
    const googleMapURL = "https://maps.googleapis.com/maps/api/js?key="+MapKey+"&v=3.exp&libraries=geometry,drawing,places"
    
    const CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: parseFloat(coords.split(',')[0]), lng: parseFloat(coords.split(',')[1]) }}
        >
            {props.children}
        </GoogleMap>
    ));
    return (
        <Wrapper>
            <Modal
                isOpen={map_modal}
                onRequestClose={closeMapModal}
                style={customStyles}
                contentLabel="Reservation Modal"
                ariaHideApp={false}
            >
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <CMap
                            googleMapURL={googleMapURL}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `500px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            center= {{ lat: parseFloat(coords.split(',')[0]), lng: parseFloat(coords.split(',')[1]) }} 
                        >
                            <Marker
                                position={{ lat: parseFloat(coords.split(',')[0]), lng: parseFloat(coords.split(',')[1]) }}
                            />
                        </CMap>
                        </div>
                        <div class="col-md-12">
                            <div className="signup_footer">
                                <button
                                    className="signupbtn"
                                    type={"button"}
                                    onClick={closeMapModal}
                                >
                                    Close {}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Wrapper>
    )
}
// class GoogleMapModal extends Component{

//     constructor(props) {
//         super(props)
//         this.state = {
//             latlng: { lat: parseFloat(props.coords.split(',')[0]), lng: parseFloat(props.coords.split(',')[1]) }
//         }
//     }

//     static defaultProps = {
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key="+MapKey+"&v=3.exp&libraries=geometry,drawing,places",
//     }

//     CMap = withScriptjs(withGoogleMap(props =>
//         <GoogleMap
//           defaultZoom={15}
//           defaultCenter={this.state.latlng}
//         >
//             {props.children}
//         </GoogleMap>
//     ));

//     render() {
//         return (
//             <>
//             <Wrapper>
//             <Modal
//                 isOpen={this.props.map_modal}
//                 onRequestClose={this.props.closeMapModal}
//                 style={customStyles}
//                 contentLabel="Reservation Modal"
//                 ariaHideApp={false}
//             >
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-12">
//                         <this.CMap
//                             googleMapURL={this.props.googleMapURL}
//                             loadingElement={<div style={{ height: `100%` }} />}
//                             containerElement={<div style={{ height: `500px` }} />}
//                             mapElement={<div style={{ height: `100%` }} />}
//                             center= {this.state.latlng} 
//                         >
//                             <Marker
//                                 position={this.state.latlng}
//                             />
//                         </this.CMap>
//                         </div>
//                         <div class="col-md-12">
//                             <div className="signup_footer">
//                                 <button
//                                     className="signupbtn"
//                                     type={"button"}
//                                     onClick={this.props.closeMapModal}
//                                 >
//                                     Close {this.state.latlng.lat}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>
//             </Wrapper>
//             </>
            
//         );
//     }
// }

export default GoogleMapModal;