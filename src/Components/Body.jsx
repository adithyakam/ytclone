import React from "react";
import Filters from "./Filters";
import VideoContainer from "./VideoContainer";
import VideoCard from "./VideoCard";
import SideMenu from "./SideMenu";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideMenu />
      <MainContainer />
    </div>
  );
};

export default Body;
