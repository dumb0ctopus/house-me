import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import house from "../../../assets/images/pexels-rdne-stock-project-7281795 1.jpg";

function SearchPage() {
  return (
    <div>
      {/* img */}
      <div className="lg:-mt-[20%] md:-mt-[15%] mt-[10%]">
        <img
          src={house}
          alt="House"
          className="w-full h-auto bg-cover center"
        />
      </div>

      {/* search */}
      <div className="absolute inset-1 flex items-center justify-center sm:mt-0 sms:-mt-[30%] xsm:-mt-[40%] xxsm:-mt-[50%] -mt-[60%]">
        <div className="text-white text-center">
          <h1 className="sm:text-4xl text-xl font-halant font-bold sm:mb-6 mb-2">
            Secure Your Dream Home
          </h1>
          <div className="flex justify-center">
            <div className="sm:bg-white rounded-lg p-3 flex flex-col sm:flex-row items-center sm:space-x-3">
              {/* first two for small screens */}
              <div className="flex flex-row mb-3 sm:mb-0 space-x-5 sm:space-x-0">
                <div className="relative flex items-center mb-2 sm:mb-0 sm:mr-3">
                  <LocationOnOutlinedIcon className="text-black absolute ml-2" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="pl-8 px-4 py-2 border-t-2 border-b-[1px] rounded-xl bg-white text-black border-gray-300 w-40 font-halant-light text-base focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-xl bg-white text-gray-400 border-gray-300 font-halant-light text-base focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent">
                  <option>Property Type</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              {/* second two for small screens */}
              <div className="flex flex-row mb-3 sm:mb-0 space-x-5 sm:space-x-0">
                <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-xl bg-white text-gray-400 border-gray-300 mb-2 sm:mb-0 sm:mr-3 font-halant-light text-base focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent">
                  <option>Price Range</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <select className="px-4 py-2 border-t-2 border-b-[1px] rounded-xl bg-white text-gray-400 border-gray-300 font-halant-light text-base focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent">
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
    </div>
  );
}

export default SearchPage;
