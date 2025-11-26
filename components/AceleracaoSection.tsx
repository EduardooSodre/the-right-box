"use client";

import { motion } from "framer-motion";

export default function AceleracaoSection() {
    return (
        <section className="relative bg-zinc-950 text-white py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                            Conheça a<br />
                            <span className="text-laranja-intenso">ACELERAÇÃO COMERCIAL</span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed"
                    >
                        Acelere suas vendas com um sistema que integra CRM, anúncios,
                        e-mails e jornada do cliente para gerar{" "}
                        <span className="text-laranja-intenso font-semibold">
                            VENDAS PREVISÍVEIS
                        </span>
                        .
                    </motion.p>

                    {/* CTA Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-4"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl font-bold italic text-white/90">
                            Jornada mapeada, conexões certas e pós-lead{" "}
                            <span className="text-laranja-intenso">
                                que não deixa oportunidades para trás.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
