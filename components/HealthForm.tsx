'use client';

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

type HealthFormProps = {
  onSubmit: (data: FormData) => void;
  loading: boolean;
};

const medicalConditions = ['None', 'Diabetes', 'Hypertension', 'Obesity', 'Heart Disease'];
const regions = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'North India'];

export default function HealthForm({ onSubmit, loading }: HealthFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '',
    age: '',
    weight: '',
    height: '',
    gender: 'Male',
    medicalCondition: 'None',
    region: 'Tamil Nadu',
    dietPreference: 'Vegetarian',
    activityLevel: 'Moderate',
    naturalLanguageInput: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.age || parseInt(form.age) < 5 || parseInt(form.age) > 120) newErrors.age = 'Enter a valid age (5–120)';
    if (!form.weight || parseFloat(form.weight) < 20 || parseFloat(form.weight) > 300) newErrors.weight = 'Enter a valid weight (20–300 kg)';
    if (!form.height || parseFloat(form.height) < 100 || parseFloat(form.height) > 250) newErrors.height = 'Enter a valid height (100–250 cm)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const inStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #e5e7eb',
    borderRadius: 10,
    fontSize: 15,
    fontFamily: 'Inter, sans-serif',
    color: '#111827',
    background: 'white',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: '#374151',
    marginBottom: 6,
    letterSpacing: '0.01em',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: 12,
    color: '#dc2626',
    marginTop: 4,
  };

  const fieldWrap: React.CSSProperties = { display: 'flex', flexDirection: 'column' };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        background: 'white',
        borderRadius: 20,
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}>
        {/* Form header */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
          padding: '24px 32px',
          borderBottom: '1px solid #bbf7d0',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22,
              boxShadow: '0 2px 8px rgba(34,197,94,0.2)',
            }}>📋</div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>
                Your Health Profile
              </h2>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, marginTop: 2 }}>
                Fill in your details to get a personalized AI health plan
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: '28px 32px' }}>
          {/* Row 1: Name + Gender */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 20 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Full Name *</label>
              <input
                style={inStyle}
                placeholder="e.g. Mukesh Kumar"
                value={form.name}
                onChange={e => update('name', e.target.value)}
                onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.12)'; }}
                onBlur={e => { e.target.style.borderColor = errors.name ? '#dc2626' : '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
              />
              {errors.name && <span style={errorStyle}>{errors.name}</span>}
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Gender</label>
              <select
                style={{ ...inStyle, cursor: 'pointer' }}
                value={form.gender}
                onChange={e => update('gender', e.target.value)}
                onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.12)'; }}
                onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Row 2: Age, Weight, Height */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
            {[
              { key: 'age', label: 'Age *', placeholder: 'Years', suffix: 'yrs' },
              { key: 'weight', label: 'Weight *', placeholder: 'Kilograms', suffix: 'kg' },
              { key: 'height', label: 'Height *', placeholder: 'Centimeters', suffix: 'cm' },
            ].map(({ key, label, placeholder, suffix }) => (
              <div key={key} style={fieldWrap}>
                <label style={labelStyle}>{label}</label>
                <div style={{ position: 'relative' }}>
                  <input
                    style={{ ...inStyle, paddingRight: 40 }}
                    type="number"
                    placeholder={placeholder}
                    value={form[key as keyof FormData]}
                    onChange={e => update(key as keyof FormData, e.target.value)}
                    onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.12)'; }}
                    onBlur={e => { e.target.style.borderColor = errors[key as keyof FormData] ? '#dc2626' : '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                  />
                  <span style={{
                    position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                    fontSize: 12, color: '#9ca3af', fontWeight: 500,
                  }}>{suffix}</span>
                </div>
                {errors[key as keyof FormData] && <span style={errorStyle}>{errors[key as keyof FormData]}</span>}
              </div>
            ))}
          </div>

          {/* Row 3: Medical Condition + Region */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Medical Condition</label>
              <select
                style={{ ...inStyle, cursor: 'pointer' }}
                value={form.medicalCondition}
                onChange={e => update('medicalCondition', e.target.value)}
                onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.12)'; }}
                onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
              >
                {medicalConditions.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Region</label>
              <select
                style={{ ...inStyle, cursor: 'pointer' }}
                value={form.region}
                onChange={e => update('region', e.target.value)}
                onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.12)'; }}
                onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
              >
                {regions.map(r => <option key={r}>{r}</option>)}
              </select>
            </div>
          </div>

          {/* Row 4: Diet Preference + Activity Level */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div style={fieldWrap}>
              <label style={labelStyle}>Diet Preference</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Vegetarian', 'Non-Vegetarian'].map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update('dietPreference', opt)}
                    style={{
                      flex: 1, padding: '11px 8px',
                      borderRadius: 10, border: '1.5px solid',
                      borderColor: form.dietPreference === opt ? '#22c55e' : '#e5e7eb',
                      background: form.dietPreference === opt ? '#f0fdf4' : 'white',
                      color: form.dietPreference === opt ? '#16a34a' : '#6b7280',
                      fontSize: 13, fontWeight: 600,
                      cursor: 'pointer', transition: 'all 0.15s ease',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {opt === 'Vegetarian' ? '🌿 Veg' : '🍗 Non-Veg'}
                  </button>
                ))}
              </div>
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Activity Level</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Low', 'Moderate', 'High'].map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update('activityLevel', opt)}
                    style={{
                      flex: 1, padding: '11px 4px',
                      borderRadius: 10, border: '1.5px solid',
                      borderColor: form.activityLevel === opt ? '#22c55e' : '#e5e7eb',
                      background: form.activityLevel === opt ? '#f0fdf4' : 'white',
                      color: form.activityLevel === opt ? '#16a34a' : '#6b7280',
                      fontSize: 12, fontWeight: 600,
                      cursor: 'pointer', transition: 'all 0.15s ease',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {opt === 'Low' ? '🚶 Low' : opt === 'Moderate' ? '🏃 Mod' : '💪 High'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Natural Language Input */}
          <div style={fieldWrap}>
            <label style={labelStyle}>
              🗣️ Tell us your food preferences <span style={{ color: '#9ca3af', fontWeight: 400 }}>(AI understands Tamil, Hindi, English)</span>
            </label>
            <textarea
              style={{
                ...inStyle,
                minHeight: 100,
                resize: 'vertical',
                lineHeight: 1.6,
              }}
              placeholder="E.g. &quot;எனக்கு சர்க்கரை நோய் உள்ளது, இட்லி மற்றும் தோசை பிடிக்கும்&quot; or &quot;I like dosa and idli. I have diabetes. Avoid spicy food.&quot;"
              value={form.naturalLanguageInput}
              onChange={e => update('naturalLanguageInput', e.target.value)}
              onFocus={e => { e.target.style.borderColor = '#22c55e'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.12)'; }}
              onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
            />
            <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>
              💡 You can write in Tamil, Hindi, or English — our AI understands all three
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', marginTop: 24, padding: '16px', fontSize: 16, borderRadius: 12 }}
          >
            {loading ? (
              <>
                <span style={{
                  width: 18, height: 18, border: '2.5px solid rgba(255,255,255,0.4)',
                  borderTopColor: 'white', borderRadius: '50%',
                  display: 'inline-block', animation: 'spin 0.8s linear infinite',
                }} />
                Generating your plan...
              </>
            ) : (
              <> ✨ Generate My AI Health Plan </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
