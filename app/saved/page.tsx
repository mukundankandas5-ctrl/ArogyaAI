'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

type SavedPlan = {
  id?: string;
  user_name: string;
  health_score: number;
  health_status: string;
  diet_plan: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
  lifestyle_recommendations?: {
    exercise: string;
    hydration: string;
    sleep: string;
    tips: string;
  };
  exercise_plan?: string;
  health_tips?: string;
  created_at: string;
};

const statusColors: Record<string, { bg: string; color: string }> = {
  Excellent: { bg: '#dcfce7', color: '#15803d' },
  Good: { bg: '#d1fae5', color: '#059669' },
  Moderate: { bg: '#fef9c3', color: '#ca8a04' },
  Fair: { bg: '#ffedd5', color: '#ea580c' },
  Poor: { bg: '#fee2e2', color: '#dc2626' },
};

export default function SavedPage() {
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch('/api/get-plans');
        const data = await res.json();
        if (data.success && data.plans?.length > 0) {
          setPlans(data.plans);
        } else {
          // Fallback: load from localStorage
          const local = JSON.parse(localStorage.getItem('arogyai_plans') || '[]');
          setPlans(local);
        }
      } catch {
        const local = JSON.parse(localStorage.getItem('arogyai_plans') || '[]');
        setPlans(local);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
      });
    } catch { return dateStr; }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <Navbar />
      <div style={{ paddingTop: 100, paddingBottom: 80, maxWidth: 900, margin: '0 auto', padding: '100px 24px 80px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label" style={{ marginBottom: 14, display: 'inline-flex' }}>💾 Your Plans</span>
          <h1 style={{ fontSize: 36, fontWeight: 900, color: '#111827', letterSpacing: '-0.8px', margin: '12px 0 12px' }}>
            Saved Health Plans
          </h1>
          <p style={{ color: '#6b7280', fontSize: 16 }}>
            All your AI-generated nutrition plans stored securely
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              border: '3px solid #e5e7eb', borderTopColor: '#22c55e',
              animation: 'spin 0.8s linear infinite',
              margin: '0 auto 16px',
            }} />
            <p style={{ color: '#6b7280' }}>Loading your saved plans...</p>
          </div>
        ) : plans.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '80px 40px',
            background: 'white', borderRadius: 20, border: '1px solid #e5e7eb',
          }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🌿</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 10 }}>No saved plans yet</h3>
            <p style={{ color: '#6b7280', marginBottom: 24 }}>
              Generate your first AI health plan and save it here.
            </p>
            <a href="/generate" className="btn-primary" style={{ padding: '14px 32px', textDecoration: 'none' }}>
              ✨ Generate My First Plan
            </a>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {plans.map((plan, i) => {
              const colors = statusColors[plan.health_status] || statusColors.Moderate;
              const key = plan.id || String(i);
              const isOpen = expanded === key;

              return (
                <div key={key} style={{
                  background: 'white', borderRadius: 16,
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.2s ease',
                }}>
                  {/* Plan header */}
                  <div
                    onClick={() => setExpanded(isOpen ? null : key)}
                    style={{
                      padding: '20px 24px',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      cursor: 'pointer',
                      gap: 16,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
                      {/* Score circle */}
                      <div style={{
                        width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                        background: `conic-gradient(#22c55e ${(plan.health_score || 0) * 3.6}deg, #f3f4f6 0deg)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{
                          width: 42, height: 42, borderRadius: '50%',
                          background: 'white', display: 'flex', flexDirection: 'column',
                          alignItems: 'center', justifyContent: 'center',
                        }}>
                          <span style={{ fontSize: 14, fontWeight: 800, color: '#111827', lineHeight: 1 }}>{plan.health_score || '—'}</span>
                        </div>
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 17, fontWeight: 700, color: '#111827' }}>
                            {plan.user_name}&apos;s Plan
                          </span>
                          <span style={{
                            padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 600,
                            background: colors.bg, color: colors.color,
                          }}>{plan.health_status || 'Good'}</span>
                        </div>
                        <p style={{ fontSize: 13, color: '#9ca3af', margin: '3px 0 0' }}>
                          {formatDate(plan.created_at)}
                        </p>
                      </div>
                    </div>
                    <div style={{ fontSize: 18, color: '#9ca3af', flexShrink: 0 }}>
                      {isOpen ? '▲' : '▼'}
                    </div>
                  </div>

                  {/* Expanded details */}
                  {isOpen && (
                    <div style={{ borderTop: '1px solid #f3f4f6', padding: '20px 24px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                        {/* Breakfast + Lunch */}
                        {[
                          { icon: '🌅', title: 'Breakfast', items: plan.diet_plan?.breakfast || [] },
                          { icon: '☀️', title: 'Lunch', items: plan.diet_plan?.lunch || [] },
                          { icon: '🌙', title: 'Dinner', items: plan.diet_plan?.dinner || [] },
                          { icon: '🥜', title: 'Snacks', items: plan.diet_plan?.snacks || [] },
                        ].map(({ icon, title, items }) => (
                          <div key={title}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                              {icon} {title}
                            </div>
                            {items.map((item, j) => (
                              <div key={j} style={{
                                fontSize: 13, color: '#6b7280', padding: '5px 10px',
                                background: '#f9fafb', borderRadius: 8, marginBottom: 6,
                              }}>• {item}</div>
                            ))}
                          </div>
                        ))}
                      </div>

                      {(plan.lifestyle_recommendations?.exercise || plan.exercise_plan) && (
                        <div style={{ marginTop: 16, padding: '14px 16px', background: '#f0fdf4', borderRadius: 10 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#16a34a', marginBottom: 4 }}>🏃 Exercise Plan</div>
                          <p style={{ fontSize: 13, color: '#374151', margin: 0 }}>
                            {plan.lifestyle_recommendations?.exercise || plan.exercise_plan}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
