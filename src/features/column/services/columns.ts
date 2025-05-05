import { supabase } from "../../../lib/supabaseClient";

export async function fetchColumns() {
  const { data, error } = await supabase
    .from("columns")
    .select("*, certified_experts(name)")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}
