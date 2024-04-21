import house from "../../../assets/images/unsplash_mR1CIDduGLc.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Footer from "../../reusableComponents/footer/Footer";
import testimonials from "../../../data/testimonials.json";
import Listing from "../Listing/Listing";

function Body() {
  return (
    <div className="relative h-screen mt-[82px]">
      <img src={house} alt="House" className="w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-items-start ml-11">
        <div className="max-w-2xl text-white text-left">
          <h1 className="text-4xl font-bold mb-1 ">Welcome to HOUSME.NG</h1>
          <p className="text-lg mb-8">
            Your premier destination for hassle-free real estate business
          </p>
          <div className="flex justify-start">
            <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
              <div className="relative flex items-center">
                <LocationOnOutlinedIcon className="text-black absolute ml-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="pl-8 px-4 py-2 border-t-2 border-b-[1px] rounded-md bg-white text-black border-gray-300 w-40"
                />
              </div>

              <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-md bg-white text-gray-400 border-gray-300">
                <option>Property Type</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-md bg-white text-gray-400 border-gray-300">
                <option>Price Range</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-md bg-white text-gray-400 border-gray-300">
                <option>Property Tag</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="flex">
                <div className="relative">
                  <button className="bg-green-700 text-white text-lg px-6 py-2 font-semibold rounded-3xl pr-10">
                    Search
                  </button>
                  <SearchSharpIcon className="text-white absolute right-3 top-1/2 transform -translate-y-1/2 mt-[3px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 z-10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
                <h3 className="text-4xl font-bold text-black mb-2">10,000</h3>
                <p className="text-green-600 font-bold">Property units sold</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
                <h3 className="text-4xl font-bold text-black mb-2">95%</h3>
                <p className="text-green-600 font-bold">
                  Customer satisfaction
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
                <h3 className="text-4xl font-bold text-black mb-2">
                  4.5<span className="text-yellow-300">★</span>
                </h3>
                <p className="text-green-600 font-bold">
                  Average Customer Ratings
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
                <h3 className="text-4xl font-bold text-black mb-2">100m</h3>
                <p className="text-green-600 font-bold">
                  Total Property Volume
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured [hot listings] */}

      <Listing />

      {/* what we offer */}

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-end border-r-4 border-black pr-3">
            WHAT WE OFFER
          </h2>
          <div className=" ">
            <div className="flex mb-7">
              <div className="bg-white p-6 rounded-lg mr-7">
                <div className="flex items-center justify-center mb-4">
                  <img src="/trusted.svg" alt="Trusted" className="h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Trusted by thousands
                </h3>
                <p className="text-gray-600">
                  We prioritize honesty & integrity in all our interactions,
                  ensuring that both buyers & sellers can trust the information
                  from property descriptions to transparent pricing provided on
                  our platform; we strive to foster trust & confidence among our
                  users.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/budget.svg"
                    alt="Budget Friendly"
                    className="h-16"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Budget Friendly</h3>
                <p className="text-gray-600">
                  Buying or selling a property can be expensive, but with
                  HouseMe, you can save money. Our cheap pricing and low escrow
                  fees ensure that you keep more money in your pocket. Don't let
                  high costs hold you back from making the move of your dreams.
                </p>
              </div>
            </div>
            <div className="flex mb-7">
              <div className="bg-white p-6 rounded-lg mr-7">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/handshake.svg"
                    alt="Hassle-Free Renting"
                    className="h-16"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Hassle-Free Renting
                </h3>
                <p className="text-gray-600">
                  HouseMe simplifies the renting process, providing a
                  user-friendly platform for both buyers & sellers, ensuring a
                  seamless experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg mr-7">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/secure.svg"
                    alt="Secure escrow service"
                    className="h-16"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Secure escrow service.
                </h3>
                <p className="text-gray-600">
                  Don't leave your real estate transactions to chance. With
                  HouseMe's secure escrow service, you can ensure that your
                  money is protected until the deal is done. Rest easy knowing
                  that your transaction is in safe hands.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg relative">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/marketplace.svg"
                    alt="Real Estate Marketplace"
                    className="h-16"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Real Estate Marketplace
                </h3>
                <p className="text-gray-600">
                  HouseMe offers a diverse range of properties for sellers to
                  showcase to potential buyers, ensuring a wide selection for
                  all preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}

      <div className="bg-white py-16">
        <div className="ml-24 px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-7">
            <div className="flex flex-col justify-center px-32">
              <h3 className="text-2xl font-bold mb-4 border-l-4 pl-3 border-black">
                ABOUT US
              </h3>
              <p className="text-gray-600 mb-8">
                Welcome to Houseme, where we're revolutionizing the real estate
                landscape with innovative solutions tailored to meet your needs.
                At Houseme, we understand the challenges and complexities that
                come with renting houses, whether you're a seller looking to
                find the perfect buyer or a buyer seeking the ideal property.
                That's why we've developed a cutting-edge real estate
                marketplace website that brings together sellers and buyers in a
                seamless, efficient manner.
              </p>
            </div>
            <div>
              <img
                src="https://i2.au.reastatic.net/800x600/dead487d7ff8c4fe0af1560baee2ec88d89fcf2a4b9881c5c27f3588b79fb0f6/image.jpg"
                alt=""
                className="w-[130em] h-[30em] rounded-bl-3xl rounded-tl-3xl"
              />
            </div>
          </div>
          <div className="flex space-x-7">
            <div>
              <img
                src="https://i2.au.reastatic.net/800x600/dead487d7ff8c4fe0af1560baee2ec88d89fcf2a4b9881c5c27f3588b79fb0f6/image.jpg"
                alt=""
                className="w-[130em] h-[30em] rounded-br-3xl rounded-tr-3xl"
              />
            </div>
            <div className="flex flex-col justify-center px-32 text-end">
              <h3 className="text-2xl font-bold mb-4 border-r-4 pr-3 border-black">
                THE SOLUTION
              </h3>
              <p className="text-gray-600 mb-8">
                Our solution is simple yet powerful: a platform where estate
                agencies, house agents and owners, can showcase their properties
                to potential buyers, who can browse through listings, compare
                prices and locations, and receive expert advice from our trusted
                correspondents. With Houseme, finding your dream home or selling
                your property has never been easier.
              </p>
            </div>
          </div>
          <div className="flex space-x-7">
            <div className="flex flex-col justify-center px-32">
              <h3 className="text-2xl font-bold mb-4 border-l-4 pl-3 border-black">
                THE MISSION
              </h3>
              <p className="text-gray-600">
                But our mission goes beyond just facilitating transactions. At
                Houseme, we're driven by a core set of values that guide
                everything we do. We're committed to making the rental process
                as stress-free as possible, striving to become a 'household
                name' synonymous with reliability, transparency, and exceptional
                service. Whether you're a first-time buyer or a seasoned
                'seller,' you can trust Houseme to provide the superior
                experience you need every step of the way.
              </p>
            </div>
            <div>
              <img
                src="https://i2.au.reastatic.net/800x600/dead487d7ff8c4fe0af1560baee2ec88d89fcf2a4b9881c5c27f3588b79fb0f6/image.jpg"
                alt=""
                className="w-[130em] h-[30em] rounded-bl-3xl rounded-tl-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}

      <div className="bg-white py-16">
        <div className="mx-40 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-right border-r-4 pr-3 border-black">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div>
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                </div>
                <div className="flex items-center mt-3">
                  <img
                    src={`https://via.placeholder.com/50?text=${
                      testimonial.author.split(" ")[0][0]
                    }${testimonial.author.split(" ")[1][0]}`}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* call to action */}

      <div className="bg-gray-200 mx-40 py-16 my-16 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Find Your Perfect Home with
          </h1>
          <h1 className="text-4xl font-bold mb-8">Houseme.ng Today!</h1>
          <p className="text-gray-600 mb-10">
            Find your dream home with confidence
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Body;
