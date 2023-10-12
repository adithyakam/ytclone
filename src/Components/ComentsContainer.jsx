import React from "react";
import CommentList from "./CommentList";

const ComentsContainer = () => {
  const CommentData = [
    {
      name: "AK",
      text: "adsfasd",
      replies: [],
    },
    {
      name: "AK",
      text: "adsfasd",
      replies: [],
    },
    {
      name: "AK",
      text: "adsfasd",
      replies: [],
    },
    {
      name: "AK",
      text: "adsfasd",
      replies: [
        {
          name: "AK",
          text: "adsfasd",
          replies: [
            {
              name: "AK",
              text: "adsfasd",
              replies: [
                {
                  name: "AK",
                  text: "adsfasd",
                  replies: [],
                },
                {
                  name: "AK",
                  text: "adsfasd",
                  replies: [],
                },
              ],
            },
            {
              name: "AK",
              text: "adsfasd",
              replies: [],
            },
            {
              name: "AK",
              text: "adsfasd",
              replies: [
                {
                  name: "AK",
                  text: "adsfasd",
                  replies: [],
                },
                {
                  name: "AK",
                  text: "adsfasd",
                  replies: [],
                },
              ],
            },
            {
              name: "AK",
              text: "adsfasd",
              replies: [],
            },
          ],
        },
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
      ],
    },
    {
      name: "AK",
      text: "adsfasd",
      replies: [
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
      ],
    },
    {
      name: "AK",
      text: "adsfasd",
      replies: [
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
        {
          name: "AK",
          text: "adsfasd",
          replies: [],
        },
      ],
    },
    {
      name: "AK",
      text: "adsfasd",
      replies: [],
    },
    {
      name: "AK",
      text: "adsfasd",
      replies: [],
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="font-semibold text-xl">Comments:</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default ComentsContainer;
