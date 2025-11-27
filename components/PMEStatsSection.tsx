"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            <div
                className="
                    grid grid-cols-1 md:grid-cols-2
                    w-full
                    auto-rows-[380px] md:auto-rows-[450px]
                "
            >

                {/* ========== QUADRANTE 1 ========== */}
                <div
                    className="
                        flex flex-col items-center justify-center text-center
                        px-6
                        bg-[linear-gradient(90deg,#ffffff,#f6f1eb)]
                    "
                >
                    <h2 className="text-3xl sm:text-4xl font-black leading-snug">
                        Dê o primeiro passo para alinhar<br />
                        <span className="text-laranja-intenso">marketing e vendas.</span>
                    </h2>

                    <button className="mt-6 bg-black text-white font-bold px-8 py-3 rounded-sm">
                        FALAR COM A TRBOX
                    </button>
                </div>

                {/* ========== QUADRANTE 2 ========== */}
                <div
                    className="
                        flex items-center justify-center
                        bg-[linear-gradient(270deg,#ffffff,#f6f1eb)]
                    "
                >
                    <Image
                        src="/images/labirinto.png"
                        alt="Labirinto"
                        width={300}
                        height={300}
                        className="w-40 sm:w-52 md:w-60 object-contain"
                    />
                </div>

                {/* ========== QUADRANTE 3 (IMAGEM GRANDE) ========== */}
                <div
                    className="
                        flex items-center justify-center
                        bg-[linear-gradient(90deg,#f6f1eb,#ffffff)]
                        overflow-hidden
                    "
                >
                    <Image
                        src="/images/section-logos.png"
                        alt="Logos"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* ========== QUADRANTE 4 ========== */}
                <div
                    className="
                        flex flex-col justify-center px-6
                        bg-[linear-gradient(270deg,#f6f1eb,#ffffff)]
                    "
                >
                    <h2 className="text-2xl sm:text-3xl font-black leading-tight text-center md:text-left">
                        <span className="text-laranja-intenso">70%</span> dos PME&apos;s fazem<br />
                        publicidade e não marketing
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">

                        {/* Semicírculo 70% */}
                        <div className="relative w-32 h-16 sm:w-40 sm:h-20">
                            <svg viewBox="0 0 120 60">
                                <path
                                    d="M10 60 A50 50 0 0 1 110 60"
                                    fill="none"
                                    stroke="#e5e7eb"
                                    strokeWidth="12"
                                />
                                <motion.path
                                    d="M10 60 A50 50 0 0 1 110 60"
                                    fill="none"
                                    stroke="#FF6B35"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 0.7 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center mt-2">
                                <span className="text-xl sm:text-2xl font-bold text-laranja-intenso">
                                    70%
                                </span>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed text-center sm:text-left">
                            <span className="font-semibold">Transformamos anúncios em resultados</span> mais
                            avançados que outros no mercado de atuação. O processo de marketing converge conversas.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
