import React from "react";
import "./Post.css";
import { IPost } from "../models/models";
import user from "../img/user.png";

interface IPostProps extends IPost {}

const Post: React.FC<IPostProps> = props => {
  const { author, description, time } = props;
  return (
    <div className="post">
      <img className="img" src={user} alt="user" />
      <div className="content">
        <span>{author}</span>
        <span>{description}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Post;
