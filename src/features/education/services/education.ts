// src/features/education/services/education.ts

import { supabase } from "../../../lib/supabaseClient";
import type { Education } from "../EducationPage";

export async function fetchEducations(): Promise<Education[]> {
  const { data, error } = await supabase
    .from("education")    // ← 여기서 제네릭 제거
    .select("*")          // ← select() 에는 제네릭을 사용하지 않습니다
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Education[];   // ← 이곳에서 Education[] 으로 캐스팅
}
