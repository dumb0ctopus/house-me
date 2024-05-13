import { Link } from "react-router-dom";
import logo from "../../../assets/logo/png/housemelogo_4.png";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white py-7 px-6 shadow-lg top-0 fixed w-full z-[2001]">
      {/* Hamburger menu */}
      <div className="relative md:hidden flex">
        <div className="items-center">
          <button
            className="w-10 flex items-center justify-center"
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
              <Link to="/login" className="hover:">
                <h2 className="font-halant font-semibold text-base text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Home
                </h2>
              </Link>
              {/* buy */}
              <Link to="/login" className="hover:">
                <h2 className="font-halant font-semibold text-base text-md text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Buy
                </h2>
              </Link>
              {/* rent */}
              <Link to="/login" className="hover:">
                <h2 className="font-halant font-semibold text-base  text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Rent
                </h2>
              </Link>
              {/* sell */}
              <Link to="/login" className="hover:">
                <h2 className="font-halant font-semibold text-base text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Sell
                </h2>
              </Link>
              {/* dashboard */}
              <Link to="/login" className="hover:">
                <h2 className="font-halant font-semibold text-base text-gray-700 text-center hover:text-white flex justify-center p-2 hover:bg-green-700 rounded-sm">
                  Dashboard
                </h2>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="house me logo" className="h-8 mr-2" />
        </Link>
      </div>

      <div className="items-center w-10 md:hidden"></div>

      <div className="md:flex space-x-6 hidden">
        {/* home btn */}
        <button
          href="#"
          className="text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 hover:bg-green-700 relative"
        >
          Home
        </button>

        {/* buy btn */}
        <button
          href="#"
          className="text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 hover:bg-green-700 relative"
        >
          Buy
        </button>

        {/* rent btn */}
        <button
          href="#"
          className="text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 hover:bg-green-700"
        >
          Rent
        </button>

        {/* sell btn */}
        <button
          href="#"
          className="text-black font-semibold py-2 px-5 border-2 border-transparent hover:rounded-3xl hover:text-white hover:border-2 hover:bg-green-700"
        >
          Sell
        </button>
      </div>
      <div className="md:flex space-x-4 hidden">
        {/* sign up btn */}
        <Link to="/signup">
          <button className="bg-green-700 border-2 border-green-700 text-white py-2 px-7 rounded-3xl font-semibold hover:bg-green-800">
            Sign Up
          </button>
        </Link>

        {/* log in btn */}
        <Link to="/login">
          <button className="border-2 border-green-700 text-green-700 py-2 px-7 rounded-3xl font-semibold hover:bg-green-100">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
