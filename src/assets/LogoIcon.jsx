export default function LogoIcon({ width = 30, height = 30, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="16" r="5" fill="#8B3D12" />
      <circle cx="16" cy="16" r="7.5" fill="none" stroke="#C4956A" strokeWidth="1.2" />
      {/* Raios principais */}
      <line x1="16" y1="2"    x2="16" y2="7.5"  stroke="#8B3D12" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="16" y1="24.5" x2="16" y2="30"   stroke="#8B3D12" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2"  y1="16"   x2="7.5" y2="16"  stroke="#8B3D12" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="24.5" y1="16" x2="30" y2="16"   stroke="#8B3D12" strokeWidth="1.6" strokeLinecap="round" />
      {/* Raios diagonais */}
      <line x1="5.5"  y1="5.5"  x2="9.5"  y2="9.5"  stroke="#8B3D12" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22.5" y1="22.5" x2="26.5" y2="26.5" stroke="#8B3D12" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26.5" y1="5.5"  x2="22.5" y2="9.5"  stroke="#8B3D12" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9.5"  y1="22.5" x2="5.5"  y2="26.5" stroke="#8B3D12" strokeWidth="1.5" strokeLinecap="round" />
      {/* Raios intermediários */}
      <line x1="9"    y1="2.8"  x2="11"   y2="7.5"  stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="23"   y1="24.5" x2="21"   y2="29.2" stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="2.8"  y1="9"    x2="7.5"  y2="11"   stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="24.5" y1="21"   x2="29.2" y2="23"   stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="23"   y1="2.8"  x2="21"   y2="7.5"  stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="9"    y1="24.5" x2="11"   y2="29.2" stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="2.8"  y1="23"   x2="7.5"  y2="21"   stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="24.5" y1="11"   x2="29.2" y2="9"    stroke="#8B3D12" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}
