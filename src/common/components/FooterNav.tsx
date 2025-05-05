import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, GraduationCap, Newspaper, User } from "lucide-react";

type TabKey = "main" | "education" | "news" | "my";

export function FooterNav({ active }: { active: TabKey }) {
  const navigate = useNavigate();

  const items: {
    key: TabKey;
    label: string;
    icon: React.ReactElement;
    path: string;
  }[] = [
    { key: "main", label: "자유게시판", icon: <Home />, path: "/board" },
    { key: "education", label: "보수 교육", icon: <GraduationCap />, path: "/education" },
    { key: "news", label: "CESK 칼럼", icon: <Newspaper />, path: "/news" },
    { key: "my", label: "마이", icon: <User />, path: "/my" },
  ];

  return (
    <footer className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 grid grid-cols-4 text-xs text-gray-600 z-10">
      {items.map((it) => {
        const isActive = active === it.key;
        return (
          <button
            key={it.key}
            onClick={() => navigate(it.path)}
            className={`flex flex-col items-center py-2 ${
              isActive ? "text-blue-600 font-semibold" : "text-gray-600"
            }`}
          >
            {React.cloneElement(it.icon, {
              className: `w-5 h-5 mb-1 ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`,
            })}
            <span>{it.label}</span>
          </button>
        );
      })}
    </footer>
  );
}
