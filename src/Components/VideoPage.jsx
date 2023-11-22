import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideMenu } from "./Redux/sideMednuSlice";
import { useSearchParams } from "react-router-dom";
import ComentsContainer from "./ComentsContainer";
import LiveChat from "./LiveChat";
import { isMobile } from "../utilities/helper";

const VideoPage = () => {
  const disptach = useDispatch();
  let [searchParams] = useSearchParams();

  const vidid = searchParams.get("v");

  useEffect(() => {
    disptach(closeSideMenu());
  }, []);

  return (
    <div className="flex justify-around p-4 md:p-10">
      <div className="flex flex-col">
        <div className="col-span-11">
          <div>
            <iframe
              src={"https://www.youtube.com/embed/" + vidid}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-3/4 h-1/2 md:w-[1000px] md:h-[512px] ml-1 rounded-2xl"
            ></iframe>
            <div></div>
          </div>
          <div></div>
        </div>
        <ComentsContainer />
      </div>
      {!isMobile && <LiveChat />}
    </div>
  );
};

export default VideoPage;
