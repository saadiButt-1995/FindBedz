import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
class Map extends Component {

  constructor(props){
    super(props)
    this.state = {
      directions: {},
      myLatLng: { lat: 0, lng: 0 },
      otherLatLng: { lat: parseFloat(props.coords.split(',')[0]), lng: parseFloat(props.coords.split(',')[1]) }
    };
  }
 
  getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation
    
    if (location) {
        location.getCurrentPosition((position) => {
        this.setState( {myLatLng: {lat: position.coords.latitude, lng: position.coords.longitude} })
        return true
      }, (error) => {
        return false
        // toast.error('Error in getting location!')
      })
    }
  }

  componentDidMount() {
    console.log(this.getMyLocation);
    if(this.getMyLocation()){
      console.log(this.state.myLatLng);
      console.log(this.state.otherLatLng);
        const directionsService = new window.google.maps.DirectionsService();

        // const origin = this.state.myLatLng
        // const destination = this.state.otherLatLng;

        directionsService.route(
        {
            origin: this.state.myLatLng,
            destination: this.state.otherLatLng,
            travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          console.log(result);
            if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
                directions: result
            });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
        );
    }
  }

  render() {
    console.log(this.state.myLatLng);
    console.log(this.state.otherLatLng);
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={this.state.otherLatLng}
        defaultZoom={15}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
