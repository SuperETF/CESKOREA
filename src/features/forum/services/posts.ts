import { supabase } from "../../../lib/supabaseClient";

export async function fetchPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("*, certified_experts(name)")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function createPost(post: { title: string; content: string; author_id: string; }) {
  const { data, error } = await supabase
    .from("posts")
    .insert(post)
    .single();

  if (error) throw error;
  return data;
}
