import React from "react";
import profile from "../assets/profile.svg";

const Comment = (props) => {
  const { name, text } = props.data;

  return (
    <div className="flex items-center">
      <img alt="user" src={profile} className="w-4 h-4 md:w-8 md:h-8 " />
      <div className="flex flex-col p-1 md:p-3">
        <p className="font-semibold text-xs md:text-base">{name}</p>
        <p className="text-xs md:text-base">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
