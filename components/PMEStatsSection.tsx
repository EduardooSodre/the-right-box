"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function AnimatedArcWithDot() {
    // Arc params
    const cx0 = 60;
    const cy0 = 60;
    const r = 50;
    const startAngle = Math.PI; // 180deg
    const endAngle = 0; // 0deg
    const percent = 0.7; // animate to 70%

    const progress = useMotionValue(0);
    const angle = useTransform(
        progress,
        [0, 1],
        [startAngle, startAngle + (endAngle - startAngle) * percent]
    );
    const cx = useTransform(angle, (a) => cx0 + r * Math.cos(a));
    const cy = useTransform(angle, (a) => cy0 - r * Math.sin(a)); // use minus to match SVG coordinate space

    const ref = useRef<SVGSVGElement | null>(null);

    return (
        <svg viewBox="0 0 120 60" ref={ref} className="w-full h-full">
            <path
                d="M10 60 A50 50 0 0 1 110 60"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <motion.path
                d="M10 60 A50 50 0 0 1 110 60"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: percent }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                onUpdate={(latest) => {
                    if (typeof latest.pathLength === "number") {
                        // avoid division by zero
                        const p = Math.max(0, Math.min(latest.pathLength / percent, 1));
                        progress.set(p);
                    }
                }}
            />

            <motion.circle r={6} fill="#FF6B35" cx={cx} cy={cy} />
        </svg>
    );
}

export default function PMEStatsSection() {
    return (
        <section className="relative w-full bg-white">

            {/* BLUR 3D NO TOPO (efeito de transição de section) */}
            <div
                className="
                    pointer-events-none
                    absolute inset-x-2
                    h-16 md:h-20
                    bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.9)_0,rgba(0,0,0,0.7)_20%,transparent_70%)]
                    opacity-85
                "
            />

            {/* GRID 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full auto-rows-[380px] md:auto-rows-[450px]">
                {/* ========== QUADRANTE 1 ========== */}
                <div className="flex flex-col items-center justify-center text-center px-6 bg-[linear-gradient(90deg,#ffffff,#f6f1eb)]">
                    <h2 className="text-laranja-intenso text-3xl sm:text-4xl font-black leading-snug">
                        Dê o primeiro passo para alinhar
                        <br />
                        <span className="text-black">marketing e vendas.</span>
                    </h2>

                    <button className="mt-6 bg-black text-laranja-intenso font-bold px-8 py-3 rounded-sm">
                        FALAR COM A TRBOX
                    </button>
                </div>

                {/* ========== QUADRANTE 2 ========== */}
                <div className="flex items-center justify-center bg-[linear-gradient(270deg,#ffffff,#f6f1eb)]">
                    <Image
                        src="/images/labirinto.png"
                        alt="Labirinto"
                        width={300}
                        height={300}
                        className="w-40 sm:w-52 md:w-60 object-contain"
                    />
                </div>

                {/* ========== QUADRANTE 3 (IMAGEM GRANDE) ========== */}
                <div className="flex items-center justify-center bg-[linear-gradient(90deg,#f6f1eb,#ffffff)] overflow-hidden">
                    <Image
                        src="/images/section-logos.png"
                        alt="Logos"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* ========== QUADRANTE 4 ========== */}
                <div className="flex flex-col justify-center items-center px-6 bg-[linear-gradient(270deg,#f6f1eb,#ffffff)]">
                    <h2 className="text-black text-2xl sm:text-3xl font-black leading-tight text-center">
                        <span className="text-black">70%</span> dos PME&apos;s fazem
                        <br /> publicidade e não marketing
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
                        {/* Semicírculo 70% */}
                        <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-56 lg:h-28 xl:w-64 xl:h-32">
                            <AnimatedArcWithDot />

                            <div className="absolute inset-0 flex items-center justify-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-18 text-center">
                                <span className="text-xl sm:text-4xl font-bold text-gray-200">70%</span>
                            </div>
                        </div>

                        <p className="font-[AmsiPro-Italic] text-sm sm:text-base md:text-lg text-black font-semibold leading-relaxed text-center ">
                            Transformamos anúncios em resultados <br /> reais, conectando sua marca às pessoas <br /> certas e aumentando seu faturamento de <br /> forma consistente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
