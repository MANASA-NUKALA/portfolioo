export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute -left-[8%] -top-[18%] rounded-full"
        style={{
          width: '55vw',
          height: '55vw',
          background: 'radial-gradient(circle at center, var(--glowA), transparent 62%)',
          filter: 'blur(20px)',
          animation: 'drift 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-[22%] -right-[10%] rounded-full"
        style={{
          width: '52vw',
          height: '52vw',
          background: 'radial-gradient(circle at center, var(--glowB), transparent 62%)',
          filter: 'blur(20px)',
          animation: 'drift2 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute left-[55%] top-[40%] rounded-full opacity-50"
        style={{
          width: '30vw',
          height: '30vw',
          background: 'radial-gradient(circle at center, var(--glowA), transparent 65%)',
          filter: 'blur(30px)',
          animation: 'drift 26s ease-in-out infinite',
        }}
      />
    </div>
  )
}
