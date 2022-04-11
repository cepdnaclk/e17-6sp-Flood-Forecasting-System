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

  //states
  const [data, setData] = useState({
    Type: "",
    From: new Date(mm + "/" + dd + "/" + yyyy),
    To: new Date(mm + "/" + dd + "/" + yyyy),
  });

  const [from, onChange1] = useState(new Date(mm + "/" + dd + "/" + yyyy));
  const [to, onChange2] = useState(new Date(mm + "/" + dd + "/" + yyyy));
  const [table, setTable] = useState([]);

  //update changes
  const handleChange = (e) => {
    const type = "Type";
    const { name } = e.target;
    setData((prevState) => ({
      ...prevState,
      [type]: name,
    }));
  };

  const handleSubmit = (e) => {
    data["From"] = from;
    data["To"] = to;
    /*
    axios.post(`${URL}api/auth/signin-user`,data)
    .then(function (response) {}).
    .catch(function (error) {});
		*/

    setTable([
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
      {
        Testheader1: "data1",
        TestHeader2: "data2",
        TestHeader3: "data3",
        TestHeader4: "data4",
      },
    ]);
  };
  const table_items = table.map(function (item, i) {
    if (i === 0) {
      return (
        <>
          <tr key={"header"}>
            {Object.keys(table[0]).map((key) => (
              <th>{key}</th>
            ))}
          </tr>
          <tr key={item.id}>
            {Object.values(item).map((val) => (
              <td>{val}</td>
            ))}
          </tr>
        </>
      );
    } else {
      return (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      );
    }
  });

  return (
    <>
      <div className="container report">
        <div className="row filter">
          {
            <FaFilter
              style={{ color: "#766262", fontSize: "35px", paddingTop: "3px" }}
            />
          }

          <DropdownButton id="dropdown-basic-button" title="Select">
            <Dropdown.Item
              className="dropdown-item"
              onClick={handleChange}
              name="inflow"
              value="inflow"
            >
              In Flow
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdown-item"
              onClick={handleChange}
              name="outflow"
            >
              Out Flow
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdown-item"
              onClick={handleChange}
              name="rain"
            >
              Rain
            </Dropdown.Item>
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

          <button id="search" onClick={handleSubmit}>
            {<FaSearch style={{ color: "#766262", fontSize: "30px" }} />}
          </button>
        </div>
        <div className="body">
          <table id="table">{table_items}</table>
        </div>
      </div>
      {<Links />}
    </>
  );
}

function Links() {
  return (
    <div className="external">
      <h5>External Links</h5>
      <br />
      <div className="row">
        <div className="col-4">
          <a href="/Report">Link1</a>
        </div>
        <div className="col-4">
          <a href="/Report">Link2</a>
        </div>
        <div className="col-4">
          <a href="/Report">Link3</a>
        </div>
      </div>
    </div>
  );
}
