import React, { useState } from "react";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import PersonIcon from "@mui/icons-material/Person";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import img4 from "../../public/img4.jpg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MyLocationIcon from "@mui/icons-material/MyLocation";
function Header({ input, setInput }) {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4  absolute top-0 w-full z-10 text-white ">
        <div className="text-md font-bold">
          <HomeFilledIcon />
          <span>Realtor X</span>
        </div>
        <div className="flex gap-6 text-md">
          <a href="#" className="border-b-2 border-white-700">
            For buyers
          </a>
          <a href="#">For tenants</a>
          <a href="#">For owners</a>
          <a href="#">For dealers / builders</a>
          <a href="#">Insights</a>
        </div>
        <div className="flex gap-4 text-sm">
          <button className=" px-4 py-1 ">
            <PersonIcon />
            Log in
          </button>
          <button className="text-white-700 px-4 py-1 rounded border border-white">
            Post a property
            <ArrowOutwardIcon />
          </button>
        </div>
      </nav>
      <section
        className="h-[90vh] bg-cover bg-center flex  justify-center items-center text-white"
        style={{
          backgroundImage: `url(${img4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl font-semibold mb-2">
            Find Real Estate and Get Your
            <br /> Dream Space
          </h1>
          <p className="text-md mb-8">
            We are a real estate agency that will help you find the best
            residence you dream of. Let’s <br />
            discuss for your dream house!
          </p>
          <div className="flex justify-start gap-0.5 ">
            <button className="px-4 py-1 border bg-white ">
              <span className="text-black">Buy</span>
            </button>
            <button className="px-4 border bg-gray-100 ">
              <span className="text-gray-400">Rent</span>
            </button>
          </div>

          <div className="bg-white  shadow-md flex items-center p-2 gap w-full">
            <HomeFilledIcon className="text-black" />
            <select className=" px-3 py-2 text-sm text-gray-600">
              <option>Property type</option>
            </select>

            <input
              type="text"
              placeholder="Search by location or Property ID..."
              className="flex-grow px-3 py-2 outline-none text-sm text-gray-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <KeyboardVoiceIcon className="text-black pr-1" />
            <MyLocationIcon className="text-black pr-1" />
            <SearchIcon className="text-black bg-blue-400 rounded" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
