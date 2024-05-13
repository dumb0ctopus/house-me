import house from "../../../assets/images/unsplash_mR1CIDduGLc.jpg";
import hause from "../../../assets/images/house.webp";
import handshake from "../../../assets/images/handshake.png";
import trusted from "../../../assets/images/trusted.webp";
import padOnShield from "../../../assets/images/padOnShield.png";
import budgetFriendly from "../../../assets/images/budgetFriendly.webp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Footer from "../../reusableComponents/footer/Footer";
//import testimonials from "../../../data/testimonials.json";
import Listing from "../Listing/Listing";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div>
      {/* img */}
      <div className="lg:-mt-[10%] sm:mt-[8%] xxsm:mt-[10%] mt-[17%]">
        <img
          src={house}
          alt="House"
          className="w-full h-auto bg-cover center brightness-50"
        />
      </div>

      {/* search */}
      <div className="absolute inset-1 flex md:justify-start md:ml-11 items-center justify-center sm:mt-0 -mt-[40%] z-10">
        <div className="text-white md:text-left text-center mt-24 sm:mt-0">
          {/* welcome text */}
          <div>
            <h1 className="sm:text-4xl text-2xl font-halant font-bold sm:mb-1 mb-2">
              Welcome to HOUSME.NG
            </h1>
            <p className="xxsm:text-lg text-base font-halant-light mb-5">
              Your premier destination for hassle-free real estate business
            </p>
          </div>

          {/* login / signup */}
          <div className="md:hidden space-x-4 mb-5 flex justify-center">
            {/* sign up btn */}
            <Link to="/signup">
              <button className="bg-green-700 border-2 border-green-700 text-white font-bold font-halant py-2 px-7 rounded-3xl hover:bg-green-800">
                Sign Up
              </button>
            </Link>

            {/* log in btn */}
            <Link to="/login">
              <button className="border-2 border-green-700 text-white py-2 px-7 rounded-3xl font-bold font-halant hover:bg-green-100 hover:text-black">
                Log In
              </button>
            </Link>
          </div>

          {/* search functionality */}
          <div className="flex justify-center">
            <div className="sm:bg-white rounded-lg p-3 flex flex-col sm:flex-row items-center sm:space-x-3">
              {/* first two for small screens */}
              <div className="flex flex-row mb-3 sm:mb-0 space-x-5 sm:space-x-0">
                <div className="relative flex items-center mb-2 sm:mb-0 sm:mr-3">
                  <LocationOnOutlinedIcon className="text-black absolute ml-2" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="pl-8 px-4 py-2 border-t-2 border-b-[1px] rounded-xl font-halant-light bg-white text-black border-gray-300 w-40 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-xl font-halant-light bg-white text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent">
                  <option>Property Type</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              {/* second two for small screens */}
              <div className="flex flex-row mb-3 sm:mb-0 space-x-5 sm:space-x-0">
                <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-xl font-halant-light bg-white text-gray-400 border-gray-300 mb-2 sm:mb-0 sm:mr-3 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent">
                  <option>Price Range</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-xl font-halant-light bg-white text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent">
                  <option>Property Tag</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              {/* last for small screens */}
              <div>
                <div className="flex">
                  <div className="relative">
                    <button className="bg-green-700 text-white text-lg px-6 py-2 font-halant font-semibold rounded-3xl pr-10">
                      Search
                    </button>
                    <SearchSharpIcon className="text-white absolute right-3 top-1/2 transform -translate-y-1/2 mt-[2px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-1 relative">
        <div className="mx-auto sm:mt-11 xxsm:mt-20 mt-48">
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/4 px-4 mb-8">
              <div className="py-8 text-center">
                <h3 className="sm:text-4xl text-2xl font-halant font-bold text-black mb-2">
                  10,000
                </h3>
                <p className="text-green-600 font-halant font-bold text-sm sm:text-base">
                  Property Units Sold
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8">
              <div className="py-8 text-center">
                <h3 className="sm:text-4xl text-2xl font-halant font-bold text-black mb-2">
                  95%
                </h3>
                <p className="text-green-600 font-halant font-bold text-sm sm:text-base">
                  Customer Satisfaction
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8">
              <div className="py-8 text-center">
                <h3 className="sm:text-4xl text-2xl font-halant font-bold text-black mb-2">
                  4.5<span className="text-yellow-300">★</span>
                </h3>
                <p className="text-green-600 font-halant font-bold text-sm sm:text-base">
                  Avg Customer Ratings
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 mb-8">
              <div className="py-8 text-center">
                <h3 className="sm:text-4xl text-2xl font-halant font-bold text-black mb-2">
                  100m
                </h3>
                <p className="text-green-600 font-halant font-bold text-sm sm:text-base">
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
      <div className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-12 text-end border-r-4 text-gray-700 border-gray-700 pr-3">
            WHAT WE OFFER
          </h2>
          <div className="md:space-y-7 space-y-3">
            {/* top two */}
            <div className="flex flex-col sm:flex-row sm:space-x-5 space-x-0 sm:space-y-0 space-y-3 mx-[7%] sm:mx-0">
              <div className="mx-auto p-6 bg-white rounded-lg overflow-hidden relative">
                <div className="relative flex items-center justify-center">
                  <img
                    id="avatar"
                    src={trusted}
                    alt="User Avatar"
                    className="h-48"
                  />
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

                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 250 250"
                  className="top-0 right-0 border-0 absolute fill-gray-200"
                >
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                </svg>
              </div>

              <div className="mx-auto p-6 bg-white rounded-lg overflow-hidden relative">
                <div className="relative flex items-center justify-center">
                  <img
                    id="avatar"
                    src={budgetFriendly}
                    alt="User Avatar"
                    className="h-48"
                  />
                </div>
                <h3 className="text-xl font-semibold">Budget Friendly</h3>
                <p className="text-gray-600">
                  Buying or selling a property can be expensive, but with
                  HouseMe, you can save money. Our cheap pricing and low escrow
                  fees ensure that you keep more money in your pocket. Don't let
                  high costs hold you back from making the move of your dreams.
                </p>

                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 250 250"
                  className="top-0 right-0 border-0 absolute fill-gray-200"
                >
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                </svg>
              </div>
            </div>

            {/* bottom three */}
            <div className="flex flex-col md:flex-row mb-7 md:space-x-5 space-x-0 md:space-y-0 space-y-3 mx-[7%] md:mx-0">
              <div className="mx-auto p-6 bg-white rounded-lg overflow-hidden relative">
                <div className="relative flex items-center justify-center">
                  <img
                    id="avatar"
                    src={handshake}
                    alt="User Avatar"
                    className="h-48"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Hassle-Free Renting
                </h3>
                <p className="text-gray-600">
                  Houseme simplifies the renting process, providing a
                  user-friendly platform for both buyers & sellers, ensuring a
                  seamless experience.
                </p>

                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 250 250"
                  className="top-0 right-0 border-0 absolute fill-gray-200"
                >
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                </svg>
              </div>
              <div className="mx-auto p-6 bg-white rounded-lg overflow-hidden relative">
                <div className="relative flex items-center justify-center">
                  <img
                    id="avatar"
                    src={padOnShield}
                    alt="User Avatar"
                    className="h-48"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Secure Escrow Service
                </h3>
                <p className="text-gray-600">
                  Don't leave your real estate transactions to chance. With
                  HouseMe's secure escrow service, you can ensure that your
                  money is protected until the deal is done. Rest easy knowing
                  that your transaction is in safe hands.
                </p>

                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 250 250"
                  className="top-0 right-0 border-0 absolute fill-gray-200"
                >
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                </svg>
              </div>
              <div className="mx-auto p-6 bg-white rounded-lg overflow-hidden relative">
                <div className="relative flex items-center justify-center">
                  <img
                    id="avatar"
                    src={hause}
                    alt="User Avatar"
                    className="h-48"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Real Estate Marketplace
                </h3>
                <p className="text-gray-600">
                  Houseme offers a diverse range of properties for sellers to
                  showcase to potential buyers, ensuring a wide selection for
                  all preferences.
                </p>

                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 250 250"
                  className="top-0 right-0 border-0 absolute fill-gray-200"
                >
                  <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}

      <div className="bg-white py-16">
        <div>
          <div className="flex space-x-7">
            <div className="flex flex-col justify-center sm:mx-24 mx-7">
              <h3 className="text-2xl font-bold mb-4 border-l-4 pl-3 border-black">
                ABOUT US
              </h3>
              <p className="text-gray-600 mb-8 text-justify">
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
                className="w-[130em] lg:h-[30em] sm:h-[20em] sm:flex hidden rounded-bl-3xl rounded-tl-3xl"
              />
            </div>
          </div>
          <div className="flex space-x-7">
            <div>
              <img
                src="https://i2.au.reastatic.net/800x600/dead487d7ff8c4fe0af1560baee2ec88d89fcf2a4b9881c5c27f3588b79fb0f6/image.jpg"
                alt=""
                className="w-[130em] lg:h-[30em] sm:h-[20em] sm:flex hidden rounded-br-3xl rounded-tr-3xl"
              />
            </div>
            <div className="flex flex-col justify-center sm:px-24 px-7">
              <h3 className="text-2xl font-bold mb-4 border-r-4 pr-3 border-black text-end">
                THE SOLUTION
              </h3>
              <p className="text-gray-600 mb-8 text-justify">
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
            <div className="flex flex-col justify-center sm:mx-24 mx-7">
              <h3 className="text-2xl font-bold mb-4 border-l-4 pl-3 border-black">
                THE MISSION
              </h3>
              <p className="text-gray-600 text-justify">
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
                className="w-[130em] lg:h-[30em] sm:h-[20em] sm:flex hidden rounded-bl-3xl rounded-tl-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}

      {/* <div className="bg-white py-16">
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
      </div> */}

      {/* call to action */}

      <div className="bg-gray-200 sm:mx-40 mx-0 py-16 my-16 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="md:text-4xl text-2xl font-bold mb-6">
            Find Your Perfect Home with
          </h1>
          <h1 className="md:text-4xl text-xl font-bold mb-8">
            Houseme.ng Today!
          </h1>
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
