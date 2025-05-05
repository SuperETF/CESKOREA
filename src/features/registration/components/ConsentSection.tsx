import React from "react";

export interface ConsentSectionProps {
  cesk: boolean;
  privacy: boolean;
  onCesk: (v:boolean)=>void;
  onPrivacy: (v:boolean)=>void;
}

export default function ConsentSection({
  cesk, privacy, onCesk, onPrivacy
}: ConsentSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      {/* CESK */}
      <div className="flex items-start mb-4">
        <input id="cesk" type="checkbox" checked={cesk} onChange={e=>onCesk(e.target.checked)}
               className="w-4 h-4 text-blue-600 border-gray-300 rounded"/>
        <label htmlFor="cesk" className="ml-3 text-sm font-medium text-gray-700">
          CESK 인증 신청
        </label>
      </div>
      {/* Privacy */}
      <div className="flex items-start">
        <input id="privacy" type="checkbox" checked={privacy} onChange={e=>onPrivacy(e.target.checked)}
               className="w-4 h-4 text-blue-600 border-gray-300 rounded"/>
        <label htmlFor="privacy" className="ml-3 text-sm font-medium text-gray-700">
          개인정보 수집 및 이용 동의 <span className="text-red-500">*</span>
        </label>
      </div>
    </div>
  );
}
