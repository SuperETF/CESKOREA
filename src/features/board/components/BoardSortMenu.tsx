// src/features/board/components/BoardSortMenu.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface BoardSortMenuProps {
  sortOption: string;
  onChange: (option: string) => void;
}

const BoardSortMenu: React.FC<BoardSortMenuProps> = ({
  sortOption,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const options = ["최신순", "인기순"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-gray-600 flex items-center"
      >
        {sortOption}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-20 border border-gray-100">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardSortMenu;
