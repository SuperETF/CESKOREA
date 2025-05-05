import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTrainerById } from "../services/fetchTrainerById";
import { ArrowLeft, Share2 } from "lucide-react";

export default function TrainerProfilePage() {
  const { id } = useParams<{ id: string }>();
  const [trainer, setTrainer] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState("소개");

  useEffect(() => {
    if (!id) return;
    const loadTrainer = async () => {
      const data = await fetchTrainerById(id);
      setTrainer(data);
    };
    loadTrainer();
  }, [id]);

  if (!trainer) {
    return (
      <div className="text-center py-20 text-sm text-gray-500">
        트레이너 정보를 불러오는 중입니다...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 pb-16">
      {/* 상단 헤더 */}
      <header className="fixed top-0 w-full bg-white shadow-md z-10 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
  <button
    onClick={() => window.history.back()}
    aria-label="뒤로가기"
    className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 active:scale-95 transition"
  >
    <ArrowLeft className="w-5 h-5" />
  </button>
  <h1 className="text-lg font-bold text-blue-600">전문가 프로필</h1>
</div>

        <button
          className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 active:scale-95 transition"
          aria-label="공유하기"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="w-full max-w-md mx-auto px-4 pt-20 pb-20">
        {/* 프로필 요약 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-5">
          <div className="flex items-start">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-24 h-24 rounded-lg object-cover mr-4"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h2 className="text-xl font-bold mr-2">{trainer.name}</h2>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                  CESK 인증
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {trainer.title || "트레이너"} · {trainer.experience}
              </p>
              <div className="flex flex-wrap gap-1">
                {(trainer.specialties || []).map((s: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {trainer.introduction && (
            <p className="text-sm text-gray-600 mt-4 leading-relaxed line-clamp-3">
              {trainer.introduction}
            </p>
          )}
        </div>

        {/* 탭 메뉴 */}
        <div className="bg-white rounded-xl shadow-sm mb-5 sticky top-14 z-10">
          <div className="flex border-b">
            {["소개", "프로그램", "위치"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 콘텐츠 */}
        {activeTab === "소개" && (
          <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
            <div>
              <h3 className="text-base font-bold mb-2">소개</h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {trainer.introduction}
              </p>
            </div>
            {trainer.philosophy && (
              <div>
                <h3 className="text-base font-bold mb-2">트레이닝 철학</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {trainer.philosophy}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "프로그램" && trainer.programs && (
          <div className="space-y-4">
            {trainer.programs.map((program: any, idx: number) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-base font-bold">{program.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{program.duration}</p>
                <p className="text-sm text-gray-700 mt-2">{program.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "위치" && trainer.location && (
          <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
            <h3 className="text-base font-bold">주소</h3>
            <p className="text-sm text-gray-700">{trainer.location.address}</p>
            <h4 className="text-base font-bold">대중교통</h4>
            <p className="text-sm text-gray-700">{trainer.location.nearbyTransport}</p>
            <h4 className="text-base font-bold">찾아오시는 길</h4>
            <p className="text-sm text-gray-700">{trainer.location.directions}</p>
          </div>
        )}
      </main>
    </div>
  );
}
