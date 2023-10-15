import React, { useEffect, useState } from "react";
import profile from "../assets/profile.svg";
import { useDispatch } from "react-redux";
import { genMsg, genName } from "../utilities/helper";
import { addchat } from "./Redux/livechatSlice";
import { useSelector } from "react-redux";

const LiveChat = () => {
  const [inputmsg, setinputmsg] = useState("");
  const livechat = useSelector((state) => state.livechat);

  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      const name = genName();
      const msg = genMsg(8);

      dispatch(addchat({ name, msg }));
    }, 1000);

    return () => {
      clearInterval(i);
    };
  });

  // useEffect(() => {}, []);

  return (
    <div className="border border-b-light-theme-background-color w-96 rounded-2xl p-4 h-[600px] flex flex-col">
      <div className="shadow-md border-b-2 border-dark-theme-disabled-color w-full p-2">
        <h3>Live Chat</h3>
      </div>
      <div className="flex flex-col overflow-y-scroll no-scrollbar">
        {livechat?.map((chat) => {
          return (
            <div className="flex p-2 items-center">
              <img src={profile} alt="profile" className="w-10 h-10" />
              <h3 className="ml-1 text-sm text-dark-theme-secondary-color">
                {chat.name}
              </h3>
              <p className="ml-2 text-xs text-dark-theme-secondary-color">
                {chat.msg}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col p-2  mt-auto border b-r-0 border-b-0 border-l-0 border-r-0 border-l-light-theme-background-color ">
        <div className="flex items-center">
          <img src={profile} alt="profile" className="w-10 h-10" />
          <h3 className="ml-1 text-sm text-dark-theme-secondary-color">
            Adithya Kamath
          </h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addchat({ name: "Adithya Kamath", msg: inputmsg }));
            setinputmsg("");
          }}
        >
          <input
            placeholder="text"
            value={inputmsg}
            onChange={(e) => setinputmsg(e.target.value)}
            className="border ml-10 border-t-0 border-r-0 border-l-0 w-1/2 border-b-light-primary-color bg-dark-theme-background-color"
          />
          <button className="p-1 text-xs ml-2 bg-light-theme-secondary-color rounded-md focus:bg-dark-theme-background-color">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
