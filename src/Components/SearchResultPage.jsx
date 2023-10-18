import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchResCard from "./SearchResCard";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [searchRes, setSearchRes] = useState(null);
  const searchId = searchParams.get("q");

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchId}&key=${process.env.REACT_APP_yt_api_key}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSearchRes(data.items); // Assuming 'items' holds the array of videos
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    if (searchId) {
      getSearchResults();
    }
  }, [searchId]); // Dependency array with 'searchId'

  if (!searchRes) return <div>Loading...</div>; // Checking for 'null'

  return (
    <div className="col-span-11">
      <div className="flex flex-col p-4 m-auto w-[80%]">
        {searchRes.map((video) => (
          <SearchResCard key={video.id.videoId} data={video} /> // Assuming 'id.videoId' is correct
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
