import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../reusableComponents/navbar/Navbar";
import L from "leaflet";
import React, { useState, useEffect } from "react";
import properties from "../../data/listing.json";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import RentProperties from "./RentProperties";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function Rent() {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    setPropertyData(properties);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row mt-[80px]">
        {/* Map container */}
        <div className="w-full md:w-1/2">
          <MapContainer
            center={[6.465422, 3.406448]}
            zoom={13}
            className="w-full md:h-[100%] h-[400px] md:rounded-2xl rounded-none"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[6.465422, 3.406448]}>
              <Popup>Buy me</Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* Properties */}
        <div className="w-full md:w-1/2 md:mt-0 -mt-32 md:z-0 z-[1001] md:mx-[2%]">
          <div className="mt-7">
            <div className="mx-7 md:mx-0 bg-white md:bg-none pt-5 px-5 md:pt-0 md:px-0 rounded-3xl">
              <div className="mb-5">
                <h1 className="sm:text-3xl font-halant text-xl font-bold">
                  Search Properties
                </h1>
                <h2 className="text-gray-500 font-halant font-semibold text-sm sm:text-base">
                  2,229 properties available for sale
                </h2>
              </div>
              <div className="border border-gray-200 md:hidden"></div>
              <div className="bg-white rounded-lg p-3 flex flex-col sm:flex-row items-center space-x-3 space-y-3 sm:space-y-0">
                <div className="flex space-x-3">
                  <div className="relative flex items-center">
                    <LocationOnOutlinedIcon className="text-gray-500 absolute ml-2" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="pl-8 px-4 py-2 font-manrope font-semibold border-2 rounded-md bg-white text-black border-gray-300 w-[130px]"
                    />
                  </div>
                  <select
                    name="priceRange"
                    id="priceRange"
                    placeholder="Price Range"
                    className="px-4 py-2 border-2 font-manrope font-semibold rounded-md bg-white text-gray-500 border-gray-300 w-[130px]"
                  >
                    <option place>Price Range</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
                <div className="flex space-x-3">
                  <div className="flex">
                    <div className="relative">
                      <button className="bg-green-700 font-halant font-semibold text-white text-lg px-6 py-2 rounded-3xl pr-10">
                        Search
                      </button>
                      <SearchSharpIcon className="text-white absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="bg-[#d0f4d8] py-1 px-2 rounded-lg hidden lg:block">
                    <TuneOutlinedIcon />
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 mb-5 md:hidden"></div>
            </div>
            <div>
              <RentProperties properties={propertyData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
