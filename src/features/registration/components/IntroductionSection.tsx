import React from "react";

export interface IntroductionSectionProps {
  text: string;
  onChange: (v:string)=>void;
}

export default function IntroductionSection({ text, onChange }: IntroductionSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      <h2 className="text-lg font-medium mb-2">자기소개 <span className="text-red-500">*</span></h2>
      <textarea value={text} onChange={e=>onChange(e.target.value)}
                rows={6} maxLength={500}
                placeholder="자기소개를 입력해주세요"
                className="w-full px-3 py-2 border rounded-lg text-sm"/>
      <div className="text-right text-xs text-gray-500 mt-1">{text.length}/500자</div>
    </div>
  );
}
