"use client";

import { motion } from "framer-motion";
import type { Gargalo } from "@/types/contentful";

interface GargalosSectionProps {
    gargalos?: Gargalo[];
}

export default function GargalosSection({ gargalos }: GargalosSectionProps) {
    const defaultGargalos = [
        {
            title: "Organização",
            description: "Organizamos o posicionamento e a eficácia da oferta por segmento de mercado, integrada à jornada síncrona para gerar vendas"
        },
        {
            title: "Comunicação",
            description: "Estruturamos cadências multicanal com comunicações integradas e timming otimizado para não deixar a mesa de dinheiro redondo"
        },
        {
            title: "Integração",
            description: "Integramos site, formulários, canais de contato, agenda e CRM sincronizados para manter o controle do processo"
        }
    ];

    const items = gargalos && gargalos.length >= 3 ? gargalos.slice(0, 3) : defaultGargalos;

    return (
        <section className="relative bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
            {/* Decorative lines */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-laranja-intenso to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-laranja-intenso to-transparent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
                        IDENTIFICAMOS E CORRIGIMOS OS<br />
                        <span className="text-laranja-intenso">GARGALOS QUE IMPEDEM AS SUAS VENDAS</span>
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-zinc-900 border-2 border-zinc-800 hover:border-laranja-intenso p-6 sm:p-8 transition-all duration-300 group"
                        >
                            {/* Icon placeholder - você pode adicionar ícones depois */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-laranja-intenso/10 flex items-center justify-center group-hover:bg-laranja-intenso/20 transition-colors">
                                <div className="w-8 h-8 border-2 border-laranja-intenso rounded-full" />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-laranja-intenso transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
