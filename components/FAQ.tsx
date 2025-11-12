"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
    keywords: string[];
}

const faqData: FAQItem[] = [
    {
        question: "Por que minha empresa gera leads mas não consegue vender?",
        answer: "Geralmente, o problema está no pós-lead: tempo de resposta lento, ausência de cadência, falta de contexto e desalinhamento entre marketing e comercial. A Aceleração Comercial da TRBOX resolve esses problemas com processos automatizados e comunicação personalizada, acelerando o ciclo de vendas.",
        keywords: ["por que meus leads não convertem", "problemas no funil de vendas", "como melhorar conversão de leads"]
    },
    {
        question: "A Aceleração Comercial é indicada para quais empresas?",
        answer: "Empresas B2B ou B2C que já investem em marketing e têm geração de leads, mas que enfrentam baixa conversão em vendas, funis sem ritmo ou equipe comercial sem estrutura/processo. Se você precisa escalar com eficiência, a Aceleração Comercial é para você.",
        keywords: ["solução para vender mais", "funil comercial desorganizado", "como estruturar equipe de vendas"]
    },
    {
        question: "Qual a diferença entre contratar uma agência de marketing e a The Right Box?",
        answer: "Enquanto a maioria das agências se limita a campanhas e criativos, a TRBOX atua como uma inteligência comercial completa: integramos estratégia, tráfego, CRM e vendas em um único sistema. A Aceleração Comercial é sobre resultado previsível, não apenas cliques ou curtidas.",
        keywords: ["agência de marketing ou consultoria comercial", "diferença entre agência e aceleração de vendas"]
    }
];

export default function FAQ() {
    return (
        <section
            className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="max-w-4xl mx-auto">
                    {/* Título da seção */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 sm:mb-10 md:mb-12"
                    >
                        <h2 className="font-['AmsiPro'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-900 mb-3 sm:mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
                            Tire suas dúvidas sobre a Aceleração Comercial
                        </p>
                    </motion.div>

                    {/* Accordion FAQ */}
                    <div className="bg-zinc-50 border border-zinc-200 rounded-sm p-4 sm:p-6 md:p-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <AccordionItem
                                        value={`item-${index}`}
                                        className="border-b border-zinc-200"
                                        itemScope
                                        itemProp="mainEntity"
                                        itemType="https://schema.org/Question"
                                    >
                                        <AccordionTrigger className="py-5 sm:py-6 text-left hover:text-laranja-intenso transition-colors hover:no-underline data-[state=open]:text-laranja-intenso">
                                            <h3
                                                itemProp="name"
                                                className="font-['AmsiPro'] font-bold text-base sm:text-lg md:text-xl text-zinc-900 group-hover:text-laranja-intenso transition-colors pr-4 text-left"
                                            >
                                                {item.question}
                                            </h3>
                                        </AccordionTrigger>
                                        <AccordionContent
                                            className="pb-5 sm:pb-6"
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <p
                                                itemProp="text"
                                                className="text-sm sm:text-base text-zinc-600 leading-relaxed"
                                            >
                                                {item.answer}
                                            </p>
                                            {/* SEO Keywords (hidden visually but readable by search engines) */}
                                            <meta itemProp="keywords" content={item.keywords.join(", ")} />
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
