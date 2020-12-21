import React from "react";
// import logo from "./logo.svg";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
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
import API from "../utils/API";
// import Header from "../../../Portfolio-React/src/components/Header";

Geocode.setApiKey("AIzaSyD812o98-5qpcViO3kCoUa8mpd4eyflbPo");

class Map extends React.Component {
  state = {
    locations: [],
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 50,
    height: 400,
    LatLngId: [
      // LatLng = {
      //   lat: "",
      //   lng: ""
      // },
      // id =""
    ],
    mapPosition: {
      lat: 44.986656,
      lng: -93.258133,
    },
    markerPosition: {
      lat: 44.986656,
      lng: -93.258133,
    },
    filter: false,
    filteredLocation: [],
    InfoWindowShow: false,
    selectedLocation: null
    // this.state.locations ? this.state.locations.filter(location => location.address.toLocaleLowerCase().includes(this.state.address.toLocaleLowerCase())) : []
  };

  componentDidMount() {
    this.loadLocations();
  }

  storeLatLngId = () => {
    this.state.locations.map((location) => {
      const LatLngList = { lat: "", lng: "" };
      return (
        (LatLngList.lat = location.lat),
        (LatLngList.lng = location.lng),
        this.state.LatLngId.push(LatLngList, location.id)
      );
    });
  };

  loadLocations = () => {
    API.getLocation()
      .then((res) => {
        this.setState({ locations: res.data });
        // this.storeLatLng();
        console.log("Location list", this.state.locations);
        console.log("LatLng List", this.state.LatLng);
      })
      .catch((err) => console.log(err));
  };

  // onMarkerDragEnd = (event) => {
  //   let newLat = event.latLng.lat();
  //   let newLng = event.latLng.lng();
  //   console.log(event);

  // };

  handleChange = (address) => {
    this.setState({ address: address });
    this.setState({ filter: address ? true : false });
    this.setState({
      filteredLocation: this.state.locations.filter((location) =>
        location.address
          .toLocaleLowerCase()
          .includes(this.state.address.toLocaleLowerCase())
      ),
    });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.setState({ mapPosition: latLng, markerPosition: latLng });
        console.log(
          "Success",
          latLng,
          "mapPosition -",
          this.state.mapPosition,
          "markerPosition -",
          this.state.markerPosition
        );
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    // this.loadLocations();
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{
            lat: this.state.markerPosition.lat,
            lng: this.state.markerPosition.lng,
          }}
        >
          {/* <Marker
            draggable={false}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          >
            {/* <InfoWindow>
              <div>{this.state.address}</div>
            </InfoWindow> */}
          {/* </Marker> */}

          <div>
            {this.state.locations.map((location, idx) => {
              if (this.state.selectedLocation != null && location.id != this.state.selectedLocation) return null;
              // console.log(parseInt(location.lat), idx);
              return this.state.InfoWindowShow ? (
                <Marker
                  id={location.id}
                  key={idx}
                  position={{
                    lat: parseFloat(location.lat),
                    lng: parseFloat(location.lng),
                  }}
                  title={location.address}
                >
                  <InfoWindow id={location.id}>
                    <div>{location.address}</div>
                  </InfoWindow>
                </Marker>
              ) : (
                <Marker
                  id={location.id}
                  key={idx}
                  position={{
                    lat: parseFloat(location.lat),
                    lng: parseFloat(location.lng),
                  }}
                />
              );
            })}
          </div>

          {/* <Marker
          
                position={{
                  lat: 45.0861,
                  lng: -93.2633,
                }}
              />; */}
          {/* {Geocode.fromAddress("Coon Rapids").then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              
              console.log(lat, lng);
            },
            (error) => {
              console.error(error);
            }
          )} */}
        </GoogleMap>
      ))
    );

    return (
      this.loadLocations,
      (
        <div className="mapContainer">
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
                  {!this.state.filter ? (
                    this.state.locations.map((location, idx) => {
                      return (
                        <List
                          id={location.id}
                          key={idx}
                          onClick={() => {
                            console.log("List onclick");
                          }}
                          address={location.address}
                          food={location.FoodItems[0].category}
                          description={location.FoodItems[0].item_description}
                        >
                          <button
                            id={location.id}
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                              !this.state.InfoWindowShow
                                ? this.setState({ InfoWindowShow: true })
                                : this.setState({ InfoWindowShow: false });

                                this.setState({ selectedLocation: location.id })
                              console.log(
                                "current location",
                                this.state.markerPosition,
                                this.state.mapPosition
                              );
                            }}
                          >
                            Show Location
                          </button>
                        </List>
                      );
                    })
                  ) : this.state.filteredLocation.length === 0 ? (
                    <h4>Sorry no Locations found in this area</h4>
                  ) : (
                    this.state.filteredLocation.map((filteredLocation, idx) => {
                      console.log(
                        "filtered filteredLocation",
                        filteredLocation
                      );
                      return (
                        <List
                          key={idx}
                          onClick={() => {
                            console.log("List onclick");
                          }}
                          address={filteredLocation.address}
                          food={filteredLocation.FoodItems[0].category}
                          description={
                            filteredLocation.FoodItems[0].item_description
                          }
                        >
                          {
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => {
                                !this.state.InfoWindowShow
                                  ? this.setState({ InfoWindowShow: true })
                                  : this.setState({ InfoWindowShow: false });
                                this.setState({ filter: true, selectedLocation: filteredLocation.id });
                                console.log(
                                  "current location",
                                  this.state.markerPosition,
                                  this.state.mapPosition
                                );
                              }}
                            >
                              Show Location
                            </button>
                          }
                        </List>
                      );
                    })
                  )}
                </ListContainer>
              </div>
              <div className="col-xs-12 col-md-6">
                {/* <AutoCompletePlaces/> */}
                <PlacesAutocomplete
                  searchOptions={"cities"}
                  // types={['city']}
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
                          placeholder: "Search Cities ...",
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
                ></MapWithAMarker>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )
    );
  }
}

export default Map;
