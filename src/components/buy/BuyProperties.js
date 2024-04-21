//buy properties

import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import { Link } from "react-router-dom";

function BuyProperties({ properties }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {properties
        .filter((property) => property.type === "sale")
        .map((property, index) => (
          <Link key={index} to={`/property/${property.id}`}>
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex"
            >
              <img
                src={property.imgOne}
                alt={`Property ${index}`}
                className="w-1/3 h-auto object-cover"
              />
              <div className="p-4 w-2/3">
                <h3 className="text-xl font-bold mb-5">{property.name}</h3>
                <p className="text-gray-600">
                  {property.location.split("\n")[0]}
                </p>
                <p className="text-gray-600">
                  {property.location.split("\n")[1]}
                </p>
                <p className="text-gray-600">Listed by: {property.owner}</p>
                <div className="flex space-x-7 items-center mb-2">
                  <p className="text-gray-600">
                    {property.beds}
                    <BedOutlinedIcon className="text-green-500" />
                  </p>
                  <p className="text-gray-600">
                    {property.baths}
                    <ShowerOutlinedIcon className="text-green-500" />
                  </p>
                  <p className="text-gray-600">
                    {property.garage}
                    <GarageOutlinedIcon className="text-green-500" />
                  </p>
                  <p className="text-gray-600">
                    <CropSquareOutlinedIcon className="text-green-500" />
                    {property.area} sqft
                  </p>
                </div>
                <p className=" mt-5 text-xl text-green-500 font-bold">
                  N{parseInt(property.price).toLocaleString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default BuyProperties;
