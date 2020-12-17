import React, { useState } from "react";
import "./Input.css";
import API from "../utils/API";

function InputCard() {
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    API.saveLocation({
      address: address,
      category: category,
      item_description: description,
    });
  };

  return (
    <container className="card">
      <span className="title">
        <h5>Please add details below</h5>
      </span>
      <form onSubmit={submitHandler}>
        {/* Submit Address */}
        <div className="row address">
          <div className="col">
            <input
              name="address"
              placeholder="Enter Donating  Address"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div class="col">
            <button type="button" className="btn btn-success btn-md">
              Use My Location
            </button>
          </div>
        </div>
        {/* Food Category */}
        <b>Please Choose Food Category:</b>
        <div class="custom-control custom-checkbox">
          <input
            name="category"
            value="Canned Foods"
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
            onChange={(event) => setCategory(event.target.value)}
          />
          <label class="custom-control-label" for="customCheck1">
            Canned Foods
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            name="category"
            value="Breads/Grains"
            type="checkbox"
            class="custom-control-input"
            id="customCheck2"
            onChange={(event) => setCategory(category + "-- " + event.target.value)}
          />
          <label class="custom-control-label" for="customCheck2">
            Breads/Grains
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            name="category"
            value="Vegetables/Fruits"
            type="checkbox"
            class="custom-control-input"
            id="customCheck3"
            onChange={(event) => setCategory(category + "-- " + event.target.value)}
          />
          <label class="custom-control-label" for="customCheck3">
            Vegetables/Fruits
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            name="category"
            value="Drink"
            type="checkbox"
            class="custom-control-input"
            id="customCheck4"
            onChange={(event) => setCategory(category + "-- " + event.target.value)}
          />
          <label class="custom-control-label" for="customCheck4">
            Drinks
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            name="category"
            value="Other"
            type="checkbox"
            class="custom-control-input"
            id="customCheck5"
            onChange={(event) => setCategory(category + "-- " + event.target.value)}
          />
          <label class="custom-control-label" for="customCheck5">
            Other
          </label>
        </div>
        {/* Description */}
        <textarea
          name="description"
          className="textarea"
          rows="4"
          cols="50"
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
