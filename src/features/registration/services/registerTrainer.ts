// src/features/registration/services/registerTrainer.ts
import { supabase } from "../../../lib/supabaseClient";

export interface TrainerPayload {
  name: string;
  phone: string;
  email: string;
  title?: string;
  specialties: string[];
  experience: string;
  certificates: { name: string; issueDate: string; expiryDate: string }[];
  awards?: { name: string; year: string }[];
  region: string;
  district: string;
  address: string;
  introduction: string;
  philosophy?: string;
  profileImage: string | null; // ✅ 여기 중요
  programs?: {
    name: string;
    duration: string;
    price: string;
    description: string;
  }[];
  ceskCert: boolean;
}

export async function registerTrainer(data: TrainerPayload) {
  const { error } = await supabase.from("certified_experts").insert([data]);
  if (error) throw error;
}
