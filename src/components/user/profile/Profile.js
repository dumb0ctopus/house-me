import { useState } from "react";
import Navbar from "../../reusableComponents/navbar/Navbar";

const Profile = () => {
  const [title, setTitle] = useState("Mr.");
  const [name, setName] = useState("Only One X");
  const [email, setEmail] = useState("onlyone@gmail.com");
  const [phone, setPhone] = useState("2348123456789");
  const [userType, setUserType] = useState("Individual User");
  const [country, setCountry] = useState("Nigeria");
  const [profileImage, setProfileImage] = useState(null);

  const handleSaveChanges = () => {
    // Handle saving changes to the profile details
    console.log("Saving changes:", {
      title,
      name,
      email,
      phone,
      userType,
      country,
      profileImage,
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg px-24 w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Profile Details
            </h1>
            <div className="border border-green-500 w-40 -mt-2"></div>
          </div>

          <div className="mr-[5%] ml-[5%]">
            <div className="flex space-x-11">
              <div className="py-8 w-full">
                <label
                  htmlFor="title"
                  className="text-lg font-medium text-gray-700"
                >
                  Title
                </label>
                <select
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-indigo-700 text-sm py-3 px-3"
                >
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                </select>
              </div>
              <div className="py-8 w-full">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-indigo-700 text-sm py-3 px-3 bg-gray-200"
                />
              </div>
            </div>

            <div className="flex space-x-11">
              <div className="py-8 w-full">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-indigo-700 text-sm py-3 px-3 bg-gray-200"
                />
              </div>
              <div className="py-8 w-full">
                <label
                  htmlFor="phone"
                  className="text-lg font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-indigo-700 text-sm py-3 px-3 bg-gray-200"
                />
              </div>
            </div>

            <div className="flex space-x-11">
              <div className="py-8 w-full">
                <label
                  htmlFor="userType"
                  className="text-lg font-medium text-gray-700"
                >
                  User Type
                </label>
                <input
                  id="userType"
                  type="text"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="mt-1 block w-full rounded-md border-indigo-700 text-sm py-3 px-3 bg-gray-200"
                />
              </div>
              <div className="py-8 w-full">
                <label
                  htmlFor="country"
                  className="text-lg font-medium text-gray-700"
                >
                  Country of Residence
                </label>
                <input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 block w-full rounded-md border-indigo-700 text-sm py-3 px-3 bg-gray-200"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-4 items-center">
              <h2
                htmlFor="profile-image"
                className="text-lg text-center font-medium text-gray-700"
              >
                Profile Image
              </h2>
              <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-full w-60 h-60">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-48 w-48 object-cover"
                  />
                ) : (
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="profile-image"
                        className="relative cursor-pointer bg-white rounded-full font-medium text-green-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="profile-image"
                          name="profile-image"
                          type="file"
                          className="sr-only"
                          onChange={(e) =>
                            setProfileImage(
                              URL.createObjectURL(e.target.files[0])
                            )
                          }
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center pb-5">
            <button
              onClick={handleSaveChanges}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
