import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function StatsSection() {
  const [total, setTotal] = useState(0);
  const [weekly, setWeekly] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const startOfWeek = new Date();
      startOfWeek.setHours(0, 0, 0, 0);
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1); // 이번주 월요일

      const { count: totalCount } = await supabase
        .from("certified_experts")
        .select("*", { count: "exact", head: true });

      const { count: newCount } = await supabase
        .from("certified_experts")
        .select("*", { count: "exact", head: true })
        .gte("created_at", startOfWeek.toISOString());

      setTotal(totalCount || 0);
      setWeekly(newCount || 0);
    };

    fetchStats();
  }, []);

  return (
    <section className="bg-white rounded-xl shadow-md p-5">
      <div className="flex justify-between text-center text-gray-700">
        <div className="flex-1">
          <p className="text-sm text-gray-500">전체 등록 전문가</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{total}명</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">이번 주 신규 등록</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{weekly}명</p>
        </div>
      </div>
    </section>
  );
}
