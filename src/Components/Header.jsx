import React from "react";
import ham from "../assets/ham.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import mic from "../assets/mic.svg";
import camera from "../assets/camera.svg";
import bell from "../assets/bell.svg";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "./Redux/sideMednuSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid   p-2 px-4">
      <div className="col-span-2 row-span-1 col-start-1 flex  items-center">
        <img
          src={ham}
          alt="hamburger"
          onClick={() => dispatch(toggleSideMenu())}
          className="flex flex-row justify-center  h-6  w-8 cursor-pointer"
        />
        <img src={logo} alt="yt-logo" className=" h-5 ml-4" />
      </div>
      <div className="col-span-7  h-10 row-span-1 col-start-3 ">
        <form className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[58%]   pl-3 p-1 h-10 rounded-l-full bg-dark-theme-background-color border border-1 text-dark-theme-secondary-color border-dark-theme-divider-color"
          />
          <img
            src={search}
            alt="searchbtn"
            className="  w-[7%]  h-10  bg-light-theme-text-color rounded-r-full p-2 text-dark-theme-secondary-color "
          />
          <img
            src={mic}
            alt="mic"
            className="w-10 ml-4 h-10 bg-slate-600  rounded-full  bg-light-theme-text-color rounded-r-full p-2 text-dark-theme-secondary-color"
          />
        </form>
      </div>
      <div className="col-span-2 row-span-1 col-start-10 flex justify-end items-center ">
        <img src={camera} alt="camera-live" className="w-8 h-6 ml-6  " />
        <img src={bell} alt="camera-live" className="w-8  h-6 ml-6 " />
        <h1 className="text-sm mx-4">AK</h1>
      </div>
    </div>
  );
};

export default Header;
