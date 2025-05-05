import React from "react";

export interface ExperienceSectionProps {
  experience: string;
  onChange: (value: string) => void;
}

export default function ExperienceSection({
  experience, onChange
}: ExperienceSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      <h2 className="text-lg font-medium mb-4">
        경력 사항 <span className="text-red-500">*</span>
      </h2>
      <textarea
        value={experience}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="경력 사항을 입력해주세요"
        rows={4}
      />
    </div>
  );
}
