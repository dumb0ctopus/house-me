import { Link, useParams } from "react-router-dom";
import properties from "../../data/listing.json";
import Navbar from "../reusableComponents/navbar/Navbar";
import Footer from "../reusableComponents/footer/Footer";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Trending from "../home/trendingProperties/Trending";

import {
  BedOutlined,
  CropSquareOutlined,
  GarageOutlined,
  ShowerOutlined,
} from "@mui/icons-material";

function BuyPropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="mt-[111px]">
        <div className="mx-[5.5%]">
          <div className="mb-5 flex items-center">
            <Link to="/buy">
              <button className=" bg-[#d0f4d8] rounded-lg flex py-2 px-3 space-x-3">
                <KeyboardArrowLeftOutlinedIcon className="mt-[1px]" />
                <p className="font-halant font-semibold text-lg">Back to Map</p>
              </button>
            </Link>
          </div>
        </div>
        {/* Header */}
        <div className="px-[5.5%] mb-7 flex items-center justify-between">
          <div>
            <h1 className="sm:text-2xl font-halant font-bold text-lg">
              {property.name}
            </h1>
            <p className="sm:text-lg font-halant text-sm">
              {property.location}
            </p>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md flex space-x-3 items-center">
            <FavoriteBorderRoundedIcon />
            <p className="hidden font-halant text-lg sm:flex">
              Add to Favourites
            </p>
          </button>
        </div>
        {/* Images */}
        <div className="flex px-[15%] bg-cover w-full h-auto">
          {/* Larger image on the left */}
          <div className="flex flex-col">
            <div className="mr-3 mb-3">
              <img
                src={property.imgOne}
                alt={property.name}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="mr-3">
              <img
                src={property.imgOne}
                alt={property.name}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Two smaller images stacked on each other on the right */}
          <div className="flex flex-col">
            <div className="mb-3">
              <img
                src={property.imgOne}
                alt={property.name}
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src={property.imgOne}
                alt={property.name}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row px-[5.5%] py-4 md:space-x-5 sm:space-x-0">
          <div className="lg:w-[66%] sm:w-[100%]">
            {/* Property Details */}

            <div>
              <div>
                <div className="flex items-center mb-2 justify-between py-5 sm:px-7 px-2 border border-gray-200 shadow-sm rounded-lg">
                  {/* bedrooms */}

                  <div>
                    <h1 className="text-gray-600 hidden sms:flex font-halant-light text-lg">
                      Bedrooms
                    </h1>
                    <p className="text-gray-600 text-center sm:text-lg text-sm font-halant font-bold">
                      <BedOutlined className="text-green-700" />
                      {property.beds}
                    </p>
                  </div>
                  {/* bathrooms */}

                  <div>
                    <h1 className="text-gray-600 hidden sms:flex font-halant-light text-lg">
                      Bathrooms
                    </h1>
                    <p className="text-gray-600 text-center sm:text-lg text-sm font-halant font-bold">
                      <ShowerOutlined className="text-green-700" />
                      {property.baths}
                    </p>
                  </div>
                  {/* car park */}

                  <div>
                    <h1 className="text-gray-600 hidden sms:flex font-halant-light text-lg">
                      Garages
                    </h1>
                    <p className="text-gray-600 text-center sm:text-lg text-sm font-halant font-bold">
                      <GarageOutlined className="text-green-700" />
                      {property.garage}
                    </p>
                  </div>
                  {/* sqft */}

                  <div>
                    <h1 className="text-gray-600 hidden sms:flex font-halant-light text-lg">
                      Square Area
                    </h1>
                    <p className="text-gray-600 text-center sm:text-lg text-sm font-halant font-bold">
                      <CropSquareOutlined className="text-green-700" />
                      {property.area} sqft
                    </p>
                  </div>
                  {/* tag */}

                  <div>
                    <h1 className="text-gray-600 hidden sms:flex font-halant-light text-lg">
                      Tag
                    </h1>
                    <p className="text-gray-600 text-center sm:text-lg text-sm font-halant font-bold">
                      <CheckBoxOutlinedIcon className="text-green-700" />
                      {property.type}
                    </p>
                  </div>
                </div>
                {/* about property */}
                <div className="mb-4">
                  <h2 className="text-xl sm:text-2xl font-halant font-semibold mb-2">
                    About this property
                  </h2>
                  <p className="text-gray-700 font-halant-light md:text-lg">
                    {property.about.split("\n")[0]}
                  </p>
                  <br />
                  <p className="text-gray-700 font-halant-light md:text-lg">
                    {property.about.split("\n")[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* price */}
          <div className="px-7 py-5 border border-gray-200 rounded-lg lg:w-[33%] sm:w-[100%]">
            <div className="mb-4 items-center">
              <h1 className="text-gray-600 text-center font-halant font-semibold text-xl lg:text-start">
                Sale Price
              </h1>
              <div className="lg:flex block">
                <p className="text-3xl font-halant font-bold text-green-700 text-center lg:text-start">
                  N{parseInt(property.price).toLocaleString()}
                </p>
                <p className="text-gray-500 font-halant-light text-lg px-2 text-center">
                  (one time payment)
                </p>
              </div>
            </div>
            {/* Buy Now Button */}
            <div className="text-center">
              <button className="bg-green-700 text-white py-3 rounded-full px-[25%] font-halant font-semibold">
                Buy Now
              </button>
            </div>
            <div className="border border-gray-200 mt-5"></div>

            {/* Owner Details */}
            <div className="mt-5">
              <h1 className="text-gray-600 font-semibold font-halant text-xl">
                Listed by property Owner
              </h1>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
                  alt="Owner Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="">
                  <h3 className="text-md lg:text-lg font-halant font-semibold">
                    {property.owner}
                  </h3>
                  <p className="text-gray-500 font-halant-light">
                    Property Owner
                  </p>
                </div>
              </div>
              {/* more info */}
              <div>
                <button className="bg-[#d0f4d8] text-black font-semibold px-3 py-2 rounded-md text-sm flex space-x-1">
                  <InfoOutlinedIcon />
                  <span className="hidden lg:flex font-halant-bold text-lg">
                    More Info
                  </span>
                </button>
              </div>
            </div>
            {/* Buy Now Button */}
            <div className="text-center mt-5">
              <button className="bg-green-700 text-white py-3 rounded-full px-[20%] font-halant text-lg font-semibold">
                Send a Message
              </button>
            </div>
          </div>
        </div>
        {/* listings */}
        <div className="py-8 w-full px-[5.5%]">
          <h2 className="text-xl font-bold">Similar Listings in Lagos, NG</h2>
          <h2 className="text-l mb-5">based on your recent views </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter((property) => property.type === "sale")
              .map((property, index) => (
                <Trending property={property} key={index} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BuyPropertyDetails;
