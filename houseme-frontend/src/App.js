//app.js

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import SignUp from "./components/userAccess/signUp/SignUp";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import Login from "./components/userAccess/login/Login";
import ForgotPassword from "./components/userAccess/forgotPassword/ForgotPassword";
import NewPassword from "./components/userAccess/newPassword/NewPassword";
import Profile from "./components/user/profile/Profile";
import Settings from "./components/user/settings/Settings";
import Buy from "./components/buy/Buy";
import BuyPropertyDetails from "./components/buy/BuyPropertyDetails";
import Rent from "./components/rent/Rent";
import RentPropertyDetails from "./components/rent/RentPropertyDetails";
import Sell from "./components/sell/Sell";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buyProperty/:id" element={<BuyPropertyDetails />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rentProperty/:id" element={<RentPropertyDetails />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </Router>
  );
}

export default App;
