-- ArogyaAI Database Schema
-- Run this in the Supabase SQL Editor for project: gmvlsbywpezlwshudwfo

-- We no longer need a custom users table because we use Supabase Auth.
-- Generated Plans table
CREATE TABLE IF NOT EXISTS generated_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name TEXT,
  health_score INTEGER,
  health_status TEXT,
  health_summary TEXT,
  diet_plan JSONB,
  nutrition_insights JSONB,
  lifestyle_recommendations JSONB,
  exercise_plan TEXT,
  health_tips TEXT,
  ai_insights TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) - Secure for Authenticated Users
ALTER TABLE generated_plans ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own plans
CREATE POLICY "Users can insert their own plans" 
ON generated_plans FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- Allow users to view their own plans
CREATE POLICY "Users can view their own plans" 
ON generated_plans FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

-- Allow users to delete their own plans (optional but good practice)
CREATE POLICY "Users can delete their own plans" 
ON generated_plans FOR DELETE 
TO authenticated 
USING (auth.uid() = user_id);
