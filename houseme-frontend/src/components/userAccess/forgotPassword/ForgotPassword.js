import { Link } from "react-router-dom";
import logo from "../../../assets/logo/png/housemelogo_4.png";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import KeyTwoToneIcon from "@mui/icons-material/KeyTwoTone";

function ForgotPassword() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full h-screen bg-white">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white md:shadow-none shadow-xl py-7">
          <div className="mx-auto flex md:justify-start md:ml-7 justify-center">
            <Link to="/">
              <img src={logo} alt="house me logo" className="h-8" />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="items-center h-screen justify-center flex flex-col">
            <div className="flex justify-center">
              <div className="p-3 border border-gray-400 rounded-xl items-center">
                <KeyTwoToneIcon />
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-halant font-bold mb-1 text-center">
                Forgot password
              </h2>
              <p className="text-gray-500 font-halant-light text-lg text-center">
                No worries, we'll send you reset instructions.
              </p>
            </div>
            <form>
              <div className="mb-4 w-96 px-7">
                <label
                  className="block text-gray-700 font-halant text-lg font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow font-halant-light appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="text-center mt-7 mb-5">
                <Link
                  to=""
                  className="bg-green-700 hover:bg-green-900 text-white font-halant text-lg font-bold py-3 px-24 rounded-full focus:outline-none focus:shadow-outline"
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
                  <ChevronLeftOutlinedIcon className="mt-[1px]" />
                  <p className="text-center font-halant-light text-lg">
                    Back to log in
                  </p>
                </Link>
              </div>
              <div className="text-center">
                <Link
                  to="/newPassword"
                  className="inline-block align-baseline font-bold text-lg font-halant text-green-700 hover:text-green-900 ml-4"
                >
                  New Password
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
