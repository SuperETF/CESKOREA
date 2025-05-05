// src/features/board/components/BoardSearchView.tsx
import React from "react";
import { X } from "lucide-react";

interface BoardSearchViewProps {
  recentSearches: string[];
  popularSearches: string[];
  onRemoveRecent: (term: string) => void;
  onClearAll: () => void;
}

const BoardSearchView: React.FC<BoardSearchViewProps> = ({
  recentSearches,
  popularSearches,
  onRemoveRecent,
  onClearAll,
}) => {
  return (
    <div className="mt-16 px-4 py-3 bg-white min-h-screen">
      {/* 최근 검색어 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-700">최근 검색어</h3>
          <button
            onClick={onClearAll}
            className="text-xs text-gray-500 hover:text-blue-500"
          >
            전체 삭제
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {recentSearches.map((term, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 text-sm text-gray-700"
            >
              <span>{term}</span>
              <button
                onClick={() => onRemoveRecent(term)}
                className="ml-2 text-gray-500 hover:text-red-500"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 인기 검색어 */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">인기 검색어</h3>
        <div className="flex flex-col">
          {popularSearches.map((term, index) => (
            <div
              key={index}
              className="flex items-center py-2 border-b border-gray-100"
            >
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-3">
                {index + 1}
              </span>
              <span className="text-sm text-gray-800">{term}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardSearchView;
