// import { message } from "antd";
import React, { useState } from "react";
// import firebase from "firebase/app";
import "firebase/database";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${from}&to=${to}`
      );
      if (!response.ok) {
        throw new Error("Response not received");
      }
      const data = await response.json();
      console.log(data);
      if (data && data.length > 0) { // Check if the data is valid before navigating
        navigate("/search", { state: { tickets: data } });
      } else {
        alert("No flights found");
      }
    } catch (error) {
      console.error(error);
      alert("Input is not valid");
    }
  };
  

  return (
    <div className="home">
      <div className="slogan">Let the journey begin...</div>
      <div className="input_bar">
        <div className="input_field">
          <div className="inpbox">
            <label htmlFor="from">From</label>
            <input
              type="text"
              placeholder="Amsterdam"
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="inpbox">
            <label htmlFor="to">To</label>
            <input
              type="text"
              placeholder="Stockhom"
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="inpbox">
            <label htmlFor="depart">Depart</label>
            <input type="date" id="depart" />
          </div>
          <div className="inpbox">
            <label htmlFor="depart">Return</label>
            <input type="date" id="depart" />
          </div>
          <div className="searchn">
            <button className="search_btn" onClick={handleClick}>
              Find Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
