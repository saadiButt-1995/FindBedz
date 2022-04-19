import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { MapKey } from "./config";

export class AutoCompleteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      gmapsLoaded: false,
    };
  }

  initMap = () => {
    this.setState({
      gmapsLoaded: true,
    });
  };
  componentDidMount = () => {
    window.initMap = this.initMap;
    const gmapScriptEl = document.createElement(`script`);
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${MapKey}&libraries=places&callback=initMap`;
    document
      .querySelector(`body`)
      .insertAdjacentElement(`beforeend`, gmapScriptEl);
  };

  handleSelect = (address) => {
    this.setState({ address });
    geocodeByAddress(address)
      // .then((results) => console.log(getLatLng(results[0])))
      // .then((results) => {
      //   console.log(results);
      //   getLatLng(results[0]);
      //   // this.getPlaceInfo(results[0].place_id)
      // })
      // .then((latLng) => {
      //   console.log("Success", latLng);
      // })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("Successfully got latitude and longitude", { lat, lng });
        this.props.getCoords(lat + "," + lng);
      })
      .catch((error) => console.error("Error", error));
  };

  // getPlaceInfo = (place_id)=> {
  //   fetch(
  //     "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id="+place_id +
  //       "&radius=5000&key=AIzaSyDMlR4YuYz3KMPmTmOXSwQc7p6IS-a19Bs"
  //   )
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log('place data');
  //       console.log(responseJson.result);
  //       console.log(responseJson.result.geometry.location);
  //       this.props.getCoords(responseJson.result.geometry.location.lat+','+responseJson.result.geometry.location.lng)
  //     })
  //     .catch((error) => console.log(error));
  // }

  handleChange = (address) => {
    this.setState({ address });
  };

  render() {
    return (
      <>
        {this.state.gmapsLoaded && (
          <PlacesAutocomplete
            id="auto_search"
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <>
                <div className="col-md-12">
                  <input
                    className="form-control login_field"
                    autocomplete="off"
                    disabled={this.props.disable}
                    {...getInputProps({
                      placeholder: "Type your address",
                      className:
                        "location-search-input form-control login_field",
                      autocomplete: "off",
                      disabled: this.props.disable,
                    })}
                  />
                </div>
                <div className="col-md-12">
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </PlacesAutocomplete>
        )}
      </>
    );
  }
}

export default AutoCompleteInput;
// import React from 'react';
// import { withScriptjs } from 'react-google-maps';
// import { MapKey } from './config';
// import Map from './TestMap.js';

// const App = () => {
//   const MapLoader = withScriptjs(Map);

//   return (
//     <MapLoader
//       googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+MapKey}
//       loadingElement={<div style={{ height: `100%` }} />}
//     />
//   );
// };

// export default App
