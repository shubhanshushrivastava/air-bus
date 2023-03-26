import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import Checkout from "./Checkout";
import { BrowserRouter as Router ,Routes, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;