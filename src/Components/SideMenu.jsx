import React from "react";
import home from "../assets/home.svg";
import shorts from "../assets/shorts.svg";
import subs from "../assets/subs.svg";
import lib from "../assets/lib.svg";
import history from "../assets/history.svg";
import yourvid from "../assets/vid.svg";
import watchlater from "../assets/watchlater.svg";
import liked from "../assets/like.svg";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const sidebarmenustate = useSelector((state) => state.sidemenu.sidemenu);

  if (!sidebarmenustate) return null;

  return (
    <div className="col-span-1 h-full  flex flex-col items-center z-10 bg-dark-theme-background-color p-4">
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={home} alt="home" className="justify-start" />
        <h1 className="ml-8">Home</h1>
      </div>
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={shorts} alt="home" className="justify-start" />
        <h1 className="ml-8">Shorts</h1>
      </div>
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={subs} alt="home" className="justify-start" />
        <h1 className="ml-8">Subscription</h1>
      </div>
      <hr className=" h-px w-full my-4 bg-dark-theme-disabled-color border-0 z-100 " />
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={lib} alt="home" className="justify-start" />
        <h1 className="ml-8">Library</h1>
      </div>
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={history} alt="home" className="justify-start" />
        <h1 className="ml-8">History</h1>
      </div>
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={yourvid} alt="home" className="justify-start" />
        <h1 className="ml-8">Your Videos</h1>
      </div>
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={watchlater} alt="home" className="justify-start" />
        <h1 className="ml-8">Watch Later</h1>
      </div>
      <div className="flex  w-full p-2 hover:bg-light-theme-secondary-color rounded-md text-sm">
        <img src={liked} alt="home" className="justify-start" />
        <h1 className="ml-8">Liked Videos</h1>
      </div>
    </div>
  );
};

export default SideMenu;
