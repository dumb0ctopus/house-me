import { Link } from "react-router-dom";
import logo from "../../../assets/logo/png/housemelogo_4.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white py-7 px-6 shadow-lg top-0 fixed w-full z-[1001]">
      {/* logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="house me logo" className="h-8 mr-2" />
        </Link>
      </div>
      <div className="flex space-x-6">
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
      <div className="flex space-x-4">
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
