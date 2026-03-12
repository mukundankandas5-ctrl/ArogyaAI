'use client';

import { useEffect, useState } from 'react';

type PlanData = {
  health_score: number;
  health_status: string;
  health_summary: string;
  diet_plan: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
  nutrition_insights: {
    calories: string;
    protein: string;
    carbs: string;
    fiber: string;
  };
  lifestyle_recommendations: {
    exercise: string;
    hydration: string;
    sleep: string;
    tips: string;
  };
  ai_insights: string;
};

type PlanResultProps = {
  plan: PlanData;
  userName: string;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
};

const statusColors: Record<string, { bg: string; color: string; ring: string }> = {
  Excellent: { bg: '#dcfce7', color: '#15803d', ring: '#22c55e' },
  Good: { bg: '#d1fae5', color: '#059669', ring: '#10b981' },
  Moderate: { bg: '#fef9c3', color: '#ca8a04', ring: '#eab308' },
  Fair: { bg: '#ffedd5', color: '#ea580c', ring: '#f97316' },
  Poor: { bg: '#fee2e2', color: '#dc2626', ring: '#ef4444' },
};

function MealSection({ icon, title, items, color }: { icon: string; title: string; items: string[]; color: string }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: 14,
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    }}>
      <div style={{
        padding: '14px 18px',
        background: color,
        borderBottom: '1px solid #e5e7eb',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{title}</span>
      </div>
      <div style={{ padding: 14 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            padding: '9px 12px',
            background: '#f9fafb',
            borderRadius: 9,
            marginBottom: i < items.length - 1 ? 8 : 0,
            border: '1px solid #f3f4f6',
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#22c55e', marginTop: 6, flexShrink: 0,
            }} />
            <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={{
      padding: '16px 18px',
      background: '#f9fafb',
      borderRadius: 12,
      border: '1px solid #e5e7eb',
    }}>
      <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#111827', lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}

export default function PlanResult({ plan, userName, onSave, saving, saved }: PlanResultProps) {
  const [scoreDisplay, setScoreDisplay] = useState(0);
  const colors = statusColors[plan.health_status] || statusColors.Moderate;

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        setScoreDisplay(Math.min(current, plan.health_score));
        if (current >= plan.health_score) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(timer);
  }, [plan.health_score]);

  return (
    <div style={{ marginTop: 40, animation: 'slideUp 0.6s ease-out forwards' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        borderRadius: 20,
        padding: '28px 32px',
        marginBottom: 20,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 180, height: 180, borderRadius: '50%',
          background: 'rgba(34,197,94,0.1)',
        }} />
        <div style={{
          position: 'absolute', bottom: -30, left: '40%',
          width: 120, height: 120, borderRadius: '50%',
          background: 'rgba(34,197,94,0.06)',
        }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{
                padding: '4px 12px', borderRadius: 100,
                background: 'rgba(34,197,94,0.2)',
                color: '#4ade80', fontSize: 12, fontWeight: 700,
              }}>✨ AI Generated</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'white', margin: 0 }}>
              {userName}&apos;s Personalized Plan
            </h2>
            <p style={{ fontSize: 14, color: '#9ca3af', margin: '6px 0 0', maxWidth: 500 }}>
              {plan.health_summary}
            </p>
          </div>

          {/* Health Score Circle */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          }}>
            <div style={{
              width: 100, height: 100, borderRadius: '50%',
              background: `conic-gradient(${colors.ring} ${scoreDisplay * 3.6}deg, rgba(255,255,255,0.1) 0deg)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
              boxShadow: `0 0 20px ${colors.ring}40`,
            }}>
              <div style={{
                width: 78, height: 78, borderRadius: '50%',
                background: '#1f2937',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 24, fontWeight: 900, color: 'white', lineHeight: 1 }}>{scoreDisplay}</span>
                <span style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600 }}>/ 100</span>
              </div>
            </div>
            <span style={{
              padding: '4px 12px', borderRadius: 100,
              background: colors.bg, color: colors.color,
              fontSize: 12, fontWeight: 700,
            }}>{plan.health_status}</span>
          </div>
        </div>

        {/* AI Insights */}
        {plan.ai_insights && (
          <div style={{
            marginTop: 20, padding: '14px 18px',
            background: 'rgba(34,197,94,0.12)',
            borderRadius: 12,
            border: '1px solid rgba(34,197,94,0.25)',
          }}>
            <p style={{ fontSize: 13.5, color: '#d1fae5', margin: 0, lineHeight: 1.6 }}>
              🤖 <strong style={{ color: '#4ade80' }}>AI Insight:</strong> {plan.ai_insights}
            </p>
          </div>
        )}
      </div>

      {/* Diet Plan Grid */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          🍽️ Personalized Diet Plan
          <span style={{ fontSize: 12, fontWeight: 500, color: '#6b7280' }}>— Tailored to your region & health</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          <MealSection icon="🌅" title="Breakfast" items={plan.diet_plan.breakfast} color="#fff7ed" />
          <MealSection icon="☀️" title="Lunch" items={plan.diet_plan.lunch} color="#f0fdf4" />
          <MealSection icon="🌙" title="Dinner" items={plan.diet_plan.dinner} color="#eff6ff" />
          <MealSection icon="🥜" title="Healthy Snacks" items={plan.diet_plan.snacks} color="#faf5ff" />
        </div>
      </div>

      {/* Nutrition Insights */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          📊 Nutrition Insights
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          <InfoCard icon="🔥" label="Calories" value={plan.nutrition_insights.calories} />
          <InfoCard icon="💪" label="Protein" value={plan.nutrition_insights.protein} />
          <InfoCard icon="🌾" label="Carbohydrates" value={plan.nutrition_insights.carbs} />
          <InfoCard icon="🥦" label="Fiber" value={plan.nutrition_insights.fiber} />
        </div>
      </div>

      {/* Lifestyle Recommendations */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          🌿 Lifestyle Recommendations
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            { icon: '🏃', label: 'Exercise Plan', value: plan.lifestyle_recommendations.exercise, bg: '#f0fdf4' },
            { icon: '💧', label: 'Hydration', value: plan.lifestyle_recommendations.hydration, bg: '#eff6ff' },
            { icon: '😴', label: 'Sleep', value: plan.lifestyle_recommendations.sleep, bg: '#faf5ff' },
            { icon: '💡', label: 'Health Tips', value: plan.lifestyle_recommendations.tips, bg: '#fff7ed' },
          ].map(({ icon, label, value, bg }) => (
            <div key={label} style={{
              background: bg, borderRadius: 14,
              padding: '18px 20px', border: '1px solid #e5e7eb',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{label}</span>
              </div>
              <p style={{ fontSize: 13.5, color: '#374151', margin: 0, lineHeight: 1.7 }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div style={{ textAlign: 'center', paddingBottom: 8 }}>
        <button
          onClick={onSave}
          disabled={saving || saved}
          className="btn-primary"
          style={{ padding: '14px 36px', fontSize: 15 }}
        >
          {saved ? '✅ Plan Saved to Database!' : saving ? (
            <>
              <span style={{
                width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)',
                borderTopColor: 'white', borderRadius: '50%',
                display: 'inline-block', animation: 'spin 0.8s linear infinite',
              }} />
              Saving to Supabase...
            </>
          ) : '💾 Save Plan to My Account'}
        </button>
        {saved && (
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
            View your saved plans in the <a href="/saved" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 600 }}>Saved Plans</a> section
          </p>
        )}
      </div>
    </div>
  );
}
