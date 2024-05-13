import ForYou from "./ForYou";
import properties from "../../../data/listing.json";

const PropertiesForYou = () => {
  return (
    <div className="py-8 mx-7 sm:mt-0 mt-11">
      <div className="lg:mx-[2%] mx-0">
        <h2 className="text-xl font-halant font-bold mb-1">
          Properties for you
        </h2>
        <h2 className="text-l font-halant-light mb-5">
          based on your recent views
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <ForYou key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesForYou;
