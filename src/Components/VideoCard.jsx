import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 md:w-72 rounded-md shadow-sm cursor-pointer">
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2 text-sm md:text-base">{title}</li>
        <li className="text-sm md:text-base">{channelTitle}</li>
        <li className="text-sm md:text-base">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
