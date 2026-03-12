import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { userProfile, plan } = body;

    // Save generated plan associated with the auth user
    const { data: planData, error: planError } = await supabase
      .from('generated_plans')
      .insert([{
        user_id: user.id,
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
