import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";

interface BoardHeaderProps {
  isSearchActive: boolean;
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  setIsSearchActive: (v: boolean) => void;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({
  isSearchActive,
  searchTerm,
  setSearchTerm,
  setIsSearchActive,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {!isSearchActive ? (
        <div className="fixed top-0 w-full bg-white shadow-sm z-10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              aria-label="뒤로가기"
              className="text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-gray-800">자유게시판</h1>
          </div>
          <button
            onClick={() => setIsSearchActive(true)}
            aria-label="검색 열기"
            className="text-gray-600 hover:text-blue-600"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="fixed top-0 w-full bg-white shadow-sm z-10 px-4 py-2 flex items-center">
          <button
            onClick={() => {
              setIsSearchActive(false);
              setSearchTerm("");
            }}
            className="mr-3 p-1 text-gray-600 hover:text-blue-600"
            aria-label="뒤로가기"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full py-2 px-4 pr-10 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label="검색"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BoardHeader;
