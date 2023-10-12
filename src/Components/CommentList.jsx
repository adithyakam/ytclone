import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <div key={i}>
            <Comment data={comment} />
            {comment.replies.length > 0 ? (
              <div className="pl-5 border border-t-0 border-b-0 border-r-0 border-l-light-primary-color  ml-5">
                <CommentList comments={comment.replies} />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
