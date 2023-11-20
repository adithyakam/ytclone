import React from "react";
import search from "../assets/search.svg";
import { Link } from "react-router-dom";

const Suggestion = ({ suggestitem, getsearchRes, getMouseOverSuggestion }) => {
  return (
    <div
      className="flex p-1 items-center md:p-2 hover:bg-light-theme-secondary-color cursor-pointer"
      onMouseEnter={() => getMouseOverSuggestion(true)}
      onMouseLeave={() => getMouseOverSuggestion(false)}
      onClick={() => {
        getsearchRes(suggestitem);
      }}
    >
      <img
        src={search}
        className="h-2 w-2 mr-1 md:h-5 md:w-5 md:mr-2 justify-start"
      />
      <li className="text-[8px] md:text-base my-1 justify-end">
        {suggestitem}
      </li>
    </div>
  );
};

export default Suggestion;
