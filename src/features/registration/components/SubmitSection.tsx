// src/features/registration/components/SubmitSection.tsx
import React from "react";

export interface SubmitSectionProps {
  disabled: boolean;
  onSubmit: () => void;
}

export default function SubmitSection({ disabled, onSubmit }: SubmitSectionProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 z-50">
      <div className="w-full">
        <div className="mx-auto px-4 py-4" style={{ maxWidth: "480px" }}>
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={onSubmit}
              disabled={disabled}
              className={`w-full sm:w-auto px-8 py-3 font-medium text-white rounded-lg transition-colors ${
                disabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
