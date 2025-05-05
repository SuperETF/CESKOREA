import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { MapPin, ChevronRight } from "lucide-react";

export interface Expert {
  id: string;
  name: string;
  specialties: string[];
  experience: string;
  region: string;
  district: string;
  profileImage?: string;
  ceskCert: boolean;
  introduction?: string;
}

export default function CertifiedExperts({ onSeeAll }: { onSeeAll: () => void }) {
  const [experts, setExperts] = useState<Expert[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperts = async () => {
      const { data, error } = await supabase
        .from("certified_experts")
        .select("*")
        .eq("ceskCert", true)
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) {
        console.error("🔥 인증 전문가 로딩 실패", error);
      } else {
        setExperts(data || []);
      }
    };

    fetchExperts();
  }, []);

  return (
    <section className="bg-white rounded-xl shadow p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">인증 전문가</h2>
        <button
          onClick={onSeeAll}
          className="text-sm text-blue-500 flex items-center hover:text-blue-600 active:scale-95 transition"
        >
          전체보기
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="space-y-4">
        {experts.map((e) => (
          <div
            key={e.id}
            onClick={() => navigate(`/experts/${e.id}`)}
            className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer active:scale-[0.98] transition duration-150"
          >
            <img
              src={e.profileImage || "/default-profile.png"}
              alt={e.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm sm:text-base font-medium text-gray-800">{e.name}</h3>
                <span className="text-[11px] sm:text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                  CESK 인증
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {e.specialties?.join(", ")} · {e.experience}
              </p>
              {e.introduction && (
                <p className="text-xs sm:text-sm text-gray-700 mt-1 line-clamp-1">
                  {e.introduction}
                </p>
              )}
              <p className="text-[11px] text-gray-500 mt-1 flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {e.region} {e.district}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
