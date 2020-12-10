import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import Autocomplete from "react-google-autocomplete";
import AddressBar from "./components/AddressBar"

// import Header from "../../../Portfolio-React/src/components/Header";

Geocode.setApiKey("AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo");

class App extends React.Component {
  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 44.986656,
      lng: -93.258133,
    },
    markerPosition: {
      lat: 44.986656,
      lng: -93.258133,
    },
  };

  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        console.log(response);
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        console.log("city", city, area, state);
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 44.986656, lng: -93.258133 }}
        >
          <Marker
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          >
            <InfoWindow>
              <div>
                Name:
                <br />
                Description: <br />
                Quantity:
              </div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      ))
    );

    return (
      <div>
        <Navbar />
        <Autocomplete
          style={{
            // justifySelf: "center",
            textAlign: "center",
            marginLeft: "300px",
            marginBottom: "10px",

          }}
          types={["(regions)"]}
          onPlaceSelected={this.onPlaceSelected}
        />
        {/* <AddressBar/> */}
          
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: "100%" }} />}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
