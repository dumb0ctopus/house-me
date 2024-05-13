import Trending from "./Trending";
import properties from "../../../data/listing.json";

const TrendingProperties = () => {
  return (
    <div className="py-8 mx-7">
      <div className="lg:mx-[2%] mx-0">
        <h2 className="text-xl font-halant font-bold mb-1">
          Trending properties in Lagos, NG
        </h2>
        <h2 className="text-l font-halant-light mb-5">
          based on top user searches in the last hour
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <Trending key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProperties;
