import React from "react";

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

  return (
    <div className="w-full">
      <div className="flex  w-full  no-scrollbar overflow-x-scroll px-1 m-2">
        {filterarr.map((filter, i) => {
          return (
            <button
              key={i}
              className=" text-xs font-bold h-8 bg-dark-theme-filter-color p-2  text-center rounded-md mx-2"
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
