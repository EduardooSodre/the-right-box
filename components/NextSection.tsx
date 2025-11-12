"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm';
import {
    Search,
    Network,
    RefreshCw,
    Navigation,
    TrendingUp,
    Rocket
} from 'lucide-react';
import type { AccelerationContent, Gargalo, MethodologyStep, Solution } from '@/types/contentful';

interface NextSectionProps {
    accelerationContent?: AccelerationContent;
    gargalos?: Gargalo[];
    methodologySteps?: MethodologyStep[];
    solutions?: Solution[];
}

export default function NextSection({
    accelerationContent,
    gargalos = [],
    methodologySteps = [],
    solutions = []
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

    const defaultSolutions = [
        { title: "Gestão de mídia paga", description: "", order: 1 },
        { title: "Criativos para anúncios", description: "", order: 2 },
        { title: "Landing Pages de Alta Conversão", description: "", order: 3 },
        { title: "Estratégia para anúncio", description: "", order: 4 },
        { title: "Identidade Visual", description: "", order: 5 },
        { title: "Campanhas de e-mail", description: "", order: 6 },
        { title: "CRM & Automação", description: "", order: 7 },
        { title: "Captação de Conteúdo", description: "", order: 8 }
    ];

    const gargalosData = gargalos.length > 0 ? gargalos : defaultGargalos;
    const stepsData = methodologySteps.length > 0 ? methodologySteps : defaultSteps;
    const solutionsData = solutions.length > 0 ? solutions : defaultSolutions;

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
        <section id="next-section" className="relative min-h-screen bg-zinc-50 text-zinc-900 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
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
                    className="text-center font-['AmsiPro'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-900 mb-3 md:mb-4"
                >
                    {accelerationContent?.gargalosTitle || "Identificamos e corrigimos os gargalos que impedem suas vendas"}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center text-base md:text-lg text-zinc-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
                >
                    {accelerationContent?.gargalosSubtitle || "Do anúncio ao CRM  para que cada interação avance rumo ao sim."}
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
                    {gargalosData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white border-2 border-laranja-intenso/20 hover:border-laranja-intenso transition-all duration-300 p-4 md:p-5 rounded-sm flex flex-col items-start justify-start group"
                        >
                            <h3 className="font-['AmsiPro'] font-bold text-xs sm:text-sm uppercase mb-2 leading-tight text-laranja-intenso group-hover:text-laranja-chama transition-colors">{item.title}</h3>
                            <p className="text-xs leading-relaxed text-zinc-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Card estilo V4 Company - Cantos retos, design fiel */}
            <div className="w-full max-w-7xl bg-zinc-950 shadow-2xl border-2 border-laranja-intenso overflow-hidden">
                {/* Header do Card */}
                <div className="relative px-6 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-12 md:pt-14 pb-6 md:pb-8 border-b-2 border-laranja-intenso/30">
                    <p className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wider mb-2">
                        Transforme o marketing da sua empresa em{" "}
                        <span className="text-laranja-intenso font-bold">APENAS 6 PASSOS</span>
                    </p>

                    <div className="flex items-start gap-3 md:gap-4 mb-4">
                        <span className="font-['AmsiPro'] font-black text-5xl sm:text-6xl text-laranja-intenso leading-none">
                            01
                        </span>
                        <div className="flex-1">
                            <h2 className="font-['AmsiPro'] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 uppercase">
                                CONHEÇA A{" "}
                                <span className="text-laranja-intenso">
                                    {(accelerationContent?.title || "ACELERAÇÃO COMERCIAL").toUpperCase()}
                                </span>{" "}
                                <span className="text-zinc-500">(O QUE FAZEMOS)</span>
                            </h2>
                        </div>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl">
                        {accelerationContent?.subtitle || "Uma engenharia operacional que integra dados, campanhas e CRM para formar um sistema de vendas ativo, inteligente e sustentável."}
                    </p>
                </div>

                {/* Área de conteúdo com slide ativo */}
                <div className="relative min-h-[500px] md:min-h-[550px] bg-linear-to-b from-zinc-950 to-black">
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
                                    className="absolute inset-0 px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16"
                                >
                                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 h-full">
                                        {/* Ícone grande à esquerda */}
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                            className="shrink-0"
                                        >
                                            <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-linear-to-br from-laranja-intenso/20 to-transparent border-2 border-laranja-intenso/40 flex items-center justify-center backdrop-blur-sm">
                                                <Icon className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-laranja-intenso" strokeWidth={1.5} />
                                            </div>
                                        </motion.div>

                                        {/* Conteúdo à direita */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.4 }}
                                            className="flex-1 text-left max-w-2xl"
                                        >
                                            <div className="mb-6">
                                                <span className="font-['AmsiPro'] font-black text-6xl md:text-7xl lg:text-8xl text-laranja-intenso/30 leading-none">
                                                    {step.number}
                                                </span>
                                                <span className="font-['AmsiPro'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white ml-4 uppercase">
                                                    {step.title}
                                                </span>
                                            </div>
                                            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed">
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
            <div className="w-full max-w-7xl text-center mt-12 md:mt-16 lg:mt-20">
                <h4 className="font-['AmsiPro'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-900 mb-3 md:mb-4">
                    {accelerationContent?.solutionsSectionTitle || "Soluções"}
                </h4>
                <p className="text-base md:text-lg text-zinc-600 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                    {accelerationContent?.solutionsSectionDescription || "Serviços integrados para transformar sua estratégia comercial em resultados concretos."}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-sm sm:text-base md:text-lg font-semibold text-zinc-900">
                    {solutionsData.map((solution, idx) => (
                        <div key={idx} className="bg-white border border-zinc-200 hover:border-laranja-intenso hover:shadow-md transition-all duration-300 p-4 md:p-6 rounded-sm group">
                            <p className="group-hover:text-laranja-intenso transition-colors">{solution.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full max-w-7xl mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_380px] xl:grid-cols-[1.5fr_400px] gap-8 md:gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <h3 className="font-['AmsiPro'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight whitespace-pre-line">
                            {accelerationContent?.ctaTitle || "Dê o primeiro passo para alinhar marketing e vendas."}
                        </h3>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            <div className="bg-white rounded-sm p-4 sm:p-5 shadow-lg border border-zinc-100">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
