import React, { useState } from "react";
import "./Input.css";
import API from "../utils/API";
import Geocode from "react-geocode";
import { Marker } from "react-google-maps";

function InputCard() {
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [currentLat, setCurrentLat] = useState("");
  const [currentLng, setCurrentLng] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    
    API.saveLocation({
      address: address,
      category: category,
      item_description: description,
      lat: lat,
      lng: lng,
    });

    setAddress("");
    setCategory("");
    setDescription("");
     console.log(address, category, description)
  };

  const getPosition = (position) => {
    setLat (position.coords.latitude);
    setLng (position.coords.longitude);
    setAddress(position.coords.latitude + ", " + position.coords.longitude)
    console.log("CurrentLngLat", currentLat, currentLng)
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <container className="card inputCard">
      <span className="title">
        <h5>Please add details below</h5>
      </span>
      <form onSubmit={submitHandler}>
        {/* Submit Address */}
        <div className="row address">
          <div className="col">
            <input
            required="true"
              name="address"
              placeholder="Enter Donating  Address"
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={
                (Geocode.fromAddress(address).then(
                  (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    setLat(lat);
                    setLng(lng);

                    console.log(lat, lng, "Input Address", address);
                  },
                  (error) => {
                    console.error(error);
                  }
                ),
                (event) => setAddress(event.target.value))
              }
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn useMyLocation btn-success btn-md"
              onClick={getLocation}
            >
              Use My Location
            </button>
          </div>
        </div>
        {/* Food Category */}
        <b>Please Choose Food Category:</b>
        <div className="custom-control custom-checkbox">
          <input
            name="category"
            value="Canned Foods"
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            onChange={(event) => setCategory(event.target.value)}
          />
          <label className="custom-control-label" for="customCheck1">
            Canned Foods
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            name="category"
            value="Breads/Grains"
            type="checkbox"
            className="custom-control-input"
            id="customCheck2"
            onChange={(event) =>
              setCategory(category + "-- " + event.target.value)
            }
          />
          <label className="custom-control-label" for="customCheck2">
            Breads/Grains
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            name="category"
            value="Vegetables/Fruits"
            type="checkbox"
            className="custom-control-input"
            id="customCheck3"
            onChange={(event) =>
              setCategory(category + "-- " + event.target.value)
            }
          />
          <label className="custom-control-label" for="customCheck3">
            Vegetables/Fruits
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            name="category"
            value="Drink"
            type="checkbox"
            className="custom-control-input"
            id="customCheck4"
            onChange={(event) =>
              setCategory(category + "-- " + event.target.value)
            }
          />
          <label className="custom-control-label" for="customCheck4">
            Drinks
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            name="category"
            value="Other"
            type="checkbox"
            className="custom-control-input"
            id="customCheck5"
            onChange={(event) =>
              setCategory(category + "-- " + event.target.value)
            }
          />
          <label className="custom-control-label" for="customCheck5">
            Other
          </label>
        </div>
        {/* Description */}
        <textarea
          name="description"
          className="textarea"
          rows="4"
          cols="32"
          placeholder="Description / Comment"
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>{" "}
        <br />
        <button
          type="button"
          className="btn btn-primary btn-md"
          onClick={submitHandler}
        >
          Submit{" "}
        </button>
      </form>
    </container>
  );
}

export default InputCard;
