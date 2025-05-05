// src/features/board/components/BoardTabs.tsx
import React from "react";

interface BoardTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const BoardTabs: React.FC<BoardTabsProps> = ({
  categories,
  activeCategory,
  onChange,
}) => {
  return (
    <div className="bg-white border-b border-gray-100 px-4 py-2">
      <div className="flex justify-between overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-4 py-1.5 text-sm whitespace-nowrap transition-all ${
              activeCategory === category
                ? "text-blue-500 font-medium border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoardTabs;
