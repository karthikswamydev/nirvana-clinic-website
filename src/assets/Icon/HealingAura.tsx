export function HealingAura({ className = "w-full h-full" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <radialGradient id="auraGrad" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#8ba68e" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#2d545e" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#2d545e" stopOpacity="0" />
                </radialGradient>
            </defs>

            <g transform="translate(150, 150)">
                <circle cx="0" cy="0" r="120" fill="url(#auraGrad)" opacity="0.3" />
                <circle cx="0" cy="0" r="100" fill="none" stroke="#8ba68e" strokeWidth="1" opacity="0.45" />
                <circle cx="0" cy="0" r="80" fill="none" stroke="#8ba68e" strokeWidth="1.5" opacity="0.5" />
                <circle cx="0" cy="0" r="60" fill="none" stroke="#2d545e" strokeWidth="2" opacity="0.55" />
                <circle cx="0" cy="0" r="40" fill="none" stroke="#2d545e" strokeWidth="2" opacity="0.65" />

                <circle cx="0" cy="0" r="12" fill="#d4a03d" opacity="0.9" />
                <circle cx="0" cy="0" r="8" fill="#e8c066" />

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
                            stroke="#8ba68e"
                            strokeWidth="1"
                            opacity="0.35"
                            strokeDasharray="3,3"
                        />
                    );
                })}
            </g>
        </svg>
    );
}
