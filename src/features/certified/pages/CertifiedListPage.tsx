import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import ExpertCard from "../components/ExpertCard";
import { ArrowLeft, UserPlus, Search } from "lucide-react";

export default function CertifiedListPage() {
  const [experts, setExperts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchExperts = async () => {
      const { data } = await supabase
        .from("certified_experts")
        .select("id, name, specialties, experience, region, district, profileImage, ceskCert")
        .eq("ceskCert", true)
        .order("created_at", { ascending: false });

      setExperts(
        (data || []).map((e) => ({
          id: e.id,
          name: e.name,
          specialty: (e.specialties || []).join("/"),
          location: `${e.region} ${e.district}`,
          image: e.profileImage || "/default-profile.png",
        }))
      );
    };

    fetchExperts();
  }, []);

  const filteredExperts = experts.filter((expert) =>
    [expert.name, expert.specialty, expert.location].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* ✅ 상단 고정 헤더 */}
      <header className="fixed top-0 w-full bg-white shadow px-4 py-3 z-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.history.back()}
            aria-label="뒤로가기"
            className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 active:scale-95 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-blue-600">인증 전문가</h1>
        </div>

        <button
          onClick={() => alert("트레이너 등록 페이지로 이동")}
          className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded-md inline-flex items-center hover:bg-blue-600 active:scale-95 transition"
        >
          <UserPlus className="w-4 h-4 mr-1" />
          트레이너 등록
        </button>
      </header>

      {/* ✅ 메인 콘텐츠 */}
      <main className="max-w-md mx-auto px-4 pt-20 pb-24">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="지역이나 트레이너 이름을 검색하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white shadow px-4 py-3 pr-10 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-500"
            aria-label="검색"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </main>
    </div>
  );
}
