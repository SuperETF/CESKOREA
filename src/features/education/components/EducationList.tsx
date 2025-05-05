import React from "react";
import { Education } from "../EducationPage";

export default function EducationList({
  list,
  onApply,
}: {
  list: Education[];
  onApply: (id: number, e: React.MouseEvent) => void;
}) {
  return (
    <div className="space-y-4">
      {list.map((edu) => (
        <div key={edu.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start mb-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                edu.type === "필수 교육"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {edu.type}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                edu.format === "온라인"
                  ? "bg-green-100 text-green-600"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              {edu.format}
            </span>
          </div>
          <h3 className="text-base font-medium mb-2">{edu.title}</h3>
          <p className="text-sm text-gray-600 mb-1">
            <i className="far fa-calendar-alt mr-2"></i>
            {edu.date}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            <i className="fas fa-map-marker-alt mr-2"></i>
            {edu.location}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{edu.price}</span>
            <button
              className="text-sm px-4 py-1.5 bg-blue-500 text-white rounded-full"
              onClick={(e) => onApply(edu.id, e)}
            >
              신청하기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
