import React, { useEffect, useState } from "react";

import { YT_API } from "../utilities/api";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);

  const getYoutubevid = async () => {
    await fetch(`${YT_API}key=${process.env.REACT_APP_yt_api_key}`)
      .then((res) => res.json())
      .then((res) => {
        setvideo(res.items);
      });
  };

  useEffect(() => {
    getYoutubevid();
  }, []);

  if (video.length === 0) return <h1>loading</h1>;

  console.log(video[0]);
  return (
    <div className="mx-auto w-full ">
      <div className="flex flex-wrap justify-center items-center ">
        {video.map((vid) => (
          <VideoCard info={vid} key={vid.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
