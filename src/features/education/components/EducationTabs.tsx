import React from "react";

const categories = ["전체", "필수 교육", "선택 교육", "온라인", "오프라인"];

export default function EducationTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="overflow-x-auto py-2">
      <div className="flex space-x-2">
        {categories.map((c) => (
          <button
            key={c}
            className={`px-3 py-2 rounded-full text-sm whitespace-nowrap ${
              active === c
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
            onClick={() => onChange(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
