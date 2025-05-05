import React from "react";

export interface SpecialtySelectorProps {
  specialties: string[];
  onToggle: (spec: string) => void;
}

const ALL_SPECIALTIES = [
  "헬스","요가","필라테스","크로스핏","재활운동","수영",
  "댄스","발레","태권도","유도","복싱","기타"
];

export default function SpecialtySelector({
  specialties, onToggle
}: SpecialtySelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      <h2 className="text-lg font-medium mb-4">
        전문 분야 <span className="text-red-500">*</span>
      </h2>
      <p className="text-sm text-gray-500 mb-3">
        해당되는 분야를 모두 선택해주세요
      </p>
      <div className="grid grid-cols-3 gap-2">
        {ALL_SPECIALTIES.map(spec => (
          <button key={spec} type="button"
            onClick={() => onToggle(spec)}
            className={`py-2 px-3 text-sm rounded-lg 
              ${specialties.includes(spec)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"} transition-colors`}>
            {spec}
          </button>
        ))}
      </div>
    </div>
  );
}
