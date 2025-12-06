"use client";

import { motion } from "framer-motion";

export default function GargalosSection() {
    return (
        <section className="relative text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">

            {/* Fundo escuro leve vindo da hero */}
            <div className="absolute inset-0" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">

                {/* TÍTULO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
                >
                    <h2 className="font-['AmsiPro'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-tight px-4 sm:px-0">
                        IDENTIFICAMOS E CORRIGIMOS OS<br className="hidden sm:block" />
                        <span className="block sm:inline"> </span>
                        <span className="text-laranja-intenso"> GARGALOS QUE IMPEDEM AS SUAS VENDAS </span>
                    </h2> </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">

                    {/* CARD 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="
                            p-4 sm:p-5 md:p-6 lg:p-8 rounded-sm flex flex-col text-center justify-center
                            border border-[#d4c8bb]
                            shadow-lg
                            bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                            min-h-[180px] sm:min-h-[200px] md:min-h-[220px]
                        "
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="text-sm sm:text-[15px] md:text-base text-zinc-900 leading-relaxed font-medium"
                        >
                            Organizamos o posicionamento e o
                            encaixe da oferta por segmento e
                            etapa da jornada, para que{" "}
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                cada interação contribua para venda
                            </span>
                        </motion.p>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="
                            p-4 sm:p-5 md:p-6 lg:p-8 rounded-sm flex flex-col text-center justify-center
                            border border-[#d4c8bb]
                            shadow-lg
                            bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                            min-h-[180px] sm:min-h-[200px] md:min-h-[220px]
                        "
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                            className="text-sm sm:text-[15px] md:text-base text-zinc-900 leading-relaxed font-medium"
                        >
                            Estruturamos cadências multicanal
                            com comunicações adequadas a
                            cada estágio e comportamento do
                            lead,{" "}
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                reduzindo o risco de
                                esfriamento.
                            </span>
                        </motion.p>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="
                            p-4 sm:p-5 md:p-6 lg:p-8 rounded-sm flex flex-col text-center justify-center
                            border border-[#d4c8bb]
                            shadow-lg
                            bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                            min-h-[180px] sm:min-h-[200px] md:min-h-[220px]
                            sm:col-span-2 md:col-span-1
                        "
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                            className="text-sm sm:text-[15px] md:text-base text-zinc-900 leading-relaxed font-medium"
                        >
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                Integramos
                            </span>{" "}
                            site, formulários,
                            canais de contato, agenda e CRM
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                {" "}para manter o contexto da
                                jornada.
                            </span>
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
