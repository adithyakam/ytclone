import React from "react";
import Filters from "./Filters";
import VideoContainer from "./VideoContainer";
import VideoCard from "./VideoCard";

const Body = () => {
  return (
    <div className="w-full">
      <Filters />
      <VideoContainer />
      <VideoCard />
    </div>
  );
};

export default Body;
