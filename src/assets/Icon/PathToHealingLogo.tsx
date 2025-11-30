export function HealingEcosystemLogo() {
    return (
        <svg
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
        >
            <defs>
                {/* Gradients */}
                <radialGradient id="centerGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="40%" stopColor="#e3f2fd" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#bbdefb" stopOpacity="0.3" />
                </radialGradient>

                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b9d" />
                    <stop offset="100%" stopColor="#c2185b" />
                </linearGradient>

                <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#64b5f6" />
                    <stop offset="100%" stopColor="#1976d2" />
                </linearGradient>

                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#29b6f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#4fc3f7" stopOpacity="0.3" />
                </linearGradient>

                <radialGradient id="iconGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#e3f2fd" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#90caf9" stopOpacity="0" />
                </radialGradient>

                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="strongGlow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background circles */}
            <circle cx="400" cy="400" r="380" fill="url(#centerGlow)" opacity="0.4" />

            {/* Orbital rings */}
            <circle cx="400" cy="400" r="280" fill="none" stroke="#90caf9" strokeWidth="1" opacity="0.3" />
            <circle cx="400" cy="400" r="260" fill="none" stroke="#64b5f6" strokeWidth="2" opacity="0.4" strokeDasharray="8,8" />
            <circle cx="400" cy="400" r="240" fill="none" stroke="#42a5f5" strokeWidth="1" opacity="0.3" />

            {/* Inner decorative ring */}
            <circle cx="400" cy="400" r="180" fill="none" stroke="#29b6f6" strokeWidth="1.5" opacity="0.5" />

            {/* Connection paths from icons to center - creating the ecosystem web */}
            <g opacity="0.4">
                {/* Herb to center */}
                <path d="M 400 120 Q 380 200 400 280" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />

                {/* Spine to center */}
                <path d="M 600 200 Q 500 250 450 320" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />

                {/* Yoga to center */}
                <path d="M 680 400 Q 580 400 480 400" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />

                {/* Acupuncture to center */}
                <path d="M 600 600 Q 500 550 450 480" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />

                {/* Ozone to center */}
                <path d="M 400 680 Q 400 600 400 520" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />

                {/* Diet to center */}
                <path d="M 200 600 Q 300 550 350 480" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />

                {/* Reflexology to center */}
                <path d="M 120 400 Q 220 400 320 400" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />

                {/* Physiotherapy to center */}
                <path d="M 200 200 Q 300 250 350 320" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
            </g>

            {/* Inter-connections between modalities */}
            <g opacity="0.2">
                <path d="M 400 120 Q 500 160 600 200" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 600 200 Q 640 300 680 400" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 680 400 Q 640 500 600 600" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 600 600 Q 500 640 400 680" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 400 680 Q 300 640 200 600" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 200 600 Q 160 500 120 400" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 120 400 Q 160 300 200 200" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 200 200 Q 300 160 400 120" fill="none" stroke="#64b5f6" strokeWidth="1" strokeDasharray="3,3" />
            </g>

            {/* Central human silhouette with heart */}
            <g transform="translate(400, 400)">
                {/* Glow effect */}
                <circle cx="0" cy="0" r="140" fill="url(#centerGlow)" opacity="0.6" />

                {/* Body silhouette */}
                <g opacity="0.9">
                    {/* Head */}
                    <circle cx="0" cy="-65" r="28" fill="url(#bodyGradient)" filter="url(#softGlow)" />

                    {/* Neck */}
                    <rect x="-10" y="-37" width="20" height="20" fill="url(#bodyGradient)" />

                    {/* Torso */}
                    <ellipse cx="0" cy="10" rx="45" ry="55" fill="url(#bodyGradient)" />

                    {/* Arms */}
                    <ellipse cx="-42" cy="15" rx="12" ry="40" fill="url(#bodyGradient)" opacity="0.9" transform="rotate(-20 -42 15)" />
                    <ellipse cx="42" cy="15" rx="12" ry="40" fill="url(#bodyGradient)" opacity="0.9" transform="rotate(20 42 15)" />

                    {/* Legs */}
                    <ellipse cx="-18" cy="85" rx="13" ry="45" fill="url(#bodyGradient)" opacity="0.9" />
                    <ellipse cx="18" cy="85" rx="13" ry="45" fill="url(#bodyGradient)" opacity="0.9" />
                </g>

                {/* Heart symbol at center */}
                <g transform="translate(0, 0)">
                    <path d="M 0 -8 C 0 -15 -7 -22 -15 -22 C -22 -22 -28 -15 -28 -8 C -28 5 0 25 0 25 C 0 25 28 5 28 -8 C 28 -15 22 -22 15 -22 C 7 -22 0 -15 0 -8 Z"
                        fill="url(#heartGradient)"
                        filter="url(#strongGlow)"
                        opacity="0.95" />
                    <path d="M 0 -5 C 0 -10 -5 -15 -10 -15 C -15 -15 -18 -10 -18 -5 C -18 5 0 18 0 18 C 0 18 18 5 18 -5 C 18 -10 15 -15 10 -15 C 5 -15 0 -10 0 -5 Z"
                        fill="#ffffff"
                        opacity="0.4" />
                </g>

                {/* Energy aura */}
                <circle cx="0" cy="0" r="110" fill="none" stroke="#42a5f5" strokeWidth="2" opacity="0.3" />
                <circle cx="0" cy="0" r="120" fill="none" stroke="#64b5f6" strokeWidth="1" opacity="0.2" />
            </g>

            {/* Therapy Icons with backgrounds */}

            {/* 1. Herb Leaf - Top */}
            <g transform="translate(400, 120)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#81c784" strokeWidth="3" />
                <g transform="scale(1.2)">
                    <path d="M 0 -15 Q -8 -10 -12 0 Q -15 8 -10 15 Q -5 18 0 15 Q 5 18 10 15 Q 15 8 12 0 Q 8 -10 0 -15 Z"
                        fill="#66bb6a" stroke="#43a047" strokeWidth="1.5" />
                    <path d="M 0 -15 Q 0 0 0 15" stroke="#43a047" strokeWidth="2" />
                    <path d="M 0 -5 Q -5 -3 -8 0" stroke="#43a047" strokeWidth="1.5" fill="none" />
                    <path d="M 0 5 Q 5 7 8 10" stroke="#43a047" strokeWidth="1.5" fill="none" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#2e7d32">Herbal</text>
            </g>

            {/* 2. Spine - Top Right */}
            <g transform="translate(600, 200)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#9575cd" strokeWidth="3" />
                <g transform="scale(1.1)">
                    {/* Spine vertebrae */}
                    <ellipse cx="0" cy="-12" rx="8" ry="5" fill="#7e57c2" />
                    <ellipse cx="0" cy="-6" rx="8" ry="5" fill="#7e57c2" />
                    <ellipse cx="0" cy="0" rx="9" ry="5" fill="#7e57c2" />
                    <ellipse cx="0" cy="6" rx="8" ry="5" fill="#7e57c2" />
                    <ellipse cx="0" cy="12" rx="8" ry="5" fill="#7e57c2" />
                    {/* Connecting line */}
                    <rect x="-1.5" y="-14" width="3" height="28" fill="#5e35b1" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#5e35b1">Chiropractic</text>
            </g>

            {/* 3. Yoga Pose - Right */}
            <g transform="translate(680, 400)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#ff8a65" strokeWidth="3" />
                <g transform="scale(0.9)">
                    {/* Yoga figure */}
                    <circle cx="0" cy="-12" r="5" fill="#ff7043" />
                    <path d="M 0 -7 L 0 5" stroke="#ff7043" strokeWidth="3" strokeLinecap="round" />
                    <path d="M -10 -2 L 0 0 L 10 -2" stroke="#ff7043" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <path d="M -8 5 L 0 8 L 0 15" stroke="#ff7043" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <path d="M 8 5 L 0 8" stroke="#ff7043" strokeWidth="3" strokeLinecap="round" fill="none" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#d84315">Yoga</text>
            </g>

            {/* 4. Acupuncture Needle - Bottom Right */}
            <g transform="translate(600, 600)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#ffd54f" strokeWidth="3" />
                <g transform="scale(1.3)">
                    {/* Needle */}
                    <rect x="-1" y="-12" width="2" height="24" fill="#f9a825" />
                    <circle cx="0" cy="-14" r="3" fill="#fbc02d" stroke="#f57f17" strokeWidth="1" />
                    <path d="M 0 12 L 0 15" stroke="#f9a825" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Energy waves */}
                    <circle cx="0" cy="0" r="8" fill="none" stroke="#fdd835" strokeWidth="1" opacity="0.6" />
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#fdd835" strokeWidth="0.8" opacity="0.4" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#f57f17">Acupuncture</text>
            </g>

            {/* 5. Ozone Bubble - Bottom */}
            <g transform="translate(400, 680)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#4dd0e1" strokeWidth="3" />
                <g>
                    {/* O3 molecule representation */}
                    <circle cx="-8" cy="3" r="7" fill="none" stroke="#00bcd4" strokeWidth="2.5" opacity="0.8" />
                    <circle cx="8" cy="3" r="7" fill="none" stroke="#00bcd4" strokeWidth="2.5" opacity="0.8" />
                    <circle cx="0" cy="-6" r="7" fill="none" stroke="#00bcd4" strokeWidth="2.5" opacity="0.8" />
                    {/* Bonds */}
                    <line x1="0" y1="-6" x2="-5" y2="0" stroke="#0097a7" strokeWidth="2" />
                    <line x1="0" y1="-6" x2="5" y2="0" stroke="#0097a7" strokeWidth="2" />
                    {/* Bubbles */}
                    <circle cx="12" cy="-8" r="3" fill="#b2ebf2" opacity="0.7" />
                    <circle cx="-12" cy="-5" r="2.5" fill="#b2ebf2" opacity="0.6" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#00838f">Ozone</text>
            </g>

            {/* 6. Diet Plate - Bottom Left */}
            <g transform="translate(200, 600)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#aed581" strokeWidth="3" />
                <g transform="scale(1.1)">
                    {/* Plate */}
                    <circle cx="0" cy="0" r="14" fill="none" stroke="#7cb342" strokeWidth="2.5" />
                    {/* Food sections */}
                    <path d="M 0 0 L 0 -14 A 14 14 0 0 1 12 -7 Z" fill="#9ccc65" opacity="0.7" />
                    <path d="M 0 0 L 12 -7 A 14 14 0 0 1 12 7 Z" fill="#c5e1a5" opacity="0.7" />
                    <path d="M 0 0 L 12 7 A 14 14 0 0 1 -12 7 Z" fill="#dce775" opacity="0.7" />
                    <path d="M 0 0 L -12 7 A 14 14 0 0 1 0 -14 Z" fill="#aed581" opacity="0.7" />
                    {/* Fork and knife */}
                    <line x1="-20" y1="-8" x2="-20" y2="8" stroke="#7cb342" strokeWidth="1.5" />
                    <path d="M -22 -8 L -22 -3 M -20 -8 L -20 -3 M -18 -8 L -18 -3" stroke="#7cb342" strokeWidth="1" />
                    <line x1="20" y1="-8" x2="20" y2="8" stroke="#7cb342" strokeWidth="1.5" />
                    <path d="M 18 -8 L 22 -8 L 22 -4 L 20 -2" stroke="#7cb342" strokeWidth="1" fill="none" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#558b2f">Nutrition</text>
            </g>

            {/* 7. Reflexology Foot - Left */}
            <g transform="translate(120, 400)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#ba68c8" strokeWidth="3" />
                <g transform="scale(1.2)">
                    {/* Foot outline */}
                    <path d="M -5 -10 Q -8 -5 -8 5 Q -8 12 -3 15 Q 2 16 8 12 Q 10 8 10 0 Q 10 -8 5 -12 Q 0 -14 -5 -10 Z"
                        fill="#ab47bc" opacity="0.8" stroke="#8e24aa" strokeWidth="1.5" />
                    {/* Toes */}
                    <circle cx="-5" cy="-12" r="2" fill="#ab47bc" />
                    <circle cx="-1" cy="-13" r="2.5" fill="#ab47bc" />
                    <circle cx="3" cy="-12.5" r="2" fill="#ab47bc" />
                    <circle cx="7" cy="-11" r="1.8" fill="#ab47bc" />
                    {/* Pressure points */}
                    <circle cx="0" cy="0" r="2" fill="#ffffff" opacity="0.8" />
                    <circle cx="-3" cy="5" r="1.5" fill="#ffffff" opacity="0.7" />
                    <circle cx="3" cy="3" r="1.5" fill="#ffffff" opacity="0.7" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#6a1b9a">Reflexology</text>
            </g>

            {/* 8. Physiotherapy Band - Top Left */}
            <g transform="translate(200, 200)">
                <circle cx="0" cy="0" r="45" fill="url(#iconGlow)" />
                <circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#64b5f6" strokeWidth="3" />
                <g transform="scale(1.1)">
                    {/* Resistance band */}
                    <path d="M -12 -8 Q -8 -12 0 -12 Q 8 -12 12 -8"
                        fill="none" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
                    <path d="M -12 -8 Q -10 0 -12 8"
                        fill="none" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 12 -8 Q 10 0 12 8"
                        fill="none" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
                    <path d="M -12 8 Q -8 12 0 12 Q 8 12 12 8"
                        fill="none" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
                    {/* Handles */}
                    <rect x="-15" y="-10" width="6" height="20" rx="2" fill="#1976d2" />
                    <rect x="9" y="-10" width="6" height="20" rx="2" fill="#1976d2" />
                    {/* Motion lines */}
                    <path d="M -18 0 L -22 0" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                    <path d="M 18 0 L 22 0" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </g>
                <text x="0" y="65" textAnchor="middle" className="text-[14px]" fill="#0d47a1">Physiotherapy</text>
            </g>

            {/* Decorative elements - energy particles */}
            <g opacity="0.4">
                {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 15 * Math.PI) / 180;
                    const radius = 220 + (i % 3) * 10;
                    const x = 400 + Math.cos(angle) * radius;
                    const y = 400 + Math.sin(angle) * radius;
                    const size = 2 + (i % 2);
                    return (
                        <circle
                            key={`particle-${i}`}
                            cx={x}
                            cy={y}
                            r={size}
                            fill="#4fc3f7"
                            opacity={0.6}
                        />
                    );
                })}
            </g>

            {/* Title */}
            {/* <g transform="translate(400, 760)">
                <text x="0" y="0" textAnchor="middle" className="text-[20px]" fill="#1976d2">
                    The Healing Ecosystem
                </text>
            </g> */}
        </svg>
    );
}
