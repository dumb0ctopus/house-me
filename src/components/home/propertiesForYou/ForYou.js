import {
  CropSquareOutlined,
  GarageOutlined,
  ShowerOutlined,
} from "@mui/icons-material";
import BedOutlined from "@mui/icons-material/BedOutlined";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ForYou = ({ type, img, price, beds, baths, garage, area, location }) => {
  const formattedPrice = `N${formatPrice(price)}`;

  return (
    <div className="bg-white shadow-md rounded-3xl overflow-hidden">
      <div className="relative">
        <img
          src={img}
          alt={`Listing for ${type}`}
          className="w-full h-60 object-cover"
        />
        <span className="absolute top-0 right-11 px-3 py-3 rounded-b-lg text-white bg-green-700 font-bold">
          {type.toUpperCase()}
        </span>
        <span className="absolute bottom-0 left-0 px-3 py-2 rounded-tr-lg bg-green-700 text-white text-xl font-bold">
          {formattedPrice}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">
          Fully Furnished {beds} Bedroom Apt.
        </h3>
        {location.split("\n").map((listing, index) => (
          <p key={index} className="text-gray-600 mb-1">
            {listing}
          </p>
        ))}
        <div className="flex space-x-5 items-center mb-2">
          <p className="text-black font-semibold">
            {beds} <BedOutlined className="text-green-500" />
          </p>
          <p className="text-black font-semibold">
            {baths}
            <ShowerOutlined className="text-green-500" />
          </p>
          <p className="text-black font-semibold">
            {garage}
            <GarageOutlined className="text-green-500" />
          </p>
          <p className="text-black font-semibold">
            <CropSquareOutlined className="text-green-500" />
            {area} sqft
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
