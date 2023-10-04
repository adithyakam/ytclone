import React from "react";
import ham from "../assets/ham.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import mic from "../assets/mic.svg";
import camera from "../assets/camera.svg";
import bell from "../assets/bell.svg";

const Header = () => {
  return (
    <div className="grid   p-4">
      <div className="col-span-2 row-span-1 col-start-1 flex  items-center">
        <img
          src={ham}
          alt="hamburger"
          className="flex flex-row justify-center h-8 w-8"
        />
        <img src={logo} alt="yt-logo" className="h-4" />
      </div>
      <div className="col-span-7 row-span-1 col-start-3 ">
        <form className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 rounded-l-full bg-slate-950 border border-slate-600"
          />
          <img
            src={search}
            alt="search"
            className="w-8 h-8 w-[5%] bg-slate-800 rounded-r-full p-1 "
          />
          <img
            src={mic}
            alt="mic"
            className="w-8 h-8 bg-slate-600  p-1 rounded-full"
          />
        </form>
      </div>
      <div className="col-span-2 row-span-1 col-start-10 flex justify-center">
        <img src={camera} alt="camera-live" className="w-8 h-8" />
        <img src={bell} alt="camera-live" className="w-8 h-8" />
        <h1 className="text-sm">AK</h1>
      </div>
    </div>
  );
};

export default Header;
