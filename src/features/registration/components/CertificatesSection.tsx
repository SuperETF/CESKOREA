import React from "react";

export interface Certificate {
  name: string;
  issueDate: string;
  expiryDate: string;
}

export interface CertificatesSectionProps {
  certificates: Certificate[];
  onAdd: () => void;
  onChange: (idx: number, field: keyof Certificate, value: string) => void;
  onRemove: (idx: number) => void;
}

export default function CertificatesSection({
  certificates, onAdd, onChange, onRemove
}: CertificatesSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">자격증 정보</h2>
        <button type="button" onClick={onAdd}
                className="text-blue-500 text-sm flex items-center">
          <i className="fas fa-plus mr-1"></i> 자격증 추가
        </button>
      </div>
      {certificates.map((cert, i) => (
        <div key={i} className="p-3 bg-gray-50 rounded-lg mb-3">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">자격증 {i+1}</h3>
            {certificates.length>1 && (
              <button type="button" onClick={()=>onRemove(i)}
                      className="text-red-500 text-xs">
                <i className="fas fa-times"></i> 삭제
              </button>
            )}
          </div>
          <input type="text" value={cert.name}
                 onChange={e=>onChange(i,"name",e.target.value)}
                 placeholder="자격증 이름"
                 className="w-full mb-2 px-3 py-2 border rounded-lg text-sm"/>
          <div className="grid grid-cols-2 gap-2">
            {(["issueDate","expiryDate"] as const).map(field=>(
              <div key={field}>
                <label className="block text-xs text-gray-500 mb-1">
                  {field==="issueDate"?"발급일":"만료일"}
                </label>
                <input type="date" value={cert[field]}
                       onChange={e=>onChange(i,field,e.target.value)}
                       className="w-full px-3 py-2 border rounded-lg text-sm"/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
