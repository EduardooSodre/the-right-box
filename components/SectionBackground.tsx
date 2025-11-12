interface SectionBackgroundProps {
    variant?: 'dark' | 'light' | 'gray';
    intensity?: 'subtle' | 'medium' | 'strong';
}

export default function SectionBackground({
    variant = 'light',
    intensity = 'subtle'
}: SectionBackgroundProps) {
    const opacityClass = {
        subtle: 'opacity-5',
        medium: 'opacity-10',
        strong: 'opacity-20'
    }[intensity];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Animated gradient curves */}
            <div className={`absolute inset-0 ${opacityClass}`}>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_30%,rgba(239,117,31,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_70%,rgba(233,80,9,0.12)_0%,transparent_60%)] animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Luminous curved lines */}
            <svg
                className={`absolute inset-0 w-full h-full ${opacityClass}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={`lineGradient1-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(239, 117, 31, 0)" />
                        <stop offset="50%" stopColor="rgba(239, 117, 31, 0.4)" />
                        <stop offset="100%" stopColor="rgba(239, 117, 31, 0)" />
                    </linearGradient>
                    <linearGradient id={`lineGradient2-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(233, 80, 9, 0)" />
                        <stop offset="50%" stopColor="rgba(233, 80, 9, 0.3)" />
                        <stop offset="100%" stopColor="rgba(233, 80, 9, 0)" />
                    </linearGradient>
                </defs>

                <path
                    d="M 0 200 Q 400 150, 800 200 T 1600 200"
                    stroke={`url(#lineGradient1-${variant})`}
                    strokeWidth="2"
                    fill="none"
                    className="animate-[pulse_8s_ease-in-out_infinite]"
                />
                <path
                    d="M 0 400 Q 500 350, 1000 400 T 2000 400"
                    stroke={`url(#lineGradient2-${variant})`}
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-[pulse_10s_ease-in-out_infinite] [animation-delay:3s]"
                />
                <path
                    d="M 200 0 Q 250 300, 300 600 T 400 1200"
                    stroke={`url(#lineGradient1-${variant})`}
                    strokeWidth="1"
                    fill="none"
                    className="animate-[pulse_9s_ease-in-out_infinite] [animation-delay:1.5s]"
                />
            </svg>
        </div>
    );
}
