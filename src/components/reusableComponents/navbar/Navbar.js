import logo from "../../../assets/logo/png/housemelogo_4.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white py-7 px-6 shadow-lg top-0 fixed w-full z-[1001]">
      {/* Hamburger menu */}
      <div className="relative md:hidden flex">
        <div className="items-center space-x-4">
          <button
            className="rounded-full h-10 w-10 flex items-center justify-center"
            onClick={toggleHamburger}
          >
            {isHamburgerOpen ? (
              <CloseRoundedIcon style={{ fontSize: "30px" }} />
            ) : (
              <MenuRoundedIcon style={{ fontSize: "30px" }} />
            )}{" "}
          </button>
        </div>
        {/* profile menu dropdown */}
        {isHamburgerOpen && (
          <div className="absolute -left-3 mt-[174%] w-60 bg-white rounded-xl shadow-lg z-10">
            <div className="items-center justify-center">
              {/* home */}
              <Link to="/home" className="hover:">
                <h2 className="font-semibold text-md text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Home
                </h2>
              </Link>
              {/* buy */}
              <Link to="/buy" className="hover:">
                <h2 className="font-semibold text-md text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Buy
                </h2>
              </Link>
              {/* rent */}
              <Link to="/rent" className="hover:">
                <h2 className="font-semibold text-md text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Rent
                </h2>
              </Link>
              {/* sell */}
              <Link to="/sell" className="hover:">
                <h2 className="font-semibold text-md text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Sell
                </h2>
              </Link>
              {/* dashboard */}
              <Link to="/dashboard" className="hover:">
                <h2 className="font-semibold text-md text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Dashboard
                </h2>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* logo */}
      <div className="flex items-center xxsm:ml-0 ml-[5%]">
        <Link to="/home">
          <img src={logo} alt="house me logo" className="h-8" />
        </Link>
      </div>

      <div className="md:flex space-x-6 hidden">
        {/* home btn */}

        <Link
          to="/home"
          className={`text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 ${
            location.pathname === "/home"
              ? "bg-green-700 rounded-3xl text-white"
              : "hover:bg-green-700"
          }`}
        >
          Home
        </Link>

        {/* buy btn */}

        <Link
          to="/buy"
          className={`text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 ${
            location.pathname === "/buy"
              ? "bg-green-700 rounded-3xl text-white"
              : "hover:bg-green-700"
          }`}
        >
          Buy
        </Link>

        {/* rent btn */}

        <Link
          to="/rent"
          className={`text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 ${
            location.pathname === "/rent"
              ? "bg-green-700 rounded-3xl text-white"
              : "hover:bg-green-700"
          }`}
        >
          Rent
        </Link>

        {/* sell btn */}

        <Link
          to="/sell"
          className={`text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 ${
            location.pathname === "/sell"
              ? "bg-green-700 rounded-3xl text-white"
              : "hover:bg-green-700"
          }`}
        >
          Sell
        </Link>
        {/* dashboard btn */}

        <Link
          to="/dashboard"
          className={`text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 ${
            location.pathname === "/dashboard"
              ? "bg-green-700 rounded-3xl text-white"
              : "hover:bg-green-700"
          }`}
        >
          Dashboard
        </Link>
      </div>

      {/* profile menu */}
      <div className="relative">
        <div className="flex items-center space-x-7">
          {/* Toggle menu button */}
          <div className="md:order-1 order-2">
            <button
              className="rounded-full h-8 w-8 flex items-center justify-center"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <CloseRoundedIcon style={{ fontSize: "30px" }} />
              ) : (
                <img
                  src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
                  alt="Owner's Avatar"
                  className="w-full h-full rounded-full "
                />
              )}
            </button>
          </div>
          {/* Notification button */}
          <div className="order-1 md:order-2">
            <NotificationsActiveOutlinedIcon style={{ fontSize: "25px" }} />
          </div>
        </div>

        {/* profile menu dropdown */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-[39%] -mr-3 w-60 bg-white rounded-xl shadow-lg z-10">
            <div>
              <Link
                to="/profile"
                className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-300"
              >
                <AccountCircleOutlinedIcon className="mr-2" />
                <h2 className="block font-semibold text-md text-gray-700 ">
                  Profile
                </h2>
              </Link>
              <Link
                to="/settings"
                className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-300"
              >
                <SettingsOutlinedIcon className="mr-2" />
                <h2 className="block font-semibold text-md text-gray-700 ">
                  Account Settings
                </h2>
              </Link>
              <Link
                to="/verified"
                className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-300"
              >
                <VerifiedOutlinedIcon className="mr-2" />
                <h2 className="block font-semibold text-md text-gray-700 ">
                  Become a Verified Seller
                </h2>
              </Link>
              <Link
                to="/support"
                className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-300"
              >
                <HeadsetMicOutlinedIcon className="mr-2" />
                <h2 className="block font-semibold text-md text-gray-700 ">
                  Customer Support
                </h2>
              </Link>
              <Link to="/" className="flex items-center justify-center">
                <button className="flex py-2 px-16 my-3 rounded-3xl bg-green-700">
                  <h2 className=" text-md text-md text-white">Log Out</h2>
                  <LogoutOutlinedIcon
                    className="ml-2 font-xl text-white"
                    style={{ fontSize: "19px" }}
                  />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
