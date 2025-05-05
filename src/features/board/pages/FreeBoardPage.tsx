// src/features/board/pages/FreeBoardPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";

import BoardHeader from "../components/BoardHeader";
import BoardSearchView from "../components/BoardSearchView";
import BoardTabs from "../components/BoardTabs";
import BoardSortMenu from "../components/BoardSortMenu";
import BoardPostList from "../components/BoardPostList";
import BoardWriteButton from "../components/BoardWriteButton";

export default function FreeBoardPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [sortOption, setSortOption] = useState("최신순");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState(["단백질", "필라테스", "다이어트"]);
  const [popularSearches] = useState(["운동루틴", "식단관리", "스트레칭"]);

  const categories = ["전체", "운동", "식단", "일상", "Q&A"];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("time_created", { ascending: false });

      if (error) {
        console.error("게시글 불러오기 실패", error);
      } else {
        setPosts(data || []);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (activeCategory === "전체") return true;
    return post.category === activeCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === "인기순") return b.views - a.views;
    return new Date(b.time_created).getTime() - new Date(a.time_created).getTime();
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 pb-16">
      {/* 상단 헤더 */}
      <BoardHeader
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* 메인 콘텐츠: 너비 제한 + 중앙 정렬 */}
      <div className="w-full max-w-3xl mx-auto px-4">
        {isSearchActive ? (
          <BoardSearchView
            recentSearches={recentSearches}
            popularSearches={popularSearches}
            onRemoveRecent={(term) =>
              setRecentSearches(recentSearches.filter((t) => t !== term))
            }
            onClearAll={() => setRecentSearches([])}
          />
        ) : (
          <>
            <div className="mt-16 mb-16">
              <BoardTabs
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />

              <div className="px-4 py-2 bg-white border-b border-gray-100 flex justify-end">
                <BoardSortMenu sortOption={sortOption} onChange={setSortOption} />
              </div>

              <BoardPostList posts={sortedPosts} />
            </div>
          </>
        )}
      </div>

      <BoardWriteButton onClick={() => navigate("/board/write")} />
    </div>
  );
}
