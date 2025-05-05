// src/features/board/components/BoardPostList.tsx
import React from "react";
import BoardPostCard from "./BoardPostCard";

interface BoardPostListProps {
  posts: {
    id: number;
    title: string;
    content: string;
    author: string;
    time: string;
    views: number;
    comments: number;
    image?: string;
  }[];
}

const BoardPostList: React.FC<BoardPostListProps> = ({ posts }) => {
  return (
    <div className="bg-gray-50">
      {posts.map((post) => (
        <BoardPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BoardPostList;
