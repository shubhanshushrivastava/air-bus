import React from "react";
import "./Search.css";
import {Link, useNavigate} from 'react-router-dom';

import { useLocation } from "react-router-dom";


function Search(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/checkout',{state:{data: location.state.tickets[0]}});
  };

  return (
   <div className="search">
     <div className="ticket_banner">
     
     <div className="from">
       <div className="from_place">{location.state.tickets[0].from}</div>
       <div className="from_time">{location.state.tickets[0].departure.departureTime
}</div>
     </div>
     <div className="details">
       <div className="details_name">{location.state.tickets[0].airlineName}</div>
       <div className="details_time">{location.state.tickets[0].duration}</div>
       <div className="details_nonstop">{location.state.tickets[0].via}</div>
     </div>
     <div className="to">
       <div className="to_place">{location.state.tickets[0].to}</div>
       <div className="to_time">{location.state.tickets[0].return.returnTime}</div>
     </div>
     <div className="pribook">
       <div className="price">$ {location.state.tickets[0].price}</div>
       <div className="book">
           <button onClick={handleSearch}>Book Now</button>
       </div>
     </div>
   </div>
   </div>
  );
}

export default Search;
