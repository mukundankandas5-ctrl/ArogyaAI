'use client';

import Navbar from '@/components/Navbar';
import HealthForm from '@/components/HealthForm';
import PlanResult from '@/components/PlanResult';
import LoadingShimmer from '@/components/LoadingShimmer';
import { useState } from 'react';

type FormData = {
  name: string;
  age: string;
  weight: string;
  height: string;
  gender: string;
  medicalCondition: string;
  region: string;
  dietPreference: string;
  activityLevel: string;
  naturalLanguageInput: string;
};

export default function GeneratePage() {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<null | Record<string, unknown>>(null);
  const [currentForm, setCurrentForm] = useState<FormData | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    setError('');
    setPlan(null);
    setSaved(false);
    setCurrentForm(formData);

    try {
      const res = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setPlan(data.plan);
        setTimeout(() => {
          document.getElementById('plan-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setError('Failed to generate plan. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!plan || !currentForm) return;
    setSaving(true);
    try {
      const res = await fetch('/api/save-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userProfile: currentForm, plan }),
      });
      const data = await res.json();
      if (data.success) {
        setSaved(true);
      } else {
        // Fallback: save to localStorage
        const existing = JSON.parse(localStorage.getItem('arogyai_plans') || '[]');
        existing.unshift({ ...plan, user_name: currentForm.name, created_at: new Date().toISOString() });
        localStorage.setItem('arogyai_plans', JSON.stringify(existing.slice(0, 20)));
        setSaved(true);
      }
    } catch {
      // Fallback to localStorage
      if (currentForm) {
        const existing = JSON.parse(localStorage.getItem('arogyai_plans') || '[]');
        existing.unshift({ ...plan, user_name: currentForm.name, created_at: new Date().toISOString() });
        localStorage.setItem('arogyai_plans', JSON.stringify(existing.slice(0, 20)));
        setSaved(true);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <Navbar />
      <div style={{ paddingTop: 100, paddingBottom: 80 }}>
        {/* Page Header */}
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 40 }}>
          <span className="section-label" style={{ marginBottom: 14, display: 'inline-flex' }}>
            ✨ AI Plan Generator
          </span>
          <h1 style={{
            fontSize: 38, fontWeight: 900, color: '#111827',
            letterSpacing: '-1px', margin: '12px 0 16px',
          }}>
            Generate Your <span className="gradient-text">Personalized Plan</span>
          </h1>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.7 }}>
            Enter your health details and let Gemini AI create a personalized diet and lifestyle plan tailored to your regional food preferences and medical needs.
          </p>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <HealthForm onSubmit={handleSubmit} loading={loading} />

          {error && (
            <div style={{
              marginTop: 20, padding: '14px 18px',
              background: '#fef2f2', border: '1px solid #fecaca',
              borderRadius: 12, color: '#dc2626', fontSize: 14,
            }}>
              ⚠️ {error}
            </div>
          )}

          {loading && <LoadingShimmer />}

          {plan && !loading && (
            <div id="plan-result">
              <PlanResult
                plan={plan as Parameters<typeof PlanResult>[0]['plan']}
                userName={currentForm?.name || 'You'}
                onSave={handleSave}
                saving={saving}
                saved={saved}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
