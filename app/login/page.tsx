import { login, signup } from './actions';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      <Navbar />
      
      <div style={{
        paddingTop: 140, paddingBottom: 100,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        <div className="card" style={{ maxWidth: 440, width: '100%', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🥗</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#111827', margin: 0 }}>
              Welcome Back
            </h1>
            <p style={{ color: '#6b7280', marginTop: 8 }}>
              Sign in to save and access your personalized health plans.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="input-field"
                style={{ width: '100%' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="input-field"
                style={{ width: '100%' }}
              />
            </div>

            {searchParams?.message && (
              <div style={{
                padding: '12px 16px', borderRadius: 8, background: '#fee2e2',
                color: '#b91c1c', fontSize: 14, textAlign: 'center'
              }}>
                {searchParams.message}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
              <button 
                formAction={login}
                className="btn-primary" 
                style={{ width: '100%', padding: '14px', borderRadius: 12 }}
              >
                Sign In
              </button>
              
              <button 
                formAction={signup}
                className="btn-secondary" 
                style={{ width: '100%', padding: '14px', borderRadius: 12 }}
              >
                Create Account
              </button>
            </div>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/" style={{ color: '#6b7280', fontSize: 14, textDecoration: 'none' }}>
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
