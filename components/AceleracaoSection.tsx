"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AceleracaoSection() {
    const cards = [
        // 1) DIAGNÓSTICO E IMERSÃO
        {
            title: "DIAGNÓSTICO E IMERSÃO",
            text: [
                `
                <span class="text-[#858585]">
                Antes de pensar em anúncios, posts ou campanhas,
                </span>
                <span class="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                mergulhamos no seu<br />
                mercado, no comportamento do seu público e nos motivos reais que<br />
                levam alguém a escolher (ou não escolher) a sua empresa.
                </span>
                `,
                `
                Em vez de olhar só para “personas” genéricas ou funis teóricos, ele mostra
                <span class="font-bold text-[#5c5c5c]">
                &nbsp;como seus<br />
                clientes de fato descobrem, comparam e decidem comprar e por quê fazem isso.
                </span>
                `
            ],
            button: "TRANSFORMAMOS INFORMAÇÃO EM DIREÇÃO",
        },

        // 2) CONTEXTO CERTO, NO MOMENTO CERTO
        {
            title: "CONTEXTO CERTO, NO MOMENTO CERTO",
            text: [
                `
                <span class="text-[#858585]">
                Em vez de deixar seu time “adivinhando” o que aconteceu antes,<br />
                criamos um sistema em que todos recebem o contexto útil no momento<br />
                certo mostrando como
                </span>
                <span class="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                isso acelera conversas, reduz retrabalho e evita<br />
                que oportunidades escapem por falta de informação.
                </span>
                `
            ],
            button: "TIME COMERCIAL INTEGRADO COM O MARKETING",
        },

        // 3) OPERAÇÃO QUE APRENDE ENQUANTO RODA
        {
            title: "OPERAÇÃO QUE APRENDE ENQUANTO RODA",
            text: [
                `
                <span class="text-[#858585]">
                No lugar de uma operação no piloto automático, você passa a ter uma<br />
                máquina que lê o comportamento do cliente, corrige o curso em tempo<br />
                real e
                </span>
                <span class="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                aumenta a previsibilidade de receita sem esforço extra.
                </span>
                `
            ],
            button: "ANALISAMOS COMO SEUS LEADS SE COMPORTAM",
        },

        // 4) FLUXO QUE EVOLUI O LEAD ATÉ O “SIM”
        {
            title: "FLUXO QUE EVOLUI O LEAD ATÉ O “SIM”",
            text: [
                `
                <span class="text-[#858585]">
                Em vez de mensagens robóticas, desenhamos um fluxo natural, humano<br />
                e progressivo, que
                </span>
                <span class="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                acompanha o lead no ritmo certo e cria um caminho<br />
                sem fricção até o “sim”.
                </span>
                `
            ],
            button: "ESCALAMOS O QUE DÁ RESULTADO",
        },

        // 5) ATENÇÃO!
        {
            title: "ATENÇÃO!",
            text: [
                `
                <span class="text-[#858585]">
                Se você já atrai leads, tem um time comercial ativo e ainda sente que os<br />
                resultados não acompanham o esforço,
                </span>
                <span class="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                solicite um diagnóstico com a <br /> nossa equipe Analista de Inteligência de Mercado e marketing.
                </span>
                `,
                `
                <span class="text-[#858585]">
                No diagnóstico, analisamos seu marketing, seu processo comercial e o<br />
                comportamento dos seus leads
                </span>
                <span class="font-bold bg-[linear-gradient(135deg,#ff7700,#ff4200,#f33c00)] bg-clip-text text-transparent">
                para identificar exatamente o que <br /> impede você de vender mais.
                </span>
                `
            ],
            button: "ESCALAMOS O QUE DÁ RESULTADO",
        },
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
        }, 10000); // a cada 10s
        return () => clearInterval(timer);
    }, [cards.length]);

    return (
        <section className="relative w-full text-white overflow-hidden bg-[url('/sectionAceleracao.png')] bg-cover bg-center bg-no-repeat">
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
                                absolute top-0
                                rounded-2xl 
                                shadow-xl 
                                px-12 py-8 
                                max-w-[820px] 
                                w-full
                                min-h-[250px]
                                text-center
                                bg-[linear-gradient(90deg,#ede2d5,#ffffff,#ede2d5)]
                                flex flex-col justify-center
                            "
                        >
                            <h3 className="text-3xl font-black uppercase mb-6 text-black">
                                {cards[index].title}
                            </h3>

                            {cards[index].text.map((t, i) => (
                                <p
                                    key={i}
                                    className="text-[17px] text-[#5c5c5c] leading-relaxed mb-4"
                                    dangerouslySetInnerHTML={{ __html: t }}
                                />
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

                {/* BARRA + SETA (seu código original) */}
                <div className="relative w-full max-w-[1200px] mx-auto mt-24 flex items-center">
                    <div className="flex-3 h-1 bg-laranja-intenso rounded-full" />
                    <button
                        onClick={nextCard}
                        className="
                            mx-4 relative h-8 px-10
                            flex items-center justify-center
                            border-[3px] border-white rounded-full
                            bg-transparent min-w-[130px]
                            cursor-pointer  
                            hover:bg-white/10
                            transition-all duration-300 group
                        "
                        aria-label="Próximo card"
                    >
                        <span className="absolute left-8 right-8 h-1 bg-white" />
                        <ArrowRight
                            className="absolute right-6 w-8 h-8 text-white transition-transform group-hover:translate-x-1"
                            strokeWidth={3}
                        />
                    </button>
                    <div className="flex-1 h-1 bg-laranja-intenso rounded-full" />
                </div>

                {/* FRASE FINAL */}
                <p className="font-['AmsiPro-Italic'] mt-20 mb-3 text-center text-2xl sm:text-3xl lg:text-4xl text-white/90">
                    Jornada mapeada, conexões certas e pós-lead <br />
                    que não deixa oportunidades para trás.
                </p>
            </div>
        </section>
    );
}
