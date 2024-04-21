import { useState } from "react";
import Navbar from "../../reusableComponents/navbar/Navbar";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Settings = () => {
  const [email, setEmail] = useState("onlyone@gmail.com");
  const [newEmail, setNewEmail] = useState("");
  const [showEditEmailModal, setShowEditEmailModal] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleEmailEdit = () => {
    setShowEditEmailModal(true);
  };

  const handleEmailSave = () => {
    setEmail(newEmail);
    setShowEditEmailModal(false);
  };

  const handleEmailCancel = () => {
    setNewEmail(""); // Clear the input field
    setShowEditEmailModal(false);
  };

  const handleInputChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = () => {
    setShowChangePasswordModal(true);
  };

  const handlePasswordSave = () => {
    // Here you can implement password change functionality
    // You can use oldPassword and newPassword states to access the input values
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    // Reset input fields and close modal
    setOldPassword("");
    setNewPassword("");
    setShowChangePasswordModal(false);
  };

  const handlePasswordCancel = () => {
    // Clear input fields and close modal
    setOldPassword("");
    setNewPassword("");
    setShowChangePasswordModal(false);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
    console.log("Notifications enabled:", !notificationsEnabled);
  };

  const handleDeactivateAccount = () => {
    // Handle account deactivation functionality
    console.log("Deactivating account");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg px-24 w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Account Settings
            </h1>
            <div className="border border-green-500 w-44 -mt-2"></div>
          </div>
          <div className="mr-[5%] ml-[5%]">
            {/* email */}
            <div className="flex space-x-11">
              <div className="py-8 w-full">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700"
                >
                  Email Verification
                </label>
                <h2 className="text-sm">
                  Verify the email address associated with this account
                </h2>
              </div>
              <div className="flex items-center justify-between space-x-28 py-8">
                <div className="flex items-center rounded-md bg-green-400 p-2 space-x-3">
                  <span className="">{email}</span>
                  <DoneAllOutlinedIcon className="text-white border-green-500" />
                </div>

                <button
                  onClick={handleEmailEdit}
                  className="text-green-600 hover:text-green-700 px-11 py-2 font-bold border border-green-600 rounded-full"
                >
                  Edit
                </button>
              </div>
            </div>
            {/* password */}
            <div className="flex space-x-11">
              <div className="py-8 w-full">
                <label
                  htmlFor="password"
                  className="text-lg font-medium text-gray-700"
                >
                  Change Password
                </label>
                <h2 className="text-sm">
                  Change the password linked with this account
                </h2>
              </div>
              <div className="py-8">
                <button
                  onClick={handlePasswordChange}
                  className="text-green-600 hover:text-green-700 px-11 py-2 font-bold border border-green-600 rounded-full whitespace-nowrap"
                >
                  Change Password
                </button>
              </div>
            </div>
            {/* notification */}
            <div className="flex space-x-11">
              <div className="py-8 w-full">
                <label
                  htmlFor="notifications"
                  className="text-lg font-medium text-gray-700"
                >
                  Notifications
                </label>
                <h2 className="text-sm">
                  Notifications would be sent to your registered email and phone
                  number
                </h2>
              </div>

              <div className="flex items-center">
                <div className="flex">
                  <button
                    onClick={handleNotificationsToggle}
                    className={`${
                      notificationsEnabled
                        ? "bg-green-500 text-white"
                        : "bg-green-400 text-gray-500"
                    } px-7 py-3 rounded-lg whitespace-nowrap`}
                  >
                    {notificationsEnabled
                      ? "Notification Enabled"
                      : "Notification Disabled"}
                    <span className="ml-2"></span>
                    <DoneAllOutlinedIcon className="text-white" />
                  </button>
                </div>
              </div>
            </div>
            {/* deactivate */}
            <div className="flex space-x-11">
              <div className="py-8 w-full">
                <label
                  htmlFor="deactivate"
                  className="text-lg font-medium text-gray-700"
                >
                  Deactivate & Delete Account
                </label>
                <h2 className="text-sm">
                  This will deactivate your account and delete your data after
                  30 days
                </h2>
              </div>
              <div className="py-8">
                <button
                  onClick={handleDeactivateAccount}
                  className="text-red-600 hover:text-red-500 border border-red-600 rounded-full whitespace-nowrap px-11 py-2"
                >
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        </div>

        {showEditEmailModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Edit Email
                      </h3>
                      <div className="mt-2">
                        <input
                          type="email"
                          value={newEmail}
                          onChange={handleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="New Email Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleEmailSave}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEmailCancel}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showChangePasswordModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Change Password
                      </h3>
                      <div className="mt-2">
                        <input
                          type="password"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Old Password"
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="New Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handlePasswordSave}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={handlePasswordCancel}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Settings;
