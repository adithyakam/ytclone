import React, { useEffect } from "react";
import { YT_CATEGORY_API } from "../utilities/api";
import { useDispatch, useSelector } from "react-redux";
import { addCat } from "./Redux/categorySlice";
import { addKey } from "./Redux/vidSlice";
import { addcatSearch } from "./Redux/searchCatSlice";

const Filters = () => {
  const filterarr = [
    "All",
    "Music",
    "Live",
    "Video",
    "Chess",
    "Football",
    "All",
    "Music",
    "Live",
    "Video",
    "Chess",
    "Football",
    "All",
    "Music",
    "Live",
    "Video",
    "Chess",
    "Football",
    "All",
    "Music",

    "Football",
  ];

  const disptach = useDispatch();
  const categories = useSelector((state) => state.category);
  const videoResponse = useSelector((state) => state.vid.vid);
  const catsearch = useSelector((state) => state.catSearch);

  const getVidCategory = async () => {
    const data = await fetch(
      YT_CATEGORY_API + process.env.REACT_APP_yt_api_key
    );
    const json = await data.json((res) => res.json());

    const cat = json.items;
    // console.log(cat);
    disptach(addCat(cat));
  };

  useEffect(() => {
    getVidCategory();
  }, []);

  const getCatRes = (key) => {
    disptach(addcatSearch(key));
  };

  return (
    <div className="">
      <div className="flex no-scrollbar overflow-x-scroll m-1  md:px-1 md:m-2">
        {categories.map((filter, i) => {
          return (
            <button
              key={filter.snippet.title}
              onClick={(e) => getCatRes(filter.snippet.title)}
              className={`${
                catsearch == filter.snippet.title
                  ? "bg-light-theme-background-color text-dark-theme-background-color"
                  : "bg-dark-theme-filter-color"
              } text-[8px] md:text-xs whitespace-nowrap p-1	 m-1  h-6 font-bold md:h-8 w-auto  md:p-2 block  text-center rounded-md md:mx-2`}
            >
              {filter.snippet.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
