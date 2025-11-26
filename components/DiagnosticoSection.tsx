"use client";

import { motion } from "framer-motion";

export default function DiagnosticoSection() {
    return (
        <section className="relative bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#F5F5DC] text-black p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl"
                    >
                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6 sm:mb-8">
                            DIAGNÓSTICO E IMERSÃO
                        </h2>

                        {/* Content */}
                        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                <span className="font-bold text-laranja-intenso">
                                    Antes de pensar em anúncios, posts ou campanhas,
                                </span>{" "}
                                <span className="font-bold">
                                    mergulhamos no seu mercado, no comportamento do seu público
                                </span>{" "}
                                e nos motivos reais que levam alguém a escolher (ou não escolher) a sua empresa.
                            </p>

                            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                                Identificamos as peças certas para montar a estratégia antes de um só clique
                                ser feito, descobrimos e resolvemos conflitos (e por que fazia tudo sem resultado) e
                                desenhamos a jornada de compras centrada em resultados.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-laranja-intenso hover:bg-laranja-chama text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            TRANSFORMAMOS INTENÇÃO EM LEAD DIRETO
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
