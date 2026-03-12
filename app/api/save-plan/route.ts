import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userProfile, plan } = body;

    // First insert user profile
    const { data: userData, error: userError } = await supabase
      .from('users')
      .insert([{
        name: userProfile.name,
        age: userProfile.age,
        weight: userProfile.weight,
        height: userProfile.height,
        region: userProfile.region,
        diet_preference: userProfile.dietPreference,
      }])
      .select()
      .single();

    if (userError) throw userError;

    // Then save generated plan
    const { data: planData, error: planError } = await supabase
      .from('generated_plans')
      .insert([{
        user_id: userData.id,
        user_name: userProfile.name,
        health_score: plan.health_score,
        diet_plan: plan.diet_plan,
        exercise_plan: plan.lifestyle_recommendations.exercise,
        health_tips: plan.lifestyle_recommendations.tips,
        nutrition_insights: plan.nutrition_insights,
        lifestyle_recommendations: plan.lifestyle_recommendations,
        health_status: plan.health_status,
        health_summary: plan.health_summary,
        ai_insights: plan.ai_insights,
      }])
      .select()
      .single();

    if (planError) throw planError;

    return NextResponse.json({ success: true, data: planData });
  } catch (error) {
    console.error('Save plan error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save plan' }, { status: 500 });
  }
}
