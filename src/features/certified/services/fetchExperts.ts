import { supabase } from "../../../lib/supabaseClient";

const fetchExperts = async () => {
  const { data, error } = await supabase
    .from("certified_experts")
    .select("id, name, specialties, experience, region, district, profileImage, ceskCert")
    .eq("ceskCert", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ 전문가 목록 로딩 실패", error);
    return [];
  }

  return (data || []).map((e) => ({
    id: e.id,
    name: e.name,
    specialty: (e.specialties || []).join("/"),
    experience: e.experience,
    location: `${e.region} ${e.district}`,
    image: e.profileImage || "/default-profile.png",
  }));
};

export default fetchExperts;
