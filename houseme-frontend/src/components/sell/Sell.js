import React from "react";
import Navbar from "../reusableComponents/navbar/Navbar";

const Sell = () => {
  return (
    <>
      <Navbar />
      <div className="items-center h-screen sm:px-[20%] px-[10%] flex">
        <div className="bg-white p-6 text-center">
          <h2 className="sm:text-3xl text-2xl font-halant font-bold mb-4">
            Become a Seller?
          </h2>
          <p className="mb-6 sm:text-xl text-base text-justify font-halant-light">
            Please note that you must complete the Know Your Customer (KYC)
            verification process to become a seller & an important on our
            platform. Verification ensures a secure and trusted marketplace for
            all users.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-halant text-lg font-semibold py-3 px-11 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Sell;
