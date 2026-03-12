'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/generate', label: 'Generate Plan' },
  { href: '/saved', label: 'Saved Plans' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20,
              boxShadow: '0 2px 8px rgba(34,197,94,0.35)',
            }}>🥗</div>
            <span style={{ fontSize: 20, fontWeight: 800, color: '#111827', letterSpacing: '-0.5px' }}>
              Arogya<span style={{ color: '#22c55e' }}>AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="hidden md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '8px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === link.href ? '#22c55e' : '#374151',
                  background: pathname === link.href ? '#f0fdf4' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
              >{link.label}</Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/generate" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
              ✨ Get My Plan
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              padding: 8, border: 'none', background: 'transparent',
              cursor: 'pointer', fontSize: 22, color: '#374151',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid #e5e7eb',
          padding: '16px 24px 20px',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                fontSize: 16, fontWeight: 500, textDecoration: 'none',
                color: pathname === link.href ? '#22c55e' : '#374151',
                borderBottom: '1px solid #f3f4f6',
              }}
            >{link.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
