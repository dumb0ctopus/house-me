import { Link } from "react-router-dom";
import logo from "../../../assets/logo/png/housemelogo_4.png";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

function ForgotPassword() {
  return (
    <div className="flex justify-center items-center h-screen bg-white-100">
      {/* Add the logo to the top left */}
      <div className="absolute top-3 left-3 m-4">
        <Link to="/">
          <img src={logo} alt="house me logo" className="h-8" />
        </Link>
      </div>
      <div className="w-full bg-white">
        <div className="items-center h-screen justify-center flex flex-col">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-1 text-center">
              Forgot password
            </h2>
            <p className="text-gray-500 text-center">
              No worries, we'll send you reset instructions.
            </p>
          </div>
          <form>
            <div className="mb-4 w-96 px-7">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="text-center mt-7 mb-5">
              <Link
                to=""
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-28 rounded-full focus:outline-none focus:shadow-outline w-96"
                type="button"
              >
                Reset password
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link
                to="/login"
                className="align-baseline font-bold text-md text-green-700 hover:text-green-900 flex"
              >
                <ChevronLeftOutlinedIcon className="mt-[2px]" />
                <p className="text-center">Back to log in</p>
              </Link>
            </div>
            <div className="text-center">
              <Link
                to="/newPassword"
                className="inline-block align-baseline font-bold text-md text-green-700 hover:text-green-900 ml-4"
              >
                New Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
