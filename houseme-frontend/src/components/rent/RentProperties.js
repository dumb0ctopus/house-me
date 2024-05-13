import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import { Link } from "react-router-dom";
import {
  BedOutlined,
  CropSquareOutlined,
  GarageOutlined,
  ShowerOutlined,
} from "@mui/icons-material";

function RentProperties({ properties }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
      {properties
        .filter((property) => property.type === "rent")
        .map((property, index) => (
          <Link key={index} to={`/rentProperty/${property.id}`}>
            {/* large devices */}
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden h-44 md:h-min lg:flex hidden"
            >
              <img
                src={property.imgOne}
                alt={`Property ${index}`}
                className="w-1/3 h-auto object-cover"
              />
              <div className="md:p-4 p-2 w-2/3">
                <h3 className="md:text-xl text-lg font-halant font-bold md:mb-5 mb-1">
                  {property.name}
                </h3>
                <p className="text-gray-600 font-halant-light">
                  {property.location.split("\n")[0]}
                </p>
                <p className="text-gray-600 font-halant-light">
                  {property.location.split("\n")[1]}
                </p>
                <p className="text-gray-600 font-halant-light">
                  Listed by: {property.owner}
                </p>
                <div className="flex space-x-3 md:space-x-7 items-center mb-1 md:mb-2 text-sm">
                  <p className="text-gray-600 font-halant-light">
                    {property.beds}
                    <BedOutlinedIcon className="text-green-500" />
                  </p>
                  <p className="text-gray-600 font-halant-light">
                    {property.baths}
                    <ShowerOutlinedIcon className="text-green-500" />
                  </p>
                  <p className="text-gray-600 font-halant-light">
                    {property.garage}
                    <GarageOutlinedIcon className="text-green-500" />
                  </p>
                  <p className="text-gray-600 font-halant-light">
                    <CropSquareOutlinedIcon className="text-green-500" />
                    {property.area} sqft
                  </p>
                </div>
                <p className="mt-1 md:mb-0 md:mt-5 md:text-xl text-lg text-green-500 font-halant font-bold">
                  N{parseInt(property.price).toLocaleString()}
                </p>
              </div>
            </div>

            {/* smaller devices */}
            <div className="py-3 w-full md:px-0 sm:px-[2%] xsm:px-[15%] px-[5.5%] lg:hidden">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-1">
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
                        <p
                          key={index}
                          className="text-gray-600 mb-1 font-halant-light"
                        >
                          {listing}
                        </p>
                      ))}
                      <div className="flex space-x-5 items-center mb-2">
                        <p className="text-gray-600 font-halant-light">
                          {property.beds}{" "}
                          <BedOutlined className="text-green-700" />
                        </p>
                        <p className="text-gray-600 font-halant-light">
                          {property.baths}{" "}
                          <ShowerOutlined className="text-green-700" />
                        </p>
                        <p className="text-gray-600 font-halant-light">
                          {property.garage}{" "}
                          <GarageOutlined className="text-green-700" />
                        </p>
                        <p className="text-gray-600 font-halant-light">
                          <CropSquareOutlined className="text-green-700" />
                          {property.area} sqft
                        </p>
                      </div>
                      <h3 className="text-gray-600 font-halant-light">
                        Listed by: {property.owner}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default RentProperties;
