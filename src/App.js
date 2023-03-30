import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login, logout} from "./features/userSlice.js";
import { selectUser } from "./features/userSlice";
import { getAuth } from "firebase/auth";  




import Checkout from "./Checkout";
import { BrowserRouter as Router ,Routes, Switch, Route } from "react-router-dom";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);


  return (
    <Router>
    <div className="App">
      <Header />
      {!user ? (
        <Login />
        ) : (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

        )
}
    </div>
  </Router>

  );
}

export default App;