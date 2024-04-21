import FeaturedSection from "./FeaturedSection";
import listings from "../../../data/listing.json";

const Listing = () => {
  return (
    <div className="bg-white py-8 mx-11">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold border-l-4 border-gray-700 pl-3 text-gray-700">
          Featured
        </h2>
        <h2 className="text-2xl font-bold mb-6 text-center">HOT LISTINGS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
            <FeaturedSection
              key={index}
              img={listing.imgOne}
              type={listing.type}
              price={listing.price}
              beds={listing.beds}
              area={listing.area}
              location={listing.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
