import React from "react";
import { Link } from "react-router-dom";

const SearchResCard = ({ data }) => {
  return (
    <div className=" my-4 md:my-2 hover:shadow-md hover:scale-105">
      <Link key={data.id.videoId} to={"/watch?v=" + data.id.videoId}>
        <div className="flex flex-col md:flex-row">
          {data.id.kind === "youtube#video" ? (
            <img
              src={data.snippet.thumbnails.medium.url}
              w={data.snippet.thumbnails.medium.width}
              h={data.snippet.thumbnails.medium.height}
              className="rounded-lg "
            />
          ) : (
            <img
              src={data.snippet.thumbnails.default.url}
              w={data.snippet.thumbnails.default.width}
              h={data.snippet.thumbnails.default.height}
              className="rounded-full    "
            />
          )}

          <div className="flex flex-col  md:ml-3  ">
            <h1 className="text-base md:text-xl ">{data.snippet.title}</h1>
            {/* <h3>{data.snippet.title}</h3> */}
            <h1 className="text-xs md:text-sm mt-2 text-dark-theme-disabled-color">
              {data.snippet.description}
            </h1>
            <h1 className="text-xs justify-start mt-1  md:text-sm md:mt-4 md:justify-end ">
              {data.snippet.channelTitle}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchResCard;
