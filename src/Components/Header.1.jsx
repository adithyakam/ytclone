import React from "react";
import ham from "../assets/ham.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import mic from "../assets/mic.svg";
import camera from "../assets/camera.svg";
import bell from "../assets/bell.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "./Redux/sideMednuSlice";
import { useState } from "react";
import { useEffect } from "react";
import { YT_SEARCH } from "../utilities/api";
import { cacheResults } from "./Redux/searchSlice";
import { useNavigate } from "react-router-dom";
import Suggestion from "./Suggestion";

export const Header = () => {
  const dispatch = useDispatch();
  const searchcache = useSelector((state) => state.search);

  const nav = useNavigate();
  const [searchquery, setsearchquery] = useState("");
  const [suggestion, setsuggestion] = useState([]);

  const [showsuggestion, setshowsuggestion] = useState(false);

  const getqueryresults = async () => {
    const data = await fetch(YT_SEARCH + searchquery);
    const json = await data.json();
    setsuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchquery]: json[1],
      })
    );
  };

  const getsearchRes = (e) => {
    nav(`/results?q=${e}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchquery]) {
        setsuggestion(searchcache[searchquery]);
      } else {
        getqueryresults();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

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
          <div className="w-[58%] flex flex-col ">
            <input
              type="text"
              placeholder="Search"
              value={searchquery}
              onFocus={() => setshowsuggestion(true)}
              onBlur={() => setshowsuggestion(false)}
              onChange={(e) => {
                e.stopPropagation();
                setsearchquery(e.target.value);
              }}
              className="z-10  pl-3 p-1 h-10 rounded-l-full bg-dark-theme-background-color border border-1 text-dark-theme-secondary-color border-dark-theme-divider-color"
            />
            {!showsuggestion ? null : suggestion.length > 1 ? (
              <div className=" w-[33%] absolute bg-light-theme-text-color py-2 px-1 rounded-md  mt-11 ">
                <ul>
                  {suggestion?.map((suggestitem) => {
                    return (
                      <link to="/results">
                        <Suggestion suggestitem={suggestitem} />
                      </link>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
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
