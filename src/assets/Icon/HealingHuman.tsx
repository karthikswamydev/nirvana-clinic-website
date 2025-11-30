export function HealingBeyondSymptomsLogo() {
    return (
        <svg
            viewBox="0 0 800 700"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
        >
            <defs>
                {/* Gradients */}
                <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e3f2fd" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#bbdefb" stopOpacity="0.5" />
                </linearGradient>

                <linearGradient id="energyFlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#64b5f6" />
                    <stop offset="50%" stopColor="#42a5f5" />
                    <stop offset="100%" stopColor="#1e88e5" />
                </linearGradient>

                <radialGradient id="chakraCrown" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#e1bee7" />
                    <stop offset="100%" stopColor="#9c27b0" />
                </radialGradient>

                <radialGradient id="chakraThird" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#c5cae9" />
                    <stop offset="100%" stopColor="#5c6bc0" />
                </radialGradient>

                <radialGradient id="chakraThroat" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#b3e5fc" />
                    <stop offset="100%" stopColor="#03a9f4" />
                </radialGradient>

                <radialGradient id="chakraHeart" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#c8e6c9" />
                    <stop offset="100%" stopColor="#4caf50" />
                </radialGradient>

                <radialGradient id="chakraSolar" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#fff9c4" />
                    <stop offset="100%" stopColor="#fdd835" />
                </radialGradient>

                <radialGradient id="chakraSacral" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#ffe0b2" />
                    <stop offset="100%" stopColor="#ff9800" />
                </radialGradient>

                <radialGradient id="chakraRoot" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#ffcdd2" />
                    <stop offset="100%" stopColor="#e53935" />
                </radialGradient>

                <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64b5f6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#42a5f5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#64b5f6" stopOpacity="0.6" />
                </linearGradient>

                <radialGradient id="nodeGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#64b5f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1e88e5" stopOpacity="0.1" />
                </radialGradient>

                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background subtle gradient */}
            <rect width="600" height="700" fill="url(#bodyGradient)" opacity="0.2" />

            {/* Outer layer - Lifestyle & Environment */}
            <g opacity="0.4">
                {/* Lifestyle nodes */}
                <circle cx="100" cy="200" r="8" fill="#81c784" />
                <text x="100" y="190" textAnchor="middle" className="text-[10px]" fill="#2e7d32">Sleep</text>

                <circle cx="500" cy="200" r="8" fill="#81c784" />
                <text x="500" y="190" textAnchor="middle" className="text-[10px]" fill="#2e7d32">Nutrition</text>

                <circle cx="80" cy="350" r="8" fill="#81c784" />
                <text x="80" y="340" textAnchor="middle" className="text-[10px]" fill="#2e7d32">Movement</text>

                <circle cx="520" cy="350" r="8" fill="#81c784" />
                <text x="520" y="340" textAnchor="middle" className="text-[10px]" fill="#2e7d32">Stress</text>

                <circle cx="100" cy="500" r="8" fill="#81c784" />
                <text x="100" y="490" textAnchor="middle" className="text-[10px]" fill="#2e7d32">Community</text>

                <circle cx="500" cy="500" r="8" fill="#81c784" />
                <text x="500" y="490" textAnchor="middle" className="text-[10px]" fill="#2e7d32">Purpose</text>
            </g>

            {/* Middle layer - Emotional & Mental */}
            <g opacity="0.5">
                {/* Emotional nodes */}
                <circle cx="150" cy="150" r="10" fill="#64b5f6" />
                <text x="150" y="138" textAnchor="middle" className="text-[11px]" fill="#1565c0">Joy</text>

                <circle cx="450" cy="150" r="10" fill="#64b5f6" />
                <text x="450" y="138" textAnchor="middle" className="text-[11px]" fill="#1565c0">Peace</text>

                <circle cx="130" cy="300" r="10" fill="#64b5f6" />
                <text x="130" y="288" textAnchor="middle" className="text-[11px]" fill="#1565c0">Clarity</text>

                <circle cx="470" cy="300" r="10" fill="#64b5f6" />
                <text x="470" y="288" textAnchor="middle" className="text-[11px]" fill="#1565c0">Balance</text>

                <circle cx="150" cy="450" r="10" fill="#64b5f6" />
                <text x="150" y="438" textAnchor="middle" className="text-[11px]" fill="#1565c0">Love</text>

                <circle cx="450" cy="450" r="10" fill="#64b5f6" />
                <text x="450" y="438" textAnchor="middle" className="text-[11px]" fill="#1565c0">Trust</text>
            </g>

            {/* Connection lines from outer to middle layer */}
            <g opacity="0.3">
                <line x1="100" y1="200" x2="150" y2="150" stroke="url(#connectionLine)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="500" y1="200" x2="450" y2="150" stroke="url(#connectionLine)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="80" y1="350" x2="130" y2="300" stroke="url(#connectionLine)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="520" y1="350" x2="470" y2="300" stroke="url(#connectionLine)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="100" y1="500" x2="150" y2="450" stroke="url(#connectionLine)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="500" y1="500" x2="450" y2="450" stroke="url(#connectionLine)" strokeWidth="1" strokeDasharray="3,3" />
            </g>

            {/* Human body silhouette - central focus */}
            <g transform="translate(300, 100)">
                {/* Body outline - layered effect */}
                <g opacity="0.2">
                    <ellipse cx="0" cy="0" rx="45" ry="45" fill="none" stroke="#42a5f5" strokeWidth="2" />
                </g>

                {/* Head */}
                <ellipse cx="0" cy="0" rx="35" ry="40" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.8" />

                {/* Neck */}
                <rect x="-12" y="35" width="24" height="25" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.8" />

                {/* Shoulders and torso */}
                <ellipse cx="0" cy="90" rx="55" ry="35" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.8" />
                <rect x="-40" y="75" width="80" height="80" rx="10" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.8" />

                {/* Arms */}
                <ellipse cx="-50" cy="100" rx="15" ry="50" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.7" />
                <ellipse cx="50" cy="100" rx="15" ry="50" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.7" />

                {/* Lower torso/hips */}
                <path d="M -40 155 L -35 200 L -20 240 L 20 240 L 35 200 L 40 155 Z"
                    fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.8" />

                {/* Legs */}
                <rect x="-28" y="240" width="20" height="100" rx="8" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.7" />
                <rect x="8" y="240" width="20" height="100" rx="8" fill="url(#bodyGradient)" stroke="#1e88e5" strokeWidth="2" opacity="0.7" />

                {/* Energy flow lines along spine */}
                <path d="M 0 40 Q -5 120 0 240 Q 5 300 0 340"
                    fill="none" stroke="url(#energyFlow)" strokeWidth="3" opacity="0.6" filter="url(#glow)" />

                {/* Chakra points with connections */}

                {/* Crown Chakra */}
                <circle cx="0" cy="-50" r="12" fill="url(#chakraCrown)" opacity="0.9" filter="url(#glow)" />
                <circle cx="0" cy="-50" r="8" fill="#ffffff" opacity="0.5" />
                <text x="0" y="-65" textAnchor="middle" className="text-[9px]" fill="#9c27b0">Crown</text>

                {/* Third Eye Chakra */}
                <circle cx="0" cy="-5" r="11" fill="url(#chakraThird)" opacity="0.9" filter="url(#glow)" />
                <circle cx="0" cy="-5" r="7" fill="#ffffff" opacity="0.5" />
                <text x="-55" y="-2" textAnchor="end" className="text-[9px]" fill="#5c6bc0">Third Eye</text>

                {/* Throat Chakra */}
                <circle cx="0" cy="45" r="11" fill="url(#chakraThroat)" opacity="0.9" filter="url(#glow)" />
                <circle cx="0" cy="45" r="7" fill="#ffffff" opacity="0.5" />
                <text x="55" y="48" textAnchor="start" className="text-[9px]" fill="#03a9f4">Throat</text>

                {/* Heart Chakra */}
                <circle cx="0" cy="95" r="12" fill="url(#chakraHeart)" opacity="0.9" filter="url(#glow)" />
                <circle cx="0" cy="95" r="8" fill="#ffffff" opacity="0.5" />
                <text x="-55" y="98" textAnchor="end" className="text-[9px]" fill="#4caf50">Heart</text>

                {/* Solar Plexus Chakra */}
                <circle cx="0" cy="135" r="11" fill="url(#chakraSolar)" opacity="0.9" filter="url(#glow)" />
                <circle cx="0" cy="135" r="7" fill="#ffffff" opacity="0.5" />
                <text x="55" y="138" textAnchor="start" className="text-[9px]" fill="#f57f17">Solar Plexus</text>

                {/* Sacral Chakra */}
                <circle cx="0" cy="180" r="11" fill="url(#chakraSacral)" opacity="0.9" filter="url(#glow)" />
                <circle cx="0" cy="180" r="7" fill="#ffffff" opacity="0.5" />
                <text x="-55" y="183" textAnchor="end" className="text-[9px]" fill="#e65100">Sacral</text>

                {/* Root Chakra */}
                <circle cx="0" cy="240" r="11" fill="url(#chakraRoot)" opacity="0.9" filter="url(#glow)" />
                <circle cx="0" cy="240" r="7" fill="#ffffff" opacity="0.5" />
                <text x="55" y="243" textAnchor="start" className="text-[9px]" fill="#c62828">Root</text>

                {/* Energy connections between chakras */}
                <path d="M 0 -38 L 0 -17" stroke="#9c27b0" strokeWidth="1.5" opacity="0.4" strokeDasharray="2,2" />
                <path d="M 0 6 L 0 34" stroke="#5c6bc0" strokeWidth="1.5" opacity="0.4" strokeDasharray="2,2" />
                <path d="M 0 56 L 0 84" stroke="#03a9f4" strokeWidth="1.5" opacity="0.4" strokeDasharray="2,2" />
                <path d="M 0 107 L 0 124" stroke="#4caf50" strokeWidth="1.5" opacity="0.4" strokeDasharray="2,2" />
                <path d="M 0 146 L 0 169" stroke="#fdd835" strokeWidth="1.5" opacity="0.4" strokeDasharray="2,2" />
                <path d="M 0 191 L 0 229" stroke="#ff9800" strokeWidth="1.5" opacity="0.4" strokeDasharray="2,2" />
            </g>

            {/* Connection lines from emotional layer to chakras */}
            <g opacity="0.25">
                <path d="M 150 150 Q 200 100 300 50" fill="none" stroke="url(#connectionLine)" strokeWidth="1.5" />
                <path d="M 450 150 Q 400 100 300 50" fill="none" stroke="url(#connectionLine)" strokeWidth="1.5" />

                <path d="M 130 300 Q 180 230 270 195" fill="none" stroke="url(#connectionLine)" strokeWidth="1.5" />
                <path d="M 470 300 Q 420 230 330 195" fill="none" stroke="url(#connectionLine)" strokeWidth="1.5" />

                <path d="M 150 450 Q 200 380 280 280" fill="none" stroke="url(#connectionLine)" strokeWidth="1.5" />
                <path d="M 450 450 Q 400 380 320 280" fill="none" stroke="url(#connectionLine)" strokeWidth="1.5" />
            </g>

            {/* Physical systems indicators */}
            <g transform="translate(300, 100)" opacity="0.6">
                {/* Nervous system node */}
                <g transform="translate(-80, 0)">
                    <circle cx="0" cy="0" r="6" fill="#ff6b6b" />
                    <text x="0" y="-12" textAnchor="middle" className="text-[8px]" fill="#c62828">Nervous</text>
                </g>

                {/* Circulatory system node */}
                <g transform="translate(80, 50)">
                    <circle cx="0" cy="0" r="6" fill="#ff6b6b" />
                    <text x="0" y="-12" textAnchor="middle" className="text-[8px]" fill="#c62828">Circulatory</text>
                </g>

                {/* Digestive system node */}
                <g transform="translate(-75, 140)">
                    <circle cx="0" cy="0" r="6" fill="#ff6b6b" />
                    <text x="0" y="-12" textAnchor="middle" className="text-[8px]" fill="#c62828">Digestive</text>
                </g>

                {/* Immune system node */}
                <g transform="translate(75, 100)">
                    <circle cx="0" cy="0" r="6" fill="#ff6b6b" />
                    <text x="0" y="-12" textAnchor="middle" className="text-[8px]" fill="#c62828">Immune</text>
                </g>

                {/* Endocrine system node */}
                <g transform="translate(-70, 80)">
                    <circle cx="0" cy="0" r="6" fill="#ff6b6b" />
                    <text x="0" y="-12" textAnchor="middle" className="text-[8px]" fill="#c62828">Endocrine</text>
                </g>

                {/* Connection lines to body */}
                <line x1="-80" y1="0" x2="-35" y2="0" stroke="#ff6b6b" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
                <line x1="80" y1="50" x2="35" y2="45" stroke="#ff6b6b" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
                <line x1="-75" y1="140" x2="-40" y2="135" stroke="#ff6b6b" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
                <line x1="75" y1="100" x2="40" y2="95" stroke="#ff6b6b" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
                <line x1="-70" y1="80" x2="-40" y2="80" stroke="#ff6b6b" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
            </g>

            {/* Radiating energy field */}
            <g transform="translate(300, 100)" opacity="0.15">
                {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x = Math.cos(angle) * 100;
                    const y = Math.sin(angle - Math.PI / 2) * 150 + 120;
                    return (
                        <line
                            key={`energy-${i}`}
                            x1="0"
                            y1="120"
                            x2={x}
                            y2={y}
                            stroke="url(#energyFlow)"
                            strokeWidth="1.5"
                            strokeDasharray="4,4"
                        />
                    );
                })}
            </g>

            {/* Title area */}
            {/* <g transform="translate(300, 620)">
                <text x="0" y="0" textAnchor="middle" className="text-[24px]" fill="#1e88e5" opacity="0.8">
                    Healing Beyond Symptoms
                </text>
                <text x="0" y="25" textAnchor="middle" className="text-[12px]" fill="#42a5f5" opacity="0.7">
                    Holistic • Connected • Transformative
                </text>
            </g> */}
        </svg>
    );
}
