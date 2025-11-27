import Image from "next/image";

export default function BackgroundEffects() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Background luminous images */}
            <div className="absolute inset-0 opacity-20">
                <Image
                    src="/images/Raias luminosas em fundo negro.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover mix-blend-lighten"
                />
            </div>
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="/images/Curvas Luminosas em Fundo Negro 2.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover mix-blend-screen"
                />
            </div>

            {/* Animated gradient curves */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-[150%] h-[150%] animate-[spin_40s_linear_infinite] bg-[radial-gradient(ellipse_at_20%_30%,rgba(239,117,31,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(233,80,9,0.12)_0%,transparent_50%)]" />
            </div>

            {/* Luminous lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(239, 117, 31, 0)" />
                        <stop offset="50%" stopColor="rgba(239, 117, 31, 0.4)" />
                        <stop offset="100%" stopColor="rgba(239, 117, 31, 0)" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(233, 80, 9, 0)" />
                        <stop offset="50%" stopColor="rgba(233, 80, 9, 0.3)" />
                        <stop offset="100%" stopColor="rgba(233, 80, 9, 0)" />
                    </linearGradient>
                </defs>

                {/* Curved luminous lines */}
                <path
                    d="M 0 200 Q 400 150, 800 200 T 1600 200"
                    stroke="url(#lineGradient1)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-[pulse_4s_ease-in-out_infinite]"
                />
                <path
                    d="M 0 400 Q 500 350, 1000 400 T 2000 400"
                    stroke="url(#lineGradient2)"
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-[pulse_6s_ease-in-out_infinite] [animation-delay:2s]"
                />
                <path
                    d="M 200 0 Q 250 300, 300 600 T 400 1200"
                    stroke="url(#lineGradient1)"
                    strokeWidth="1"
                    fill="none"
                    className="animate-[pulse_5s_ease-in-out_infinite] [animation-delay:1s]"
                />
            </svg>

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
        </div>
    );
}
