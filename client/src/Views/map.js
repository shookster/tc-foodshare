import React from "react";
// import logo from "./logo.svg";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
// import Autocomplete from "react-google-autocomplete";
import List from "../components/List";
import ListContainer from "../components/List-container";
import Input from "../components/Input"

// import Header from "../../../Portfolio-React/src/components/Header";

Geocode.setApiKey("AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo");

class Map extends React.Component {
  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 50,
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

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();
    console.log(event);

    Geocode.fromLatLng(newLat, newLng).then(
      console.log("Latitude", newLat, "Longitude", newLng)

      // this.setState({mapPosition.latnewLat,
      // })
      // // state.mapPosition.lat.newLat,
      // // this.setState.state.mapPosition.lng.newLng,
      // // this.setState.state.markerPosition.lng.newLng,
      // // this.setState.state.markerPosition.lat.newLat,

      // console.log(newLat, newLng)

      //   this.setState{
      //     address: "",
      // city: "",
      // area: "",
      // state: "",
      // zoom: 15,
      // height: 400,
      // mapPosition: {
      //   lat: newLat,
      //   lng: newLng,
      // },
      // markerPosition: {
      //   lat: newLat,

      //   lng: newLng
      // },
      //   }
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
                Address: 
              </div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      ))
    );

    return (
      <div>
        <Navbar />
        {/* <Autocomplete
          style={{
            // justifySelf: "center",
            textAlign: "center",
            marginLeft: "300px",
            marginBottom: "10px",

          }}
          types={["(regions)"]}
          onPlaceSelected={this.onPlaceSelected}
        /> */}
        {/* <AddressBar/> */}
        <div className="container"  >
        <Searchbar/>

          <div style={{ textAlign: "left" }}>
            <h3>
              <b>Food Sharing Locations</b>
            </h3>
          </div>
          
          <div className="row lg-12" >
            <div className="col-xs-6 col-md-6" >
              <ListContainer>
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
              </ListContainer>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                  <div style={{ height: `600px`, width: `100%` }} />
                }
                mapElement={<div style={{ height: `100%`, width: "100%" }} />}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Map;
