import { Link } from "react-router-dom";
import logo from "../../../assets/logo/png/housemelogo_4.png";
import house from "../../../assets/images/Frame 1618868479.jpg";

function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl h-screen bg-white p-6">
        <div className="mb-6">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="house me logo" className="h-8 mr-2" />
            </Link>
          </div>
        </div>
        <div className="lg:mx-[20%] md:mx-[10%] mx-[15%]">
          <h3 className="text-3xl font-bold mb-2">Sign up</h3>
          <p className="text-gray-600 mb-6">
            Enter your credentials to create your account.
          </p>
          <form>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="country"
                className="block text-gray-700 font-semibold mb-1"
              >
                Country of Residence*
              </label>
              <input
                type="text"
                id="country"
                placeholder="Enter your country"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="userType"
                className="block text-gray-700 font-semibold mb-1"
              >
                User Type
              </label>
              <select
                id="userType"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              >
                <option value="">Buyer and Seller</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                Password*
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
              <p className="text-gray-600 text-sm">
                Must be at least 8 characters.
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-1"
              >
                Confirm Password*
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-900 transition-colors duration-300 font-bold"
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center mt-4">
              <button className="flex items-center justify-center bg-white text-gray-600 py-2 px-4 border border-green-700 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 w-full font-bold">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-128.png"
                  alt="Google Logo"
                  className="w-7 h-7 mr-2"
                />
                Continue with Google
              </button>
            </div>
          </form>
          <p className="text-gray-600 my-4 text-center">
            Already have an account?
            <Link to="/login" className="text-green-700 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div>
        <img
          src={house}
          alt="Building"
          className="rounded-lg shadow-md object-cover h-[720px] md:block hidden"
        />
      </div>
    </div>
  );
}

export default SignUp;
