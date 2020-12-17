import React from "react";
// import logo from "./logo.svg";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Geocode from "react-geocode";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
// import Autocomplete from "react-google-autocomplete";
import List from "../components/List";
import ListContainer from "../components/List-container";
import Input from "../components/Input";
import "./map.css";
import AutoCompletePlaces from "../components/PlacesAutoComplete";
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
      console.log("Latitude", newLat, "Longitude", newLng),

      // this.setState({ mapPosition: {lat:newLat}, markerPosition: {lng:newLng} })
      // this.setState({mapPosition:{lat=}
      // })
      //  this.setState.state.mapPosition.lat.newLat,
      //   this.setState.state.mapPosition.lng.newLng,
      //   this.setState.state.markerPosition.lng.newLng,
      //   this.setState.state.markerPosition.lat.newLat,

      // console.log(newLat, newLng)

      //   this.setState{
      //     
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

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.setState({ mapPosition: latLng, markerPosition: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{
            lat: this.state.markerPosition.lat,
            lng: this.state.markerPosition.lng,
          }}
        >
          <Marker
            draggable={false}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          >
            <InfoWindow>
          <div>{this.state.address}</div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      ))
    );

    return (
      <div>
        <Navbar />

        {/* <Autocomplete

          // style={{
           
          //   // backgroundImage= none !important;
            
          //   // justifySelf: "center",
          //   // textAlign: "center",
          //   // marginLeft: "300px",
          //   // marginBottom: "10px",

          // }}
          types={["(cities)"]}
          
          // onPlaceSelected={this.onPlaceSelected}
        /> */}
        {/* <AddressBar/> */}
        <div className="container">
          {/* <Searchbar/> */}

          <div style={{ textAlign: "left" }}>
            <h3>
              <b>Food Sharing Locations</b>
            </h3>
          </div>

          <div className="row lg-12">
            <div className="col-xs-6 col-md-6">
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
              </ListContainer>
            </div>
            <div className="col-xs-12 col-md-6">
{/* <AutoCompletePlaces/> */}
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                style={{ justifyItems: "center" }}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className: "location-search-input",
                      })}
                    />
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
                )}
              </PlacesAutocomplete>
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
