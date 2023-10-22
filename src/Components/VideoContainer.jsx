import React, { useEffect, useState } from "react";

import { YT_API, YT_CAT_API, YT_SEARCH_API } from "../utilities/api";
import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "./Redux/vidSlice";

const VideoContainer = () => {
  // const [video, setvideo] = useState([]);
  const video = useSelector((state) => state.vid.vid);
  const key = useSelector((state) => state.vid.key);

  const dispatch = useDispatch();

  const getYouteubevidkey = async () => {
    await fetch(
      `${YT_SEARCH_API}${key}&maxResults=25&key=${process.env.REACT_APP_yt_api_key}`
    )
      .then((res) => res.json())
      .then((res) => {
        // setvideo(res.items);
        dispatch(addVideos({ key: key, vid: res.items }));
      });
  };

  const getYoutubevid = async () => {
    await fetch(`${YT_API}key=${process.env.REACT_APP_yt_api_key}`)
      .then((res) => res.json())
      .then((res) => {
        // setvideo(res.items);
        dispatch(addVideos({ key: "", vid: res.items }));
      });
  };

  useEffect(() => {
    key ? getYouteubevidkey() : getYoutubevid();
  }, [key]);

  if (video.length === 0) return <h1>loading</h1>;

  return (
    <div className="mx-auto">
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
