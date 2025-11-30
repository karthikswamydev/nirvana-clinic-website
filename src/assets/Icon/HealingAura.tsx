export function HealingAura({ className = "w-full h-full" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <radialGradient id="auraGrad" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#0d9488" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                </radialGradient>
            </defs>

            <g transform="translate(150, 150)">
                {/* Pulsing aura layers */}
                <circle cx="0" cy="0" r="120" fill="url(#auraGrad)" opacity="0.3" />
                <circle cx="0" cy="0" r="100" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
                <circle cx="0" cy="0" r="80" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
                <circle cx="0" cy="0" r="60" fill="none" stroke="#0d9488" strokeWidth="2" opacity="0.6" />
                <circle cx="0" cy="0" r="40" fill="none" stroke="#0d9488" strokeWidth="2" opacity="0.7" />

                {/* Center energy point */}
                <circle cx="0" cy="0" r="12" fill="#d4af37" opacity="0.9" />
                <circle cx="0" cy="0" r="8" fill="#f4d03f" />

                {/* Radiating energy lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 50;
                    const y = Math.sin(rad) * 50;
                    return (
                        <line
                            key={i}
                            x1="0"
                            y1="0"
                            x2={x}
                            y2={y}
                            stroke="#14b8a6"
                            strokeWidth="1"
                            opacity="0.3"
                            strokeDasharray="3,3"
                        />
                    );
                })}
            </g>
        </svg>
    );
}