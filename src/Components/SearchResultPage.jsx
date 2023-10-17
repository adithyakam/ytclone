import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { YT_SEARCH_API } from "../utilities/api";

const SearchResultPage = () => {
  let [searchParams] = useSearchParams();
  const searchid = searchParams.get("q");
  const getsearchresults = async () => {
    console.log(
      YT_SEARCH_API + searchid + "&key=" + process.env.REACT_APP_yt_api_key
    );
    const res = await fetch(
      YT_SEARCH_API + searchid + "&key=" + process.env.REACT_APP_yt_api_key
    );

    const json = await res.json((res) => res.json());

    console.log(json);
  };

  useEffect(() => {
    getsearchresults();
  }, []);

  return <div className="col-span-11"></div>;
};

export default SearchResultPage;
