import { Link } from "react-router-dom";
import logo from "../../../assets/logo/png/housemelogo_4.png";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

function NewPassword() {
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
            <h2 className="text-3xl font-bold mb-1 text-center">
              Set New Password
            </h2>
            <p className="text-gray-500 text-center">
              Your new password must be different <br /> to previously used
              passwords.
            </p>
          </div>
          <form>
            <div className="mb-4 w-96 px-7">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your new password"
              />
            </div>
            <div className="mb-4 w-96 px-7">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your new password"
              />
            </div>
            <div className="items-center justify-between w-96 px-7">
              <div>
                <p className="text-sm text-gray-500">
                  Must be at least 8 characters
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Must contain one special character
                </p>
              </div>
              <div className="text-center mt-7 mb-5">
                <Link
                  to=""
                  className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-10 rounded-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Reset password
                </Link>
              </div>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
