'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

const features = [
  {
    icon: '🧠',
    title: 'AI-Powered Plans',
    desc: 'Gemini AI analyzes your health profile to create truly personalized nutrition plans.',
    color: '#f0fdf4',
  },
  {
    icon: '🌿',
    title: 'Tamil Nadu Diet Intelligence',
    desc: 'Deep knowledge of South Indian cuisine — idli, dosa, sambar, poriyal, and more.',
    color: '#eff6ff',
  },
  {
    icon: '🗣️',
    title: 'Natural Language Input',
    desc: 'Tell us your preferences in Tamil, Hindi, or English. AI understands all.',
    color: '#faf5ff',
  },
  {
    icon: '🏥',
    title: 'Medical Condition Aware',
    desc: 'Tailored plans for Diabetes, Hypertension, Heart Disease, Obesity, and more.',
    color: '#fff7ed',
  },
  {
    icon: '📍',
    title: 'Regional Adaptation',
    desc: 'Food recommendations adapt based on your region — Tamil Nadu, Kerala, North India, and more.',
    color: '#f0fdf4',
  },
  {
    icon: '📊',
    title: 'Health Score',
    desc: 'Get an instant AI-calculated health score with actionable personalized insights.',
    color: '#fdf4ff',
  },
];

const foods = [
  { name: 'Idli', emoji: '🫓', region: 'Tamil Nadu' },
  { name: 'Dosa', emoji: '🥞', region: 'Tamil Nadu' },
  { name: 'Pongal', emoji: '🍲', region: 'Tamil Nadu' },
  { name: 'Sambar', emoji: '🍛', region: 'Tamil Nadu' },
  { name: 'Sundal', emoji: '🌿', region: 'Tamil Nadu' },
  { name: 'Appam', emoji: '🥛', region: 'Kerala' },
  { name: 'Avial', emoji: '🥘', region: 'Kerala' },
  { name: 'Roti', emoji: '🫓', region: 'North India' },
  { name: 'Dal', emoji: '🍲', region: 'North India' },
];

const steps = [
  { num: '01', title: 'Enter Your Health Profile', desc: 'Share your age, weight, height, medical conditions, and dietary preferences.' },
  { num: '02', title: 'Describe Your Food Preferences', desc: 'Type naturally in Tamil, Hindi, or English. AI will understand your food habits.' },
  { num: '03', title: 'AI Generates Your Plan', desc: 'Gemini AI analyzes your profile and creates a fully personalized nutrition plan.' },
  { num: '04', title: 'Save & Follow Your Plan', desc: 'Save to your account and track your health journey with regional food intelligence.' },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 100,
        background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: 60, left: '5%', width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 80, right: '8%', width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div className="animate-fade-in-up" style={{ animationDelay: '0s', opacity: 0 }}>
            <span className="section-label" style={{ marginBottom: 20, display: 'inline-flex' }}>
              🌿 AI-Powered Health Technology
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-200" style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 900,
            color: '#111827',
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            margin: '16px 0 24px',
            opacity: 0,
          }}>
            AI-Powered Nutrition Planner
            <br />
            <span className="gradient-text">for Tamil Nadu & Beyond</span>
          </h1>

          <p className="animate-fade-in-up delay-300" style={{
            fontSize: 19,
            color: '#6b7280',
            lineHeight: 1.7,
            maxWidth: 600,
            margin: '0 auto 40px',
            opacity: 0,
          }}>
            Generate personalized diet and lifestyle plans using AI based on your health profile, medical conditions, and regional food habits.
          </p>

          <div className="animate-fade-in-up delay-400" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
            <Link href="/generate" className="btn-primary" style={{
              padding: '16px 32px', fontSize: 16, borderRadius: 14,
              boxShadow: '0 4px 20px rgba(34,197,94,0.35)',
            }}>
              ✨ Generate My Health Plan
            </Link>
            <Link href="/about" className="btn-secondary" style={{ padding: '16px 32px', fontSize: 16, borderRadius: 14 }}>
              Learn More →
            </Link>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in-up delay-500" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 24, marginTop: 48, flexWrap: 'wrap', opacity: 0,
          }}>
            {['🧠 Powered by Gemini AI', '🏥 Medically Aware', '🗣️ Tamil / Hindi / English', '🌿 Regional Food Intelligence'].map(badge => (
              <span key={badge} style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>{badge}</span>
            ))}
          </div>
        </div>

        {/* Floating food emojis */}
        <div className="animate-float" style={{ position: 'absolute', top: 120, left: '12%', fontSize: 32, opacity: 0.5 }}>🥗</div>
        <div className="animate-float delay-200" style={{ position: 'absolute', top: 200, right: '12%', fontSize: 28, opacity: 0.4 }}>🥘</div>
        <div className="animate-float delay-400" style={{ position: 'absolute', bottom: 100, left: '20%', fontSize: 24, opacity: 0.35 }}>🫓</div>
        <div className="animate-float delay-100" style={{ position: 'absolute', bottom: 140, right: '18%', fontSize: 26, opacity: 0.4 }}>💊</div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'inline-flex' }}>✨ Features</span>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: '#111827', letterSpacing: '-0.8px' }}>
            Everything you need for <br /><span className="gradient-text">healthier living</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {features.map(f => (
            <div key={f.title} className="card" style={{ padding: '28px 28px' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: f.color, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 24, marginBottom: 16,
              }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tamil Nadu Foods */}
      <section style={{ background: '#f9fafb', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 16, display: 'inline-flex' }}>🍛 Regional Intelligence</span>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#111827', letterSpacing: '-0.6px' }}>
              Deep knowledge of <span className="gradient-text">regional cuisine</span>
            </h2>
            <p style={{ fontSize: 16, color: '#6b7280', marginTop: 12 }}>Our AI knows the nutritional value and cultural significance of every dish</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {foods.map(food => (
              <div key={food.name} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 20px',
                background: 'white',
                borderRadius: 100,
                border: '1.5px solid #e5e7eb',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#22c55e';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}>
                <span style={{ fontSize: 20 }}>{food.emoji}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{food.name}</div>
                  <div style={{ fontSize: 11, color: '#9ca3af' }}>{food.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'inline-flex' }}>🚀 How It Works</span>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: '#111827', letterSpacing: '-0.8px' }}>
            Get your plan in <span className="gradient-text">4 simple steps</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ position: 'relative' }}>
              <div className="card-flat" style={{ padding: '28px 24px' }}>
                <div style={{
                  fontSize: 13, fontWeight: 800, color: '#22c55e',
                  letterSpacing: '0.08em', marginBottom: 16,
                }}>STEP {step.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: '50%', right: -12,
                  transform: 'translateY(-50%)',
                  fontSize: 18, color: '#d1d5db',
                  display: 'none',
                }} className="lg:block">→</div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/generate" className="btn-primary" style={{
            padding: '18px 48px', fontSize: 17, borderRadius: 14,
            boxShadow: '0 4px 20px rgba(34,197,94,0.3)',
          }}>
            🌿 Start Your Health Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111827', color: '#9ca3af',
        textAlign: 'center', padding: '40px 24px',
        fontSize: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 22 }}>🥗</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>Arogya<span style={{ color: '#22c55e' }}>AI</span></span>
        </div>
        <p style={{ margin: '0 0 8px' }}>AI-Powered Health & Nutrition Planning for Tamil Nadu and Beyond</p>
        <p style={{ margin: 0, fontSize: 12, color: '#4b5563' }}>Built with ❤️ using Gemini AI & Supabase</p>
      </footer>
    </main>
  );
}
