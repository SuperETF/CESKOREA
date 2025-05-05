import React from "react";

interface Program {
  title: string;
  description?: string;
  price?: number;
  sessions?: number;
  tags?: string[];
}

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="text-base font-semibold text-gray-800">{program.title}</h3>
        {program.price && (
          <span className="text-sm text-blue-600 font-medium">
            {program.price.toLocaleString()}원
          </span>
        )}
      </div>

      {program.description && (
        <p className="text-sm text-gray-600 mt-1">{program.description}</p>
      )}

      <div className="text-xs text-gray-500 mt-2 flex gap-4">
        {program.sessions && <span>총 {program.sessions}회</span>}
        {program.tags && program.tags.length > 0 && (
          <span>{program.tags.join(" / ")}</span>
        )}
      </div>
    </div>
  );
}
