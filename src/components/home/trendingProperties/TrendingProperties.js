import Trending from "./Trending";
import listings from "../../../data/listing.json";

const TrendingProperties = () => {
  return (
    <div className="bg-white py-8 mx-11">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-1">
          Trending properties in Lagos, NG
        </h2>
        <h2 className="text-l mb-5">
          based on top user searches in the last hour
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
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
  );
};

export default TrendingProperties;
