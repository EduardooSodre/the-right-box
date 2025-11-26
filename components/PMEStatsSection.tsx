"use client";

import { motion } from "framer-motion";

export default function PMEStatsSection() {
    return (
        <section className="relative bg-gradient-to-b from-zinc-50 to-white text-black py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Placeholder for 3D cubes illustration */}
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4">
                                    {[...Array(9)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-zinc-800 to-zinc-600 transform rotate-45 shadow-xl"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                <span className="text-laranja-intenso">70%</span> dos PME&apos;s fazem<br />
                                <span className="font-bold">publicidade e não marketing</span>
                            </h2>
                        </div>

                        {/* Circular Progress */}
                        <div className="flex items-center gap-6 sm:gap-8">
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                                <svg className="transform -rotate-90" viewBox="0 0 120 120">
                                    {/* Background circle */}
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="54"
                                        fill="none"
                                        stroke="#e5e7eb"
                                        strokeWidth="12"
                                    />
                                    {/* Progress circle */}
                                    <motion.circle
                                        cx="60"
                                        cy="60"
                                        r="54"
                                        fill="none"
                                        stroke="#FF6B35"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        initial={{ strokeDasharray: "0 339" }}
                                        whileInView={{ strokeDasharray: "238 339" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl sm:text-3xl font-bold text-laranja-intenso">
                                        70%
                                    </span>
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed">
                                    <span className="font-semibold">Transformamos anúncios em resultados</span> mais
                                    avançados que outros no mercado de atuação. O processo de
                                    Marketing converge conversas.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
