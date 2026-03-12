-- ArogyaAI Database Schema
-- Run this in the Supabase SQL Editor for project: gmvlsbywpezlwshudwfo

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  age INTEGER,
  weight DECIMAL(5,2),
  height DECIMAL(5,2),
  region TEXT,
  diet_preference TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generated Plans table
CREATE TABLE IF NOT EXISTS generated_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
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

-- Enable Row Level Security (RLS) - allow public read/write for prototype
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE generated_plans ENABLE ROW LEVEL SECURITY;

-- Allow public access for prototype demo
CREATE POLICY "Allow public insert on users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on users" ON users FOR SELECT USING (true);
CREATE POLICY "Allow public insert on generated_plans" ON generated_plans FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on generated_plans" ON generated_plans FOR SELECT USING (true);
