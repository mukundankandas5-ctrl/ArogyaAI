'use client';

export default function LoadingShimmer() {
  return (
    <div style={{ marginTop: 40 }}>
      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: 20,
        padding: 32,
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}>
        {/* Status text */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '10px 20px',
            background: '#f0fdf4',
            borderRadius: 100,
            marginBottom: 16,
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: '#22c55e',
              animation: 'pulseGreen 1.5s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#16a34a' }}>
              AI is analyzing your health profile...
            </span>
          </div>
          <p style={{ fontSize: 13, color: '#9ca3af' }}>
            Generating your personalized nutrition plan
          </p>
        </div>

        {/* Shimmer blocks */}
        {['80%', '65%', '90%', '55%'].map((width, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <div className="shimmer" style={{
              height: i === 0 ? 20 : i === 3 ? 16 : 14,
              width,
              borderRadius: 8,
              marginBottom: 8,
            }} />
            {i < 3 && (
              <div className="shimmer" style={{
                height: 12,
                width: i === 0 ? '60%' : i === 1 ? '75%' : '50%',
                borderRadius: 8,
              }} />
            )}
          </div>
        ))}

        {/* Grid shimmer */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 24 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              background: '#f9fafb',
              borderRadius: 12,
              padding: 16,
              border: '1px solid #e5e7eb',
            }}>
              <div className="shimmer" style={{ height: 14, width: '70%', borderRadius: 6, marginBottom: 10 }} />
              <div className="shimmer" style={{ height: 32, width: '50%', borderRadius: 6 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
