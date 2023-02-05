import React from "react";
import DatePicker from "react-date-picker";
import { useState } from "react";
import { border } from "@mui/system";

function Form1() {
  const [value, onChange] = useState(new Date());
  const [dep, onDep] = useState(new Date());
  return (
    <div className="container">
      <form
        className="shadow-sm p-2 mb-3 bg-white rounded"
        style={{ background: "white", textAlign: "center" }}
      >
        <label>Who are you travelling with?</label>
        <div className="col-md-12">
          <input type="radio" name="travel" value="Myself" />
          <label>Myself</label>
          <input type="radio" name="travel" value="Friends" />
          <label>Friends</label>
          <input type="radio" name="travel" value="Kids" />
          <label>Kids</label>
          <input type="radio" name="travel" value="Parents" />
          <label>Parents</label>
          <input type="radio" name="travel" value="Extended Family" />
          <label>Extended Family</label>
        </div>
        <label>What type of trip are you looking for?</label>
        <div className="mb-3">
          <input type="radio" name="travel" value="Myself" />
          <label>Adventure</label>
          <input type="radio" name="travel" value="Friends" />
          <label>Low Key</label>
          <input type="radio" name="travel" value="Kids" />
          <label>Adrenaline</label>
          <input type="radio" name="travel" value="Parents" />
          <label>Family</label>
          <input type="radio" name="travel" value="Extended Family" />
          <label>Unique</label>
        </div>
        <label>How excited are you to play in snow</label>
        <div className="mb-3">
          <input type="radio" name="travel" value="Myself" />
          <label>Main reason we are coming!</label>
          <input type="radio" name="travel" value="Friends" />
          <label>Very!</label>
          <input type="radio" name="travel" value="Kids" />
          <label>Meh!</label>
          <input type="radio" name="travel" value="Parents" />
          <label>Don't want to touch it!</label>
        </div>
        <label>What kind of winter activites are you looking for?</label>
        <div className="mb-3 form-check">
          <input type="checkbox" name="travel" value="Myself" />
          <label>Myself</label>
          <input type="checkbox" name="travel" value="Friends" />
          <label>Friends</label>
          <input type="checkbox" name="travel" value="Kids" />
          <label>Kids</label>
          <input type="checkbox" name="travel" value="Parents" />
          <label>Parents</label>
          <input type="checkbox" name="travel" value="Extended Family" />
          <label>Extended Family</label>
        </div>
        <label>What dates are you coming?</label>
        <div className="mb-3">
          <label>Arrival</label>
          <DatePicker onChange={onChange} value={value} />
          <label>Departure</label>
          <DatePicker onChange={onDep} value={dep} />
        </div>
        <div>
          <button type="button" class="btn btn-outline-primary">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form1;
