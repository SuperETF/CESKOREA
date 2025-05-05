// src/features/board/components/BoardWriteButton.tsx
import React from "react";
import { Pencil } from "lucide-react";

interface BoardWriteButtonProps {
  onClick: () => void;
}

const BoardWriteButton: React.FC<BoardWriteButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="글쓰기"
      className="fixed bottom-20 right-4 w-12 h-12 bg-blue-500 text-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 transition-colors z-20"
    >
      <Pencil className="w-5 h-5" />
    </button>
  );
};

export default BoardWriteButton;
