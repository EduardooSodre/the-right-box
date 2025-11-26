"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AceleracaoSection() {
    const cards = [
        {
            title: "DIAGNÓSTICO E IMERSÃO",
            text: [
                "Antes de pensar em anúncios, posts ou campanhas, mergulhamos no seu mercado, no comportamento do seu público e nos motivos reais que levam alguém a escolher (ou não escolher) a sua empresa.",
                "Em vez de olhar só para “personas” genéricas ou funis teóricos, mostramos como seus clientes de fato descobrem, comparam e decidem comprar e por quê fazem isso."
            ],
            button: "TRANSFORMAMOS INFORMAÇÃO EM DIREÇÃO",
        },
        {
            title: "CONTEXTO CERTO, NO MOMENTO CERTO",
            text: [
                "Criamos um sistema em que todos reconhecem o contexto útil no momento certo — acelerando conversas, reduzindo retrabalho e evitando perdas de oportunidade."
            ],
            button: "TIME COMERCIAL INTEGRADO COM O MARKETING",
        },
        {
            title: "OPERAÇÃO QUE APRENDE ENQUANTO RODA",
            text: [
                "Nada de achismo: construímos uma operação que lê o comportamento do cliente, corrige o curso em tempo real e aumenta a previsibilidade de receita."
            ],
            button: "ANALISAMOS COMO SEUS LEADS SE COMPORTAM",
        }
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextCard = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % cards.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % cards.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [cards.length]);

    return (
        <section className="relative w-full text-white pt-10 pb-10 overflow-hidden bg-[#0b0b0f]">
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    backgroundImage: "url('/sectionAceleracao.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
                aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/30 to-[#0b0b0f]" aria-hidden />
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(255,98,41,0.18) 1px, transparent 1px), " +
                        "linear-gradient(180deg, rgba(255,98,41,0.12) 1px, transparent 1px)",
                    backgroundSize: "180px 180px, 200px 200px",
                    backgroundPosition: "center",
                    mixBlendMode: "screen",
                }}
                aria-hidden
            />
            <div className="relative z-10 max-w-5xl mx-auto px-6">

                {/* Título Principal */}
                <h2 className="text-center font-['AmsiPro'] font-black text-4xl sm:text-5xl lg:text-6xl leading-tight">
                    Conheça a <br />
                    <span className="text-laranja-intenso uppercase">ACELERAÇÃO COMERCIAL</span>
                </h2>

                <p className="text-center mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-white/85 leading-relaxed">
                    Acelere suas vendas com um sistema que integra CRM, anúncios, <br />
                    e-mails e jornada do cliente para gerar{" "}
                    <span className="text-laranja-intenso">receita previsível.</span>
                </p>

                {/* SLIDER */}
                <div className="relative mt-20 flex justify-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            initial={{
                                x: direction > 0 ? 350 : -350,
                                opacity: 0,
                                scale: 0.92
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.55,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                            exit={{
                                x: direction < 0 ? 350 : -350,
                                opacity: 0,
                                scale: 0.92,
                                transition: {
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                            className="
                                relative 
                                rounded-2xl 
                                shadow-xl 
                                px-12 py-14 
                                max-w-[820px] 
                                w-full
                                text-center
                            "
                            style={{
                                background: "linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)"
                            }}
                        >
                            <h3 className="text-3xl font-black uppercase mb-6 text-black">
                                {cards[index].title}
                            </h3>

                            {cards[index].text.map((t, i) => (
                                <p key={i} className="text-[17px] text-zinc-800 leading-relaxed mb-4">
                                    {t}
                                </p>
                            ))}

                            {/* BOTÃO LARANJA SOB O CARD */}
                            <button
                                className="
                                    absolute 
                                    left-1/2 -translate-x-1/2
                                    bottom-[-32px]
                                    bg-laranja-intenso 
                                    text-white 
                                    font-black 
                                    text-sm 
                                    px-12 py-3 
                                    rounded-md 
                                    uppercase 
                                    tracking-wide
                                "
                            >
                                {cards[index].button}
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* BARRA DE NAVEGAÇÃO */}
                <div className="relative w-full max-w-[1200px] mx-auto mt-24 flex items-center">

                    {/* Linha esquerda */}
                    <div className="flex-1 h-[8px] bg-laranja-intenso rounded-full" />

                    {/* SETA LONGA, FINA, PUXADA À DIREITA */}
                    <button
                        onClick={nextCard}
                        className="
                            mx-4
                            relative
                            h-[34px]
                            px-10
                            flex items-center 
                            justify-center
                            border-[3px]
                            border-white
                            rounded-full
                            bg-transparent
                        "
                        style={{ minWidth: "210px" }}
                    >
                        {/* linha interna */}
                        <span className="absolute left-6 right-12 top-1/2 -translate-y-1/2 h-[4px] bg-white rounded-full" />

                        {/* flecha */}
                        <span className="absolute right-6">
                            <svg width="46" height="22" viewBox="0 0 46 22" fill="none">
                                <path d="M2 11H33" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                <path d="M30 5L39 11L30 17" stroke="white" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </button>

                    {/* Linha direita */}
                    <div className="flex-1 h-[8px] bg-laranja-intenso rounded-full" />
                </div>

                {/* FRASE FINAL */}
                <p className="mt-12 text-center text-xl italic text-white/90">
                    Jornada mapeada, conexões certas e pós-lead{" "}
                    <span className="text-laranja-intenso">que não deixa oportunidades para trás.</span>
                </p>
            </div>
        </section>
    );
}
