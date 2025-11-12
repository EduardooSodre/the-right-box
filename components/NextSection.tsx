"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionBackground from './SectionBackground';
import {
    Search,
    Network,
    RefreshCw,
    Navigation,
    TrendingUp,
    Rocket
} from 'lucide-react';
import type { AccelerationContent, Gargalo, MethodologyStep } from '@/types/contentful';

interface NextSectionProps {
    accelerationContent?: AccelerationContent;
    gargalos?: Gargalo[];
    methodologySteps?: MethodologyStep[];
}

export default function NextSection({
    accelerationContent,
    gargalos = [],
    methodologySteps = []
}: NextSectionProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const defaultGargalos = [
        { title: "Estratégia & Oferta", description: "Clarificamos posicionamento e encaixe de oferta por segmento e jornada.", order: 1 },
        { title: "Qualificação & Prioridade", description: "Definimos ICP, critérios de qualificação e score de intenção.", order: 2 },
        { title: "Tempo & Cadência", description: "Orquestramos cadências multicanal com mensagens personalizadas.", order: 3 },
        { title: "Operação Comercial", description: "Desenhamos etapas claras e rotinas de higiene de dados.", order: 4 },
        { title: "Integrações e Dados", description: "Integramos site, formulários, email/WhatsApp, calendário e CRM.", order: 5 },
        { title: "Proposta, preço e risco", description: "Modelos modulares, envio ágil e próximo passo claro.", order: 6 }
    ];

    const defaultSteps = [
        { number: "01", title: "Descobrir", description: "Mapeamos a jornada de compra real e as intenções que movem seu cliente.", order: 1 },
        { number: "02", title: "Orquestrar", description: "Conectamos atração e relacionamento em um único fluxo, alinhado ao estágio de decisão.", order: 2 },
        { number: "03", title: "Sincronizar", description: "Seu time recebe contexto útil no momento certo; nada se perde entre marketing, CRM e agenda.", order: 3 },
        { number: "04", title: "Conduzir", description: "Mensagens e contatos evoluem o lead de forma natural até o sim, sem atrito desnecessário.", order: 4 },
        { number: "05", title: "Aprender", description: "Operação melhora enquanto roda: leitura de sinais, ajustes leves e previsibilidade de receita.", order: 5 },
        { number: "06", title: "Escalar", description: "Replicamos o que funciona, ampliamos canais e volume com governança.", order: 6 }
    ];

    const gargalosData = gargalos.length > 0 ? gargalos : defaultGargalos;
    const stepsData = methodologySteps.length > 0 ? methodologySteps : defaultSteps;

    // Ícones para cada step
    const stepIcons = [Search, Network, RefreshCw, Navigation, TrendingUp, Rocket];

    // Auto-advance slides
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveStep((prev) => (prev + 1) % stepsData.length);
            }, 5000); // 5 segundos
            return () => clearInterval(interval);
        }
    }, [isPaused, stepsData.length]);

    const handleStepClick = (index: number) => {
        setActiveStep(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 10000); // Retoma após 10s
    };

    return (
        <section id="next-section" className="relative min-h-screen bg-zinc-50 text-zinc-900 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
            <SectionBackground variant="light" intensity="subtle" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl mb-12 md:mb-16"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center font-['AmsiPro'] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-900 mb-3 md:mb-4"
                >
                    {accelerationContent?.gargalosTitle || "Identificamos e corrigimos os gargalos que impedem suas vendas"}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center text-sm sm:text-base md:text-lg text-zinc-600 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4"
                >
                    {accelerationContent?.gargalosSubtitle || "Do anúncio ao CRM  para que cada interação avance rumo ao sim."}
                </motion.p>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                    {gargalosData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white border-2 border-laranja-intenso/20 hover:border-laranja-intenso transition-all duration-300 p-3 sm:p-4 md:p-5 rounded-sm flex flex-col items-start justify-start group"
                        >
                            <h3 className="font-['AmsiPro'] font-bold text-[10px] sm:text-xs md:text-sm uppercase mb-1 sm:mb-2 leading-tight text-laranja-intenso group-hover:text-laranja-chama transition-colors">{item.title}</h3>
                            <p className="text-[9px] sm:text-xs leading-relaxed text-zinc-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Card estilo V4 Company - Cantos retos, design fiel */}
            <div className="w-full max-w-7xl bg-zinc-950 shadow-2xl border-2 border-laranja-intenso overflow-hidden">
                {/* Header do Card */}
                <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-4 sm:pb-6 md:pb-8 border-b-2 border-laranja-intenso/30">
                    <p className="text-[10px] sm:text-xs md:text-sm text-zinc-400 uppercase tracking-wider mb-2">
                        Transforme o marketing da sua empresa em{" "}
                        <span className="text-laranja-intenso font-bold">APENAS 6 PASSOS</span>
                    </p>
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                        <span className="font-['AmsiPro'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-laranja-intenso leading-none">
                            01
                        </span>
                        <div className="flex-1">
                            <h2 className="font-['AmsiPro'] font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-1 sm:mb-2 uppercase leading-tight">
                                CONHEÇA A{" "}
                                <span className="text-laranja-intenso">
                                    {(accelerationContent?.title || "ACELERAÇÃO COMERCIAL").toUpperCase()}
                                </span>{" "}
                                <span className="text-zinc-500 text-xs sm:text-sm md:text-base lg:text-lg">(O QUE FAZEMOS)</span>
                            </h2>

                        </div>

                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-4xl">
                        {accelerationContent?.subtitle || "Uma engenharia operacional que integra dados, campanhas e CRM para formar um sistema de vendas ativo, inteligente e sustentável."}
                    </p>
                </div>

                {/* Área de conteúdo com slide ativo */}
                <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] bg-linear-to-b from-zinc-950 to-black">
                    <AnimatePresence mode="wait">
                        {stepsData.map((step, idx) => {
                            const Icon = stepIcons[idx];
                            if (activeStep !== idx) return null;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16"
                                >
                                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 h-full">
                                        {/* Ícone grande à esquerda */}
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                            className="shrink-0"
                                        >
                                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-linear-to-br from-laranja-intenso/20 to-transparent border-2 border-laranja-intenso/40 flex items-center justify-center backdrop-blur-sm">
                                                <Icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 text-laranja-intenso" strokeWidth={1.5} />
                                            </div>
                                        </motion.div>

                                        {/* Conteúdo à direita */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.4 }}
                                            className="flex-1 text-center lg:text-left max-w-2xl"
                                        >
                                            <div className="mb-4 sm:mb-6">
                                                <span className="font-['AmsiPro'] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-laranja-intenso/30 leading-none">
                                                    {step.number}
                                                </span>
                                                <span className="font-['AmsiPro'] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white ml-2 sm:ml-3 md:ml-4 uppercase">
                                                    {step.title}
                                                </span>
                                            </div>
                                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Bottom Navigation - Cantos retos, estilo V4 */}
                <div className="border-t-2 border-laranja-intenso/30 bg-zinc-900 px-4 py-4">
                    <div className="flex justify-center items-center gap-2 md:gap-3 max-w-5xl mx-auto flex-wrap">
                        {stepsData.map((step, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => handleStepClick(idx)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative px-4 py-3 md:px-6 md:py-4 transition-all duration-300 border-2 ${activeStep === idx
                                    ? 'bg-laranja-intenso border-laranja-intenso text-white'
                                    : 'bg-transparent border-zinc-700 text-zinc-400 hover:border-laranja-intenso/50 hover:text-white'
                                    }`}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-sm md:text-base font-bold font-['AmsiPro']">
                                        {step.number}
                                    </span>
                                    <span className="text-xs uppercase hidden sm:block font-semibold">
                                        {step.title}
                                    </span>
                                </div>

                                {/* Barra de progresso */}
                                {activeStep === idx && !isPaused && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-white"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
