import React from "react";
import { Search } from "lucide-react"; // ✅ Lucide 아이콘

const popularTags = [
  "서울",
  "헬스",
  "요가",
  "필라테스",
  "다이어트",
];

export default function SearchSection({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (v: string) => void;
}) {
  return (
    <section>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="지역이나 트레이너 이름을 검색하세요"
          className="w-full py-3 px-4 pr-10 bg-white rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500"
          aria-label="검색"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSearchChange(tag)}
            className="text-xs bg-white text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 shadow-sm hover:bg-blue-50 hover:border-blue-300 transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
