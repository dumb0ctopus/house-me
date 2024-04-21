//rent

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../reusableComponents/navbar/Navbar";
import L from "leaflet";
import React, { useState, useEffect } from "react";
import RentProperties from "./RentProperties";
import properties from "../../data/listing.json";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

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
      <div className="flex space-x-7 mt-[82px]">
        {/* Map container */}
        <div className="w-[50%]">
          <MapContainer
            center={[6.465422, 3.406448]}
            zoom={13}
            className="w-full h-full rounded-2xl"
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
        <div style={{ width: "50%", height: "100vh", overflowY: "auto" }}>
          <div className="mt-7">
            <div className="mb-5">
              <h1 className="text-3xl font-bold">Search Properties</h1>
              <h2 className="text-gray-500">
                2,229 properties available for sale
              </h2>
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
              <div className="relative flex items-center">
                <LocationOnOutlinedIcon className="text-black absolute ml-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="pl-8 px-4 py-2 border-2 rounded-md bg-white text-black border-gray-300 w-40"
                />
              </div>
              <select className="px-4 py-2 border-2 rounded-md bg-white text-gray-400 border-gray-300">
                <option>Price Range</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="flex">
                <div className="relative">
                  <button className="bg-green-700 text-white text-lg px-6 py-2 font-semibold rounded-3xl pr-10">
                    Search
                  </button>
                  <SearchSharpIcon className="text-white absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
              <div className="bg-[#d0f4d8] p-1 rounded-lg">
                <TuneOutlinedIcon />
              </div>
            </div>
            <RentProperties properties={propertyData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
