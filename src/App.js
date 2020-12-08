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
import Footer from "./components/Footer"
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
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

      Geocode.fromLatLng(newLat, newLng).then(response =>{
        console.log("response", response)
      })
      
      console.log("newLat =", newLat, "newLng =", newLng);
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
            position={{ lat: 44.986656, lng: -93.258133 }}
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
        <Searchbar />
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ justifyContent:"center", height: `400px`, width:`100%`}} />}
          mapElement={<div style={{ justifyContent:"center", height: `100%`, width:'100%' }} />}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
