import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Missing Supabase environment variables. Some features may not work.');
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '');

export interface Review {
  id: number;
  model_id: number;
  model_name: string;
  company: string;
  rating: number;
  reviewer_name: string | null;
  performance_review: string;
  improvement_suggestions: string | null;
  created_at: string;
}

export interface UserModel {
  id: number;
  name: string;
  company: string;
  category: string;
  description: string;
  is_open_source: boolean;
  created_at: string;
}
