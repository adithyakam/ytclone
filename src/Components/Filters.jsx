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
  ];

  return (
    <div className="">
      <div className="flex  w-[90%]  no-scrollbar overflow-x-scroll px-1 m-2">
        {filterarr.map((filter) => {
          return (
            <button className=" text-xs font-bold h-8 bg-dark-theme-filter-color p-2  text-center rounded-md mr-4">
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
