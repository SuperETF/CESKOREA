import { supabase } from "../../../lib/supabaseClient";

export async function fetchExperts() {
  const { data, error } = await supabase
    .from("certified_experts")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}
