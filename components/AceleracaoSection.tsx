"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

    // Auto-play
    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % cards.length);
    };

    useEffect(() => {
        const timer = setInterval(() => handleNext(), 5000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <section className="relative w-full text-white py-24 overflow-hidden">

            {/* Background */}
            <Image
                src="/sectionAceleracao.png"
                alt="Background"
                fill
                className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">

                {/* TITLE */}
                <h2 className="text-center font-['AmsiPro'] font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight">
                    Conheça a <br />
                    <span className="text-laranja-intenso">ACELERAÇÃO COMERCIAL</span>
                </h2>

                <p className="text-center mt-4 text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto">
                    Acelere suas vendas com um sistema que integra CRM, anúncios,
                    e-mails e jornada do cliente para gerar{" "}
                    <span className="text-laranja-intenso">receita previsível.</span>
                </p>

                {/* SLIDER CONTAINER */}
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
                                bg-[#f3f0eb]
                                text-black
                                rounded-xl
                                shadow-xl
                                px-14 py-14
                                max-w-[820px]
                                w-full
                                text-center
                            "
                        >
                            <h3 className="text-3xl font-black uppercase mb-6">
                                {cards[index].title}
                            </h3>

                            {cards[index].text.map((t, i) => (
                                <p
                                    key={i}
                                    className="text-[17px] text-zinc-800 leading-relaxed mb-3"
                                >
                                    {t}
                                </p>
                            ))}

                            {/* BUTTON LARANJA QUE SOBREPÕE O CARD */}
                            <button
                                className="
                                    absolute left-1/2 -translate-x-1/2 
                                    bottom-[-28px]
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

                {/* --- SLIDER BAR EXACTLY LIKE DESIGN --- */}
                <div className="relative w-full max-w-[1100px] mx-auto mt-20 flex items-center">

                    {/* Linha esquerda */}
                    <div className="flex-1 h-[7px] bg-[#ff7700] rounded-full" />

                    {/* SETA LONGA, FINA, IDENTICA AO DESIGN */}
                    <button
                        onClick={handleNext}
                        className="
            ml-2
            mr-2
            relative
            h-[20px]
            px-6
            flex items-center justify-center 
            rounded-full
            border-[3px]
            border-white
            bg-transparent
        "
                        style={{
                            minWidth: "150px",     // largura longa como no design
                        }}
                    >
                        {/* linha branca interna */}
                        <span
                            className="
                absolute left-6 right-10 top-1/2 
                -translate-y-1/2 
                h-[4px] 
                bg-white 
                rounded-full
            "
                        />

                        {/* flecha branca estilizada */}
                        <span className="absolute right-6 text-white">
                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                <path
                                    d="M0 10 H30"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M25 5 L32 10 L25 15"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>

                    {/* Linha direita */}
                    <div className="flex-1 h-[7px] bg-[#ff7700] rounded-full" />

                </div>

                {/* FINAL PHRASE */}
                <p className="mt-10 text-center text-xl italic text-white/90">
                    Jornada mapeada, conexões certas e pós-lead{" "}
                    <span className="text-laranja-intenso">que não deixa oportunidades para trás.</span>
                </p>

            </div>
        </section>
    );
}
