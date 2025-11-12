"use client";

import { motion } from "framer-motion";
import { Target, Megaphone, Users, MessageSquare, BarChart3, Sparkles } from "lucide-react";
import { useState } from "react";

// Mapeamento de ícones Lucide por título
const iconMap: Record<string, typeof Target> = {
    "Estratégia e Funil de Vendas": Target,
    "Captação e Conversão": Megaphone,
    "Pós-Lead e CRM": Users,
    "Scripts de Atendimento": MessageSquare,
    "Dashboards em Tempo Real": BarChart3,
    "Conteúdo Estratégico": Sparkles,
};

// Dados das Solutions
const solutionsData = [
    {
        title: "Estratégia e Funil de Vendas",
        description: "Diagnóstico comercial e mapeamento da jornada • Planejamento por estágio (Topo → Meio → Fundo) • Proposta de valor por segmento",
    },
    {
        title: "Captação e Conversão",
        description: "Gestão de mídia paga (Google, Meta, LinkedIn, YouTube) • Landing pages orientadas à conversão • Criativos performáticos (estáticos e vídeo curto)",
    },
    {
        title: "Pós-Lead e CRM",
        description: "Cadências multicanal e SLAs • Integração com CRM, WhatsApp, email e agenda • Nutrição, reativação e follow-up baseados em dados",
    },
    {
        title: "Scripts de Atendimento",
        description: "Treinamento da recepção e secretaria para aumentar significativamente a taxa de conversão",
    },
    {
        title: "Dashboards em Tempo Real",
        description: "Acompanhe todos os números da sua clínica de forma clara, objetiva e em tempo real",
    },
    {
        title: "Conteúdo Estratégico",
        description: "Criativos de impacto com antes/depois, depoimentos e construção de autoridade profissional",
    },
];

interface SolutionCardProps {
    title: string;
    description: string;
    index: number;
}

function SolutionCard({ title, description, index }: SolutionCardProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const Icon = iconMap[title] || Target;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative bg-zinc-950 border-2 border-zinc-800 hover:border-laranja-intenso transition-colors duration-300 p-6 overflow-hidden group"
        >
            {/* Efeito gradiente que segue o mouse */}
            {isHovering && (
                <motion.div
                    className="absolute pointer-events-none"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                        transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 2 }}
                    exit={{ opacity: 0, scale: 0 }}
                >
                    <div className="w-64 h-64 bg-laranja-intenso/20 rounded-full blur-3xl" />
                </motion.div>
            )}

            {/* Conteúdo do card */}
            <div className="relative z-10">
                {/* Ícone */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="w-16 h-16 mb-4 flex items-center justify-center border-2 border-laranja-intenso/40 group-hover:border-laranja-intenso transition-colors"
                >
                    <Icon className="w-8 h-8 text-laranja-intenso" />
                </motion.div>

                {/* Título */}
                <h3 className="font-['AmsiPro'] font-bold text-base md:text-lg text-white mb-3 group-hover:text-laranja-chama transition-colors">
                    {title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Solutions() {
    return (
        <section className="relative bg-zinc-900 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                {/* Título da seção */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-['AmsiPro'] font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                        Soluções
                    </h2>
                    <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
                        Identificamos e corrigimos os gargalos que impedem suas vendas
                    </p>
                </motion.div>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {solutionsData.map((solution, index) => (
                        <SolutionCard
                            key={solution.title}
                            title={solution.title}
                            description={solution.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
