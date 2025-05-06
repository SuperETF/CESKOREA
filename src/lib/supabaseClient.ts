import { createClient } from "@supabase/supabase-js";

const supabaseUrl      = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey  = import.meta.env.VITE_SUPABASE_KEY!;   // ← 이전 VITE_SUPABASE_ANON_KEY → VITE_SUPABASE_KEY 로 변경

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("ENV URL:", supabaseUrl);
console.log("ENV KEY:", supabaseAnonKey);
