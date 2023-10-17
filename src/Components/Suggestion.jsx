import React from "react";
import search from "../assets/search.svg";
import { Link } from "react-router-dom";

const Suggestion = ({ suggestitem, getsearchRes, getMouseOverSuggestion }) => {
  return (
    <div
      className="flex items-center p-2 hover:bg-light-theme-secondary-color cursor-pointer"
      onMouseEnter={() => getMouseOverSuggestion(true)}
      onMouseLeave={() => getMouseOverSuggestion(false)}
      onClick={() => {
        getsearchRes(suggestitem);
      }}
    >
      <img src={search} className="h-5 w-5 mr-2 justify-start" />
      <li className="my-1 justify-end">{suggestitem}</li>
    </div>
  );
};

export default Suggestion;
