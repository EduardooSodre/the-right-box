"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
        }, 8000); // Muda a cada 8 segundos
        return () => clearInterval(timer);
    }, [cards.length]);

    return (
        <section className="relative w-full text-white  overflow-hidden bg-[url('/sectionAceleracao.png')] bg-cover bg-center bg-no-repeat">

            <div className="relative pt-50 max-w-5xl mx-auto px-6">

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
                <div className="relative mt-20 flex justify-center min-h-[300px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            initial={{
                                x: direction > 0 ? 350 : -350,
                                opacity: 0,
                                scale: 0.95,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                            exit={{
                                x: direction < 0 ? 350 : -350,
                                opacity: 0,
                                scale: 0.95,
                                transition: {
                                    duration: 1.0,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                            className="
                                absolute
                                top-0
                                rounded-2xl 
                                shadow-xl 
                                px-12 py-14 
                                max-w-[820px] 
                                w-full
                                min-h-[250px]
                                text-center
                                bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                                flex
                                flex-col
                                justify-center
                            "
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
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6">
                                <button
                                    className="
                                        bg-laranja-intenso 
                                        text-white 
                                        font-black 
                                        text-sm 
                                        px-12 py-3 
                                        rounded-md 
                                        uppercase 
                                        tracking-wide
                                        whitespace-nowrap
                                    "
                                >
                                    {cards[index].button}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* BARRA DE NAVEGAÇÃO */}
                <div className="relative w-full max-w-[1200px] mx-auto mt-24 flex items-center">

                    {/* Linha esquerda */}
                    <div className="flex-3 h-1 bg-laranja-intenso rounded-full" />

                    {/* SETA LONGA, FINA, PUXADA À DIREITA */}
                    <button
                        onClick={nextCard}
                        className="
                            mx-4
                            relative
                            h-8
                            px-10
                            flex items-center 
                            justify-center
                            border-[3px]
                            border-white
                            rounded-full
                            bg-transparent
                            min-w-[130px]
                            cursor-pointer  
                            hover:bg-white/10
                            transition-all
                            duration-300
                            group
                        "
                        aria-label="Próximo card"
                    >
                        {/* Linha horizontal */}
                        <span className="absolute left-8 right-8 h-1 bg-white" />

                        {/* Seta */}
                        <ArrowRight
                            className="absolute right-6 w-8 h-8 text-white transition-transform group-hover:translate-x-1"
                            strokeWidth={3}
                        />
                    </button>

                    {/* Linha direita */}
                    <div className="flex-1 h-1 bg-laranja-intenso rounded-full" />
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
