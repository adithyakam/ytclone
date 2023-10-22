import React, { useEffect, useState } from "react";

import { YT_API, YT_CAT_API, YT_SEARCH_API } from "../utilities/api";
import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "./Redux/vidSlice";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);
  const videoResponse = useSelector((state) => state.vid);
  const catSearch = useSelector((state) => state.catSearch);

  const dispatch = useDispatch();

  const getYouteubevidkey = async () => {
    await fetch(
      `${YT_SEARCH_API}${catSearch}&maxResults=25&key=${process.env.REACT_APP_yt_api_key}`
    )
      .then((res) => res.json())
      .then((res) => {
        res = res.items.filter((res) => res.id.kind == "youtube#video");
        dispatch(addVideos({ key: catSearch, vid: res }));
        setvideo(res);
      });
  };

  const getYoutubevid = async () => {
    await fetch(`${YT_API}key=${process.env.REACT_APP_yt_api_key}`)
      .then((res) => res.json())
      .then((res) => {
        res = res.items.filter((res) => res.id.kind != "youtube#video");
        // setvideo(res.items);
        console.log(res, "adsf");
        dispatch(addVideos({ key: "", vid: res }));
        setvideo(res);
      });
  };

  useEffect(() => {
    if (catSearch) {
      if (videoResponse[catSearch]) {
        setvideo(videoResponse[catSearch]);
      } else {
        getYouteubevidkey();
      }
    } else {
      getYoutubevid();
    }
  }, [catSearch]);

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
