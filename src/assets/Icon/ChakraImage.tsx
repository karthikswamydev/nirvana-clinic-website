function AyurvedaLogo({ width = 300, height = 300 }: { width?: number; height?: number }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* Gradients for each element */}
                <linearGradient id="fireGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#F7931E" />
                </linearGradient>

                <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4FC3F7" />
                    <stop offset="100%" stopColor="#2196F3" />
                </linearGradient>

                <linearGradient id="earthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8D6E63" />
                    <stop offset="100%" stopColor="#5D4037" />
                </linearGradient>

                <linearGradient id="airGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E0E0E0" />
                    <stop offset="100%" stopColor="#BDBDBD" />
                </linearGradient>

                <radialGradient id="etherGrad">
                    <stop offset="0%" stopColor="#E1BEE7" />
                    <stop offset="100%" stopColor="#9C27B0" />
                </radialGradient>
            </defs>

            {/* Outer decorative circle */}
            <circle cx="200" cy="200" r="180" stroke="#D4AF37" strokeWidth="2" opacity="0.3" fill="none" />
            <circle cx="200" cy="200" r="170" stroke="#D4AF37" strokeWidth="1" opacity="0.2" fill="none" />

            {/* Five petals representing five elements */}

            {/* Fire Petal - Top */}
            <g transform="translate(200, 50)">
                <path
                    d="M 0,0 Q -30,30 -15,70 Q 0,60 0,60 Q 0,60 15,70 Q 30,30 0,0 Z"
                    fill="url(#fireGrad)"
                    opacity="0.9"
                />
                {/* Fire symbol */}
                <path
                    d="M 0,25 C -5,35 -3,42 0,45 C 3,42 5,35 0,25 Z"
                    fill="#FFD700"
                />
            </g>

            {/* Water Petal - Bottom Right */}
            <g transform="translate(200, 200) rotate(72)">
                <path
                    d="M 0,-150 Q -30,-120 -15,-80 Q 0,-90 0,-90 Q 0,-90 15,-80 Q 30,-120 0,-150 Z"
                    fill="url(#waterGrad)"
                    opacity="0.9"
                />
                {/* Water droplet symbol */}
                <g transform="translate(0, -110)">
                    <path
                        d="M 0,0 C -6,8 -8,15 -8,20 C -8,28 -4,32 0,32 C 4,32 8,28 8,20 C 8,15 6,8 0,0 Z"
                        fill="#B3E5FC"
                    />
                </g>
            </g>

            {/* Earth Petal - Bottom Left */}
            <g transform="translate(200, 200) rotate(144)">
                <path
                    d="M 0,-150 Q -30,-120 -15,-80 Q 0,-90 0,-90 Q 0,-90 15,-80 Q 30,-120 0,-150 Z"
                    fill="url(#earthGrad)"
                    opacity="0.9"
                />
                {/* Mountain symbol */}
                <g transform="translate(0, -110)">
                    <path
                        d="M 0,10 L -10,28 L 10,28 Z"
                        fill="#A1887F"
                    />
                    <path
                        d="M -5,20 L -12,28 L 2,28 Z"
                        fill="#6D4C41"
                    />
                </g>
            </g>

            {/* Air Petal - Top Left */}
            <g transform="translate(200, 200) rotate(216)">
                <path
                    d="M 0,-150 Q -30,-120 -15,-80 Q 0,-90 0,-90 Q 0,-90 15,-80 Q 30,-120 0,-150 Z"
                    fill="url(#airGrad)"
                    opacity="0.9"
                />
                {/* Wind swirls symbol */}
                <g transform="translate(0, -110)">
                    <path
                        d="M -8,15 Q -5,12 0,12 Q 4,12 6,14"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M -6,20 Q -3,18 2,18 Q 5,18 7,20"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M -8,25 Q -4,23 0,23 Q 4,23 6,25"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                    />
                </g>
            </g>

            {/* Ether/Space Petal - Top Right */}
            <g transform="translate(200, 200) rotate(288)">
                <path
                    d="M 0,-150 Q -30,-120 -15,-80 Q 0,-90 0,-90 Q 0,-90 15,-80 Q 30,-120 0,-150 Z"
                    fill="url(#etherGrad)"
                    opacity="0.9"
                />
                {/* Cosmos/stars symbol */}
                <g transform="translate(0, -110)">
                    <circle cx="0" cy="20" r="3" fill="#FFFFFF" opacity="0.9" />
                    <circle cx="-6" cy="15" r="1.5" fill="#FFFFFF" opacity="0.7" />
                    <circle cx="6" cy="17" r="2" fill="#FFFFFF" opacity="0.8" />
                    <circle cx="3" cy="25" r="1" fill="#FFFFFF" opacity="0.6" />
                    <circle cx="-4" cy="24" r="1.5" fill="#FFFFFF" opacity="0.7" />
                </g>
            </g>

            {/* Central OM symbol and lotus */}
            <g transform="translate(200, 200)">
                {/* Inner lotus */}
                <circle cx="0" cy="0" r="45" fill="#FFFFFF" opacity="0.1" />

                {/* Stylized OM symbol */}
                <path
                    d="M -8,-15 Q -15,-10 -15,0 Q -15,8 -10,12 Q -5,15 0,15 Q 5,15 10,12 Q 15,8 15,0 Q 15,-10 8,-15"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />
                <circle cx="12" cy="-18" r="4" fill="none" stroke="#D4AF37" strokeWidth="3" />
                <path
                    d="M -5,-8 Q 0,-5 5,-8"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M -2,8 L -2,18"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <circle cx="-2" cy="21" r="2.5" fill="#D4AF37" />

                {/* Small dots around center */}
                <circle cx="35" cy="0" r="2" fill="#D4AF37" opacity="0.6" />
                <circle cx="-35" cy="0" r="2" fill="#D4AF37" opacity="0.6" />
                <circle cx="0" cy="35" r="2" fill="#D4AF37" opacity="0.6" />
                <circle cx="0" cy="-35" r="2" fill="#D4AF37" opacity="0.6" />
                <circle cx="25" cy="25" r="1.5" fill="#D4AF37" opacity="0.4" />
                <circle cx="-25" cy="-25" r="1.5" fill="#D4AF37" opacity="0.4" />
                <circle cx="25" cy="-25" r="1.5" fill="#D4AF37" opacity="0.4" />
                <circle cx="-25" cy="25" r="1.5" fill="#D4AF37" opacity="0.4" />
            </g>
        </svg>
    );
}
export default AyurvedaLogo