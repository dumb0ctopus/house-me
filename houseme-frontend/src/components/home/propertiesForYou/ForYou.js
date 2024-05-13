import React from "react";
import {
  CropSquareOutlined,
  GarageOutlined,
  ShowerOutlined,
} from "@mui/icons-material";
import BedOutlined from "@mui/icons-material/BedOutlined";

const ForYou = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-3xl overflow-hidden">
      <div className="relative">
        <img
          src={property.imgOne}
          alt={`Listing for ${property.type}`}
          className="w-full h-60 object-cover"
        />
        <span className="absolute top-0 right-11 px-3 py-3 sm:rounded-b-lg sm:rounded-t-none text-white bg-green-700 font-halant font-bold sm:mt-0 mt-5 rounded-lg">
          {property.type.toUpperCase()}
        </span>
        <span className="absolute bottom-0 left-0 px-3 py-2 rounded-tr-lg bg-green-700 text-white text-xl font-halant font-bold">
          N{parseInt(property.price).toLocaleString()}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-halant font-bold mb-2">
          Fully Furnished {property.beds} Bedroom Apt.
        </h3>
        {property.location.split("\n").map((listing, index) => (
          <p key={index} className="text-gray-600 mb-1 font-halant-light">
            {listing}
          </p>
        ))}
        <div className="flex space-x-5 items-center mb-2">
          <p className="text-gray-600 text-sm font-halant font-bold">
            {property.beds} <BedOutlined className="text-green-700" />
          </p>
          <p className="text-gray-600 text-sm font-halant font-bold">
            {property.baths} <ShowerOutlined className="text-green-700" />
          </p>
          <p className="text-gray-600 text-sm font-halant font-bold">
            {property.garage} <GarageOutlined className="text-green-700" />
          </p>
          <p className="text-gray-600 text-sm font-halant font-bold">
            <CropSquareOutlined className="text-green-700" />
            {property.area} sqft
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
