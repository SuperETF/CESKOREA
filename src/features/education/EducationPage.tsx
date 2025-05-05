import React, { useState } from "react";
import {
  EducationHeader,
  EducationTabs,
  EducationStatus,
  EducationList,
} from "./components";

export interface Education {
  id: number;
  title: string;
  type: "필수 교육" | "선택 교육";
  format: "온라인" | "오프라인";
  date: string;
  location: string;
  price: string;
  status: "신청가능" | "마감임박";
  remaining: number;
}

const educationList: Education[] = [ /* ... */ ];

export default function EducationPage() {
  const [activeCategory, setActiveCategory] = useState<string>("전체");

  const filteredList =
    activeCategory === "전체"
      ? educationList
      : educationList.filter(
          (e) => e.type === activeCategory || e.format === activeCategory
        );

  const handleApply = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    alert("교육 신청이 완료되었습니다.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <EducationHeader />

      <div className="mx-auto max-w-2xl mt-16 px-4 pb-16 space-y-4">
        <EducationTabs active={activeCategory} onChange={setActiveCategory} />

        <EducationStatus completed={3} required={2} />

        <EducationList list={filteredList} onApply={handleApply} />
      </div>
    </div>
  );
}
