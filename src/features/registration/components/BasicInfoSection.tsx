import React from "react";

export interface BasicInfoSectionProps {
  name: string;
  phone: string;
  email: string;
  onChange: (field: "name"|"phone"|"email", value: string) => void;
}

export default function BasicInfoSection({
  name, phone, email, onChange,
}: BasicInfoSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      <h2 className="text-lg font-medium mb-4">기본 정보</h2>
      {[
        { label: "이름", field: "name", type: "text", value: name, placeholder: "실명을 입력해주세요" },
        { label: "연락처", field: "phone", type: "tel", value: phone, placeholder: "010-0000-0000" },
        { label: "이메일", field: "email", type: "email", value: email, placeholder: "example@email.com" },
      ].map(({ label, field, type, value, placeholder }) => (
        <div key={field} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} <span className="text-red-500">*</span>
          </label>
          <input type={type} value={value} placeholder={placeholder}
                 onChange={e => onChange(field as any, e.target.value)}
                 className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"/>
        </div>
      ))}
    </div>
  );
}
