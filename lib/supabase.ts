import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserProfile = {
  id?: string;
  name: string;
  age: number;
  weight: number;
  height: number;
  region: string;
  diet_preference: string;
  created_at?: string;
};

export type GeneratedPlan = {
  id?: string;
  user_id?: string;
  user_name: string;
  health_score: number;
  diet_plan: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
  exercise_plan: string;
  health_tips: string;
  nutrition_insights: {
    calories: string;
    protein: string;
    carbs: string;
  };
  lifestyle_recommendations: {
    exercise: string;
    hydration: string;
    sleep: string;
    tips: string;
  };
  created_at?: string;
};
