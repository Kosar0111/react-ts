import { log } from "console";
import React from "react";
import { useAppSelector } from "../hooks/hooks";
import Post from "./Post";

const ListPosts = () => {
  const posts = useAppSelector(state => state.posts.posts);
  console.log(posts);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ListPosts;
