"use client";

import { motion } from "framer-motion";

export default function GargalosSection() {
    return (
        <section className="relative text-white  overflow-hidden">

            {/* Fundo escuro leve vindo da hero */}
            <div className="absolute inset-0" />

            <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* TÍTULO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-['AmsiPro'] font-semibold text-3xl sm:text-4xl  uppercase leading-tight"> IDENTIFICAMOS E CORRIGIMOS OS<br /> <span className="text-laranja-intenso"> GARGALOS QUE IMPEDEM AS SUAS VENDAS </span> </h2> </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

                    {/* CARD 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
                            p-4 rounded-sm flex flex-col text-center justify-center
                            border border-[#d4c8bb]
                            shadow-lg
                            bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                        "
                    >
                        <p className="text-[15px] text-zinc-900 leading-relaxed font-medium whitespace-pre-line">
                            Organizamos o posicionamento e o{"\n"}
                            encaixe da oferta por segmento e{"\n"}
                            etapa da jornada, para que{" "}
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                cada interação contribua para venda
                            </span>
                        </p>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="
                            p-4 rounded-sm flex flex-col text-center justify-center
                            border border-[#d4c8bb]
                            shadow-lg
                            bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                        "
                    >
                        <p className="text-[15px] text-zinc-900 leading-relaxed font-medium whitespace-pre-line">
                            Estruturamos cadências multicanal{"\n"}
                            com comunicações adequadas a{"\n"}
                            cada estágio e comportamento do{"\n"}
                            lead,{" "}
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                reduzindo o risco de{"\n"}esfriamento.
                            </span>
                        </p>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="
                            p-4 rounded-sm flex flex-col text-center justify-center
                            border border-[#d4c8bb]
                            shadow-lg
                            bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                        "
                    >
                        <p className="text-[15px] text-zinc-900 leading-relaxed font-medium whitespace-pre-line">
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                Integramos
                            </span>{" "}
                            site, formulários,{"\n"}
                            canais de contato, agenda e CRM{"\n"}
                            <span className="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                                para manter o contexto da{"\n"}jornada.
                            </span>
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
