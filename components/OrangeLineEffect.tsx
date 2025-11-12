// Fio laranja brilhante igual ao efeito da Hero
export default function OrangeLineEffect() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="orangeLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(239, 117, 31, 0)" />
                        <stop offset="40%" stopColor="rgba(239, 117, 31, 0.7)" />
                        <stop offset="50%" stopColor="rgba(239, 117, 31, 1)" />
                        <stop offset="60%" stopColor="rgba(239, 117, 31, 0.7)" />
                        <stop offset="100%" stopColor="rgba(239, 117, 31, 0)" />
                    </linearGradient>
                    <filter id="orangeLineGlow">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#orangeLineGlow)">
                    <path
                        d="M 0 200 Q 400 150, 800 200 T 1600 200"
                        stroke="url(#orangeLineGradient)"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.85"
                    />
                </g>
            </svg>
        </div>
    );
}
