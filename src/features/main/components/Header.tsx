import React from "react";
import { UserPlus } from "lucide-react";

export interface HeaderProps {
  /** 등록 버튼 클릭 시 호출될 콜백 */
  onRegister: () => void;
}

export function Header({ onRegister }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-10 px-4 py-3 flex items-center justify-between">
      <h1 className="text-lg font-bold text-blue-600">CESK 인증 트레이너</h1>
      <button
        onClick={onRegister}
        aria-label="CESK 인증 등록하기"
        className="flex items-center text-sm bg-blue-500 text-white px-3 py-1.5 rounded-lg 
                   hover:bg-blue-600 active:scale-95 transition duration-150"
      >
        <UserPlus className="w-4 h-4 mr-1" />
         인증하기 
             </button>
    </header>
  );
}
