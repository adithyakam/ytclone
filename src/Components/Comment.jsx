import React from "react";
import profile from "../assets/profile.svg";

const Comment = (props) => {
  const { name, text } = props.data;

  return (
    <div className="flex items-center">
      <img alt="user" src={profile} className="w-8 h-8 " />
      <div className="flex flex-col p-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
