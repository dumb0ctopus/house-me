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

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="mt-[82px]">
        {/* Header */}
        <div className="py-4 px-[5.5%] flex items-center justify-between">
          <div>
            <Link to="/buy">
              <div className="mb-5 flex items-center">
                <button className=" bg-[#d0f4d8] rounded-lg flex py-2 px-3 space-x-3">
                  <KeyboardArrowLeftOutlinedIcon className="mt-[1px]" />
                  <p className=" font-mono">Back to Map</p>
                </button>
              </div>
            </Link>

            <h1 className="text-2xl font-bold">{property.name}</h1>
            <p>{property.location}</p>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md flex space-x-3 mt-11">
            <FavoriteBorderRoundedIcon />
            <p>Add to Favourites</p>
          </button>
        </div>
        {/* Images */}
        <div className="flex items-center justify-center px-[5%]">
          {/* Larger image on the left */}
          <div className="mr-3">
            <img
              src={property.imgOne}
              alt={property.name}
              className="w-[900px] h-[650px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Two smaller images stacked on each other on the right */}
          <div className="flex flex-col">
            <div className="mb-3">
              <img
                src={property.imgOne}
                alt={property.name}
                className="w-[450px] h-[320px] object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={property.imgOne}
                alt={property.name}
                className="w-[450px] h-[320px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row px-[5.5%] py-4 md:space-x-5 sm:space-x-0">
          <div className="md:w-[66%] sm:w-[100%]">
            {/* Property Details */}

            <div>
              <div>
                <div className="flex items-center mb-2 justify-between py-5 px-7 border border-gray-200 shadow-sm rounded-lg">
                  {/* bedrooms */}

                  <div>
                    <h1 className="text-gray-600">Bedrooms</h1>
                    <p className="text-gray-600 text-center font-bold">
                      <BedOutlined className="text-green-700" />
                      {property.beds}
                    </p>
                  </div>
                  {/* bathrooms */}

                  <div>
                    <h1 className="text-gray-600">Bathrooms</h1>
                    <p className="text-gray-600 text-center font-bold">
                      <ShowerOutlined className="text-green-700" />
                      {property.baths}
                    </p>
                  </div>
                  {/* car park */}

                  <div>
                    <h1 className="text-gray-600">Car Park Holdings</h1>
                    <p className="text-gray-600 text-center font-bold">
                      <GarageOutlined className="text-green-700" />
                      {property.garage}
                    </p>
                  </div>
                  {/* sqft */}

                  <div>
                    <h1 className="text-gray-600">Total Square Area</h1>
                    <p className="text-gray-600 text-center font-bold">
                      <CropSquareOutlined className="text-green-700" />
                      {property.area} sqft
                    </p>
                  </div>
                  {/* tag */}

                  <div>
                    <h1 className="text-gray-600">Tag</h1>
                    <p className="text-gray-600 text-center font-bold">
                      <CheckBoxOutlinedIcon className="text-green-700" />
                      {property.type}
                    </p>
                  </div>
                </div>
                {/* about property */}
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">
                    About this property
                  </h2>
                  <p className="text-gray-700">
                    {property.about.split("\n")[0]}
                  </p>
                  <br />
                  <p className="text-gray-700">
                    {property.about.split("\n")[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* price and owner */}
          {/* Price */}
          <div className="px-7 py-5 border border-gray-200 rounded-lg md:w-[33%] sm:w-[100%]">
            <div className="mb-4 items-center">
              <h1 className="text-gray-600">Sale Price</h1>

              <span className="text-3xl font-bold text-green-700 align-middle">
                {property.price}
              </span>
              <span className="text-gray-500 ml-2 align-middle">
                (one time payment)
              </span>
            </div>
            {/* Buy Now Button */}
            <div className="text-center">
              <button className="bg-green-700 text-white py-3 rounded-full px-24 font-semibold">
                Buy Now
              </button>
            </div>
            <div className="border border-gray-200 mt-5"></div>
            {/* Owner Details */}

            <div className="mt-5">
              <h1>Listed by property Owner</h1>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
                  alt="Owner Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{property.owner}</h3>
                  <p className="text-gray-500">Property Owner</p>
                </div>
              </div>
              {/* more info */}
              <div>
                <button className="bg-[#d0f4d8] text-black font-semibold px-4 py-2 rounded-md">
                  <InfoOutlinedIcon /> More Info
                </button>
              </div>
            </div>
            {/* Buy Now Button */}
            <div className="text-center mt-5">
              <button className="bg-green-700 text-white py-3 rounded-full px-24 font-semibold">
                Send a Message
              </button>
            </div>
          </div>
        </div>
        {/* listings */}
        <div className="py-8 w-full px-[5.5%]">
          <div className="">
            <h2 className="text-xl font-bold">Similar Listings in Lagos, NG</h2>
            <h2 className="text-l mb-5">based on your recent views </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {properties.map((listing, index) => (
                <Trending
                  key={index}
                  img={listing.imgOne}
                  type={listing.type}
                  price={listing.price}
                  beds={listing.beds}
                  baths={listing.baths}
                  garage={listing.garage}
                  area={listing.area}
                  location={listing.location}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PropertyDetails;
