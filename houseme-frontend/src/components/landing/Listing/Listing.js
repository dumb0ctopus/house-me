import FeaturedSection from "./FeaturedSection";
import properties from "../../../data/listing.json";

const Listing = () => {
  return (
    <div className="py-8 mx-7">
      <div className="container mx-auto">
        <h2 className="text-2xl font-halant font-bold border-l-4 border-gray-700 pl-3 text-gray-700 mb-5 sm:mb-0">
          Featured
        </h2>
        <h2 className="text-2xl font-halant font-bold mb-6 text-center">
          HOT LISTINGS
        </h2>
        <div className="grid grid-cols-1 mx-[1%] xsm:mx-[15%] sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <FeaturedSection key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
