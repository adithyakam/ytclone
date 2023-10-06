import React from "react";
import Filters from "./Filters";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <Filters />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
