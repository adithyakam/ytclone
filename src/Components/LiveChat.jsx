import React from "react";
import profile from "../assets/profile.svg";

const LiveChat = () => {
  return (
    <div className="border border-b-light-theme-background-color w-96 rounded-2xl p-4 h-[600px] flex flex-col">
      <div className="shadow-md border-b-2 border-dark-theme-disabled-color w-full p-2">
        <h3>Live Chat</h3>
      </div>
      <div className="flex p-2 items-center">
        <img src={profile} alt="profile" className="w-10 h-10" />
        <h3 className="ml-1 text-sm text-dark-theme-secondary-color">
          Adithya Kamath
        </h3>
        <p className="ml-2 text-xs text-dark-theme-secondary-color">
          aasldjflajsdlfj
        </p>
      </div>
      <div className="flex flex-col p-2  mt-auto border b-r-0 border-b-0 border-l-0 border-r-0 border-l-light-theme-background-color ">
        <div className="flex items-center">
          <img src={profile} alt="profile" className="w-10 h-10" />
          <h3 className="ml-1 text-sm text-dark-theme-secondary-color">
            Adithya Kamath
          </h3>
        </div>
        <form>
          <input
            placeholder="text"
            className="border ml-10 border-t-0 border-r-0 border-l-0 w-1/2 border-b-light-primary-color bg-dark-theme-background-color"
          />
          <button className="p-1 text-xs ml-2 bg-light-theme-secondary-color rounded-md focus:bg-dark-theme-background-color">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
