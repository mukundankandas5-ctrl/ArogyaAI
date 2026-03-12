import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('generated_plans')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) throw error;

    return NextResponse.json({ success: true, plans: data });
  } catch (error) {
    console.error('Fetch plans error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch plans' }, { status: 500 });
  }
}
