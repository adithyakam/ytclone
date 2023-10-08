import React, { useEffect, useState } from "react";

import { YT_API } from "../utilities/api";
import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";

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

  return (
    <div className="mx-auto w-full ">
      <div className="flex flex-wrap justify-center items-center ">
        {video.map((vid) => (
          <Link key={vid.id} to={"/watch?v=" + vid.id}>
            <VideoCard info={vid} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
