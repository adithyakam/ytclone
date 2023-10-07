import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideMenu, toggleSideMenu } from "./Redux/sideMednuSlice";
import { useSearchParams } from "react-router-dom";

const VideoPage = () => {
  const disptach = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();

  const vidid = searchParams.get("v");

  useEffect(() => {
    disptach(closeSideMenu());
  }, []);

  return (
    <div className="col-span-11 p-8 ">
      <div>
        <iframe
          width="1000"
          height="512"
          src={"https://www.youtube.com/embed/" + vidid}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className=" ml-1"
        ></iframe>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default VideoPage;
