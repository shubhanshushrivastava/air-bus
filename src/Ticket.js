import React, { useEffect, useState } from "react";
import "./ticket.css";

function Ticket({props}) {

  const { from, to, departure, returnDate, airlineName, via, price, duration } =
    props.data;
    const [flights, setFlights] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=Delhi&to=Goa`);
      const data = await response.json();
      setFlights(data);
    }

    fetchData();
  }, []);

  const filteredFlights = flights.filter(
    (flight) => flight.from === props.from && flight.to === props.to
  );


  return (
    <div className="ticket_banner">
      <div className="logo">
        <img
          src="https://banner2.cleanpng.com/20180503/quw/kisspng-dubai-the-emirates-group-airline-logo-emirates-5aeb1901986ad4.5644617115253568016243.jpg"
          alt=""
        />
      </div>
      <div className="from">
        <div className="from_place">{from}</div>
        <div className="from_time">13:00</div>
      </div>
      <div className="details">
        <div className="details_name">EMIRATES</div>
        <div className="details_time">11H 20M</div>
        <div className="details_nonstop">NON-STOP</div>
      </div>
      <div className="to">
        <div className="to_place">{to}</div>
        <div className="to_time">14:20</div>
      </div>
      <div className="pribook">
      <div className="price">$1,572</div>
        <div className="book"><a href="/checkout"><button>Book Now</button></a></div>
      </div>
    </div>
  );
}

export default Ticket;
