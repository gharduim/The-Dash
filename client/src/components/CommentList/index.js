import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  return (
    <div>
      <h3>Comments</h3>
      {comments &&
        comments.map(comments => (
          <div key={comments._id} className="card m-3">
            <div className="card-body">
              <p className="card-title text-dark">
                <strong>{comments.username}</strong> - <span className="fs-6 text-muted">{comments.createdAt}</span>
              </p>
              <p className="card-text text-dark">
                {comments.commentText}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;