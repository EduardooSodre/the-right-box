"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

interface CTASectionProps {
    ctaTitle?: string;
}

export default function CTASection({ ctaTitle }: CTASectionProps) {
    // Remove "marketing e vendas." do final se existir, pois vamos adicionar em laranja
    const titleText = ctaTitle
        ? ctaTitle.replace(/marketing e vendas\.?\s*$/i, '').trim()
        : "Dê o primeiro passo para alinhar";

    return (
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_420px] xl:grid-cols-[1.5fr_450px] gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Texto CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col justify-center text-center lg:text-left"
                        >
                            <h2 className="font-['AmsiPro'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-900 leading-tight">
                                {titleText}{" "}
                                <span className="text-laranja-intenso">marketing e vendas.</span>
                            </h2>
                        </motion.div>

                        {/* Formulário */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center justify-center lg:justify-end"
                        >
                            <div className="w-full max-w-md">
                                <motion.div
                                    initial={{ scale: 0.95 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="bg-zinc-50 border-2 border-laranja-intenso/20 hover:border-laranja-intenso transition-colors duration-300 p-6 sm:p-8 shadow-xl"
                                >
                                    <h3 className="font-['AmsiPro'] font-bold text-xl text-zinc-900 mb-6 text-center">
                                        Comece Agora
                                    </h3>
                                    <ContactForm />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
