import React from "react";
import "./Input.css";

function Input() {
  return (
    <container className="card">
<span className="title"><h5>Please add details below</h5></span>

      {/* Submit Address */}
      <div className="row address">
        <div className="col">
          <input
            placeholder="Enter Donating  Address"
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
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
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          Canned Foods
        </label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck2" />
        <label class="custom-control-label" for="customCheck2">
          Breads / Grains
        </label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck3" />
        <label class="custom-control-label" for="customCheck3">
          Vegetables / Fruits
        </label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck3" />
        <label class="custom-control-label" for="customCheck3">
          Drinks
        </label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck4" />
        <label class="custom-control-label" for="customCheck4">
          Other
        </label>
      </div>

      {/* Description */}
      <textarea className="textarea" rows="4" cols="50" placeholder="Description / Comment">
        
      </textarea>
      <button type="button" className="btn btn-primary btn-sm">
        Add Description
      </button>
    </container>
  );
}

export default Input;
