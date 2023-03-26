import React from "react";
import "./checkout.css"
import {useLocation} from 'react-router-dom';

function Checkout() {
  
  const location = useLocation();

  const handlePay =() => {
    console.log(location.state.data)
  }
  const a = location.state.data.price;
  const b = location.state.data.price /10 ;
  const c = Number(a)+Number(b);

  return (
    <div className="checkout_box">
      <div className="summary_box">
        <div className="fare_summary">Fare Summary</div>
        <div className="fareone">
          {" "}
          Base Fare <span>$ {a}</span>
        </div>
        <div className="faretwo">
          {" "}
          Fee & Subcharges <span>$ {b}</span>
        </div>
        <div className="farethree">
          {" "}
          Total Amount <span>$ {c}</span>
        </div>
      </div >
      <div className="payment_box">
        <div className="payme"> Payment Method</div>
        <input type="text"placeholder="Name on card" />
        <input type="text" placeholder="Card Number" maxLength={19} minLength={8}/>
        <input type="text" placeholder="Expiry Date"/>
        <input type="text" placeholder="CVV"/>
        <button onClick={handlePay}>Pay</button>
      </div>
    </div>
  );
}

export default Checkout;
