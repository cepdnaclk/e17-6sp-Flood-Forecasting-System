import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

import "./styles.css";

import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Report() {
  //today
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const [from, onChange1] = useState(new Date(mm + "/" + dd + "/" + yyyy));
  const [to, onChange2] = useState(new Date(mm + "/" + dd + "/" + yyyy));

  return (
    <>
      <div className="container report">
        <div className="row filter">
          {
            <FaFilter
              style={{ color: "#766262;", fontSize: "35px", paddingTop: "3px" }}
            />
          }

          <DropdownButton id="dropdown-basic-button" title="Select">
            <Dropdown.Item className="dropdown-item">In Flow</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Out Flow</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Rain</Dropdown.Item>
          </DropdownButton>

          <DatePicker
            onChange={onChange1}
            value={from}
            clearIcon={null}
            className="date"
          />
          <DatePicker
            onChange={onChange2}
            value={to}
            clearIcon={null}
            className="date"
          />

          <button id="search">
            {<FaSearch style={{ color: "#766262;", fontSize: "30px" }} />}
          </button>
        </div>
        <div className="body"></div>
      </div>
      {<Links />}
    </>
  );
}

function Links() {
  return (
    <div className="external">
      <h5>External Links</h5>
    </div>
  );
}
