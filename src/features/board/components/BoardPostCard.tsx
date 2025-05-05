// src/features/board/components/BoardPostCard.tsx
import React from "react";
import { Eye, MessageCircle } from "lucide-react";

interface BoardPostCardProps {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
    time: string;
    views: number;
    comments: number;
    image?: string;
  };
}

const BoardPostCard: React.FC<BoardPostCardProps> = ({ post }) => {
  return (
    <div className="p-4 bg-white border-b border-gray-100 cursor-pointer">
      <div className="flex items-start space-x-3">
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-medium mb-1 truncate">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-2 line-clamp-1">{post.content}</p>
          <div className="flex items-center text-xs text-gray-400 space-x-2">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.time}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {post.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" />
              {post.comments}
            </span>
          </div>
        </div>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
          />
        )}
      </div>
    </div>
  );
};

export default BoardPostCard;
