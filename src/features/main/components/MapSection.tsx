import React from "react";
import { MapPin } from "lucide-react";

const regionData: Record<string, number> = {
  서울: 23, 경기: 18, 인천: 12, 강원: 8, 충북: 6, 충남: 9,
  대전: 11, 경북: 7, 경남: 10, 대구: 14, 울산: 8, 부산: 16,
  전북: 5, 전남: 7, 광주: 9, 제주: 4,
};

export default function MapSection({
  hoveredRegion,
  onRegionHover,
  onRegionClick,
}: {
  hoveredRegion: string | null;
  onRegionHover: (r: string | null) => void;
  onRegionClick: (r: string) => void;
}) {
  return (
    <section className="bg-white rounded-xl shadow p-4">
      <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
        지역별 트레이너 찾기
      </h2>

      <div className="relative w-full aspect-[1/1.2]">
        <img
          src="https://static.readdy.ai/image/265f40cd568dac65bf1fc135fa5d222e/d28695019f8842407cea0206b69c60cd.png"
          alt="South Korea Map"
          className="w-full h-full object-contain"
          useMap="#koreaMap"
        />

        <map name="koreaMap">
          <area shape="poly" coords="350,200,380,180,410,190,420,220,400,240,370,230"
            alt="서울"
            onMouseEnter={() => onRegionHover("서울")}
            onMouseLeave={() => onRegionHover(null)}
            onClick={() => onRegionClick("서울")}
          />
          <area shape="poly" coords="300,150,420,140,450,200,430,270,350,300,280,260"
            alt="경기"
            onMouseEnter={() => onRegionHover("경기")}
            onMouseLeave={() => onRegionHover(null)}
            onClick={() => onRegionClick("경기")}
          />
          <area shape="poly" coords="500,600,530,580,560,600,550,630,520,640,500,620"
            alt="부산"
            onMouseEnter={() => onRegionHover("부산")}
            onMouseLeave={() => onRegionHover(null)}
            onClick={() => onRegionClick("부산")}
          />
          <area shape="poly" coords="320,780,380,770,400,790,380,810,330,800"
            alt="제주"
            onMouseEnter={() => onRegionHover("제주")}
            onMouseLeave={() => onRegionHover(null)}
            onClick={() => onRegionClick("제주")}
          />
        </map>

        {hoveredRegion && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm text-center">
              <p className="font-semibold text-gray-800">{hoveredRegion}</p>
              <p className="text-blue-500">
                트레이너 {regionData[hoveredRegion]}명
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 범례 */}
      <div className="flex justify-center mt-4 text-xs text-gray-500 gap-4">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-sm" />
          <span>10명 이상</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-300 rounded-sm" />
          <span>5-9명</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-100 rounded-sm" />
          <span>1-4명</span>
        </div>
      </div>
    </section>
  );
}
