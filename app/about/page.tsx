import Navbar from '@/components/Navbar';
import Link from 'next/link';

const techStack = [
  { icon: '⚡', name: 'Next.js 14', desc: 'App Router, Server Actions' },
  { icon: '🧠', name: 'Gemini 1.5 Flash', desc: 'AI Plan Generation + NLP' },
  { icon: '🗄️', name: 'Supabase', desc: 'PostgreSQL Database + Auth' },
  { icon: '🎨', name: 'Tailwind CSS', desc: 'Utility-first Styling' },
  { icon: '📝', name: 'TypeScript', desc: 'Type-safe Code' },
  { icon: '🚀', name: 'Vercel', desc: 'Edge Deployment' },
];

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      <Navbar />
      <div style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
          padding: '80px 24px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36, margin: '0 auto 24px',
              boxShadow: '0 8px 24px rgba(34,197,94,0.4)',
            }}>🥗</div>
            <h1 style={{ fontSize: 42, fontWeight: 900, color: 'white', letterSpacing: '-1px', margin: '0 0 16px' }}>
              About Arogya<span style={{ color: '#22c55e' }}>AI</span>
            </h1>
            <p style={{ fontSize: 18, color: '#9ca3af', lineHeight: 1.8, margin: 0 }}>
              ArogyaAI is a startup-grade AI-powered health planning platform designed for India&apos;s diverse dietary landscape. We combine cutting-edge Generative AI with deep regional food intelligence to deliver truly personalized nutrition plans.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="section-label" style={{ marginBottom: 16, display: 'inline-flex' }}>🎯 Our Mission</span>
              <h2 style={{ fontSize: 34, fontWeight: 800, color: '#111827', letterSpacing: '-0.6px', margin: '12px 0 20px' }}>
                Making healthy eating <span className="gradient-text">accessible to everyone</span>
              </h2>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 16 }}>
                India has one of the world&apos;s richest and most diverse culinary traditions. Yet, most nutrition apps are designed for Western diets, leaving millions without culturally relevant health guidance.
              </p>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.8, marginBottom: 24 }}>
                ArogyaAI bridges this gap by combining the power of large language models with an expert knowledge base of regional Indian cuisine — starting with Tamil Nadu and expanding across all Indian states.
              </p>
              <Link href="/generate" className="btn-primary" style={{ textDecoration: 'none' }}>
                ✨ Try It Now
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { num: '5+', label: 'Regions Supported' },
                { num: '3', label: 'Languages: Tamil, Hindi, English' },
                { num: 'AI', label: 'Gemini-Powered Intelligence' },
                { num: '∞', label: 'Personalized Plans' },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '24px',
                  background: '#f9fafb',
                  borderRadius: 16,
                  border: '1px solid #e5e7eb',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#22c55e', marginBottom: 6 }}>{item.num}</div>
                  <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, lineHeight: 1.4 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section style={{ background: '#f9fafb', padding: '80px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-label" style={{ marginBottom: 14, display: 'inline-flex' }}>🛠️ Technology</span>
              <h2 style={{ fontSize: 34, fontWeight: 800, color: '#111827', letterSpacing: '-0.6px', margin: '12px 0 0' }}>
                Built with modern <span className="gradient-text">AI-first tech</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {techStack.map(t => (
                <div key={t.name} className="card" style={{ padding: '24px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{t.icon}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: '#9ca3af' }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NLP Features */}
        <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 14, display: 'inline-flex' }}>🗣️ NLP Intelligence</span>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: '#111827', letterSpacing: '-0.6px', margin: '12px 0 12px' }}>
              Natural language that <span className="gradient-text">understands you</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              {
                lang: 'Tamil',
                example: '"எனக்கு சர்க்கரை நோய் உள்ளது. இட்லி மற்றும் தோசை பிடிக்கும்"',
                desc: 'AI extracts: Diabetes + prefers idli & dosa → generates low-GI Tamil Nadu plan',
              },
              {
                lang: 'English',
                example: '"I like dosa and idli. I have diabetes. Avoid spicy food."',
                desc: 'AI understands food preferences, medical conditions, and dietary restrictions',
              },
              {
                lang: 'Hindi',
                example: '"मुझे उच्च रक्तचाप है। मैं शाकाहारी हूं।"',
                desc: 'AI detects: Hypertension + Vegetarian → generates low-sodium North India plan',
              },
              {
                lang: 'Mixed',
                example: '"I prefer idli and sambar. Weight loss target hai."',
                desc: 'AI handles code-switching (Hinglish/Tanglish) naturally',
              },
            ].map(item => (
              <div key={item.lang} style={{
                padding: '24px',
                background: '#f9fafb',
                borderRadius: 16,
                border: '1px solid #e5e7eb',
              }}>
                <div style={{
                  display: 'inline-block', padding: '4px 12px', borderRadius: 100,
                  background: '#f0fdf4', color: '#16a34a',
                  fontSize: 12, fontWeight: 700, marginBottom: 12,
                }}>{item.lang}</div>
                <p style={{
                  fontSize: 14, fontStyle: 'italic', color: '#374151',
                  background: 'white', padding: '12px 14px', borderRadius: 10,
                  border: '1px solid #e5e7eb', marginBottom: 12,
                }}>
                  {item.example}
                </p>
                <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>
                  🤖 {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          padding: '64px 24px', textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: 'white', margin: '0 0 16px', letterSpacing: '-0.6px' }}>
            Ready to start your health journey?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>
            Generate your free personalized plan in under 30 seconds.
          </p>
          <Link href="/generate" style={{
            display: 'inline-block', padding: '16px 40px',
            background: 'white', color: '#16a34a',
            fontSize: 16, fontWeight: 700, borderRadius: 14,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s ease',
          }}>
            ✨ Generate My Health Plan
          </Link>
        </section>

        {/* Footer */}
        <footer style={{
          background: '#111827', color: '#9ca3af',
          textAlign: 'center', padding: '32px 24px', fontSize: 14,
        }}>
          <p style={{ margin: 0 }}>© 2026 ArogyaAI · Built with Gemini AI & Supabase · Made in Tamil Nadu 🌿</p>
        </footer>
      </div>
    </main>
  );
}
