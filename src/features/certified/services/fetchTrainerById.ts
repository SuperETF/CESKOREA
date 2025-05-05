// src/features/certified/services/fetchTrainerById.ts
import { supabase } from "../../../lib/supabaseClient";

export const fetchTrainerById = async (id: string) => {
  const { data, error } = await supabase
    .from("certified_experts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("❌ 트레이너 조회 실패:", error);
    return null;
  }

  return {
    ...data,
    specialty: (data.specialties || []).join("/"),
    locationText: `${data.region} ${data.district}`,
    image: data.profileImage || "/default-profile.png",
  };
};
