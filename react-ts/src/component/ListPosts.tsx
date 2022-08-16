import React, { FC } from "react";
import { useAppSelector } from "../hooks/hooks";
import Post from "./Post";

const ListPosts: FC = () => {
  const posts = useAppSelector(state => state.posts.posts);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ListPosts;
