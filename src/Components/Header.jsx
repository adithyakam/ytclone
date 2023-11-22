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
import { YT_API, YT_SEARCH } from "../utilities/api";
import { cacheResults } from "./Redux/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import Suggestion from "./Suggestion";
import { isMobile } from "../utilities/helper";

const Header = () => {
  const dispatch = useDispatch();
  const searchcache = useSelector((state) => state.search);

  const nav = useNavigate();
  const [searchquery, setsearchquery] = useState("");
  const [suggestion, setsuggestion] = useState([]);

  const [showsuggestion, setshowsuggestion] = useState(false);

  const [hoverState, sethoverState] = useState(false);

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

  const getMouseOverSuggestion = (e) => {
    sethoverState(e);
  };

  const getsearchRes = (e) => {
    nav(`/results?q=${e}`);
    setsearchquery("");
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
    <div className="grid p-1  md:p-2 md:px-4 ">
      <div className=" col-span-4 col-start-1  md:col-span-2 row-span-1 md:col-start-1 flex  items-center">
        <img
          src={ham}
          alt="hamburger"
          onClick={() => dispatch(toggleSideMenu())}
          className="flex flex-row justify-center  h-6  w-8 cursor-pointer"
        />
        <img
          src={logo}
          alt="yt-logo"
          className="h-5 w-12  md:w-16 md:h-5 md:ml-4"
        />
      </div>
      <div className="col-span-5 col-start-5 md:col-span-7  md:h-10 row-span-1 md:col-start-3 ">
        <form className="flex justify-center items-center">
          <div className="w-[40%] md:w-[58%] flex flex-col text-xs md:text-base ">
            <input
              type="text"
              placeholder="Search"
              value={searchquery}
              onFocus={() => setshowsuggestion(true)}
              onBlur={() => {
                !hoverState && setshowsuggestion(false);
              }}
              onChange={(e) => {
                setsearchquery(e.target.value);
              }}
              className="z-10 h-5 pl-1 md:pl-3 md:p-1 md:h-10 rounded-l-full bg-dark-theme-background-color border border-1 text-dark-theme-secondary-color border-dark-theme-divider-color"
            />
            {!showsuggestion ? null : suggestion.length > 1 ? (
              <div className="w-[25%] mt-6 md:w-[33%] absolute bg-light-theme-text-color py-2 px-1 rounded-md  md:mt-11 ">
                <ul>
                  {suggestion?.map((suggestitem) => {
                    return (
                      <Suggestion
                        key={suggestitem}
                        getMouseOverSuggestion={getMouseOverSuggestion}
                        suggestitem={suggestitem}
                        getsearchRes={getsearchRes}
                      />
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
          <img
            src={search}
            alt="searchbtn"
            className=" w-[10%] md:w-[7%] p-1 h-5 md:h-10  bg-light-theme-text-color rounded-r-full md:p-2 text-dark-theme-secondary-color "
          />
          <img
            src={mic}
            alt="mic"
            className="w-4 h-5 ml-2 md:w-10   md:ml-4 md:h-10 bg-slate-600  rounded-full  bg-light-theme-text-color rounded-r-full md:p-2 text-dark-theme-secondary-color"
          />
        </form>
      </div>
      <div className="col-span-2 h-5 md:h-auto col-start-10 md:col-span-2 row-span-1 md:col-start-10 flex justify-end items-center ">
        {!isMobile && (
          <img src={camera} alt="camera-live" className="w-8 h-6 ml-6  " />
        )}
        {!isMobile && (
          <img src={bell} alt="camera-live" className="w-8  h-6 ml-6 " />
        )}
        <h1 className="text-sm mx-4">AK</h1>
      </div>
    </div>
  );
};

export default Header;
