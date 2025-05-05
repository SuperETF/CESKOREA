import React from "react";

export default function EducationStatus({
  completed,
  required,
}: {
  completed: number;
  required: number;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-base font-medium mb-3">나의 교육 현황</h2>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-sm text-gray-500">이수 교육</p>
          <p className="text-xl font-bold text-blue-600">{completed}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">필수 교육</p>
          <p className="text-xl font-bold text-red-500">{required}</p>
        </div>
      </div>
    </div>
  );
}
