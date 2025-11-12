"use client";
import React from 'react';
import ContactForm from './ContactForm';

export default function NextSection() {
    return (
        <section id="next-section" className="relative min-h-screen bg-zinc-50 text-zinc-900 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            {/* Gargalos Section - Top */}
            <div className="w-full max-w-7xl mb-12 md:mb-16">
                <h2 className="text-center font-['AmsiPro'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-900 mb-3 md:mb-4">
                    Identificamos e corrigimos os gargalos que impedem suas vendas
                </h2>
                <p className="text-center text-base md:text-lg text-zinc-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                    Do anúncio ao CRM — para que cada interação avance rumo ao &quot;sim&quot;.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
                    {[
                        { title: "Estratégia & Oferta", desc: "Clarificamos posicionamento e encaixe de oferta por segmento e jornada." },
                        { title: "Qualificação & Prioridade", desc: "Definimos ICP, critérios de qualificação e score de intenção." },
                        { title: "Tempo & Cadência", desc: "Orquestramos cadências multicanal com mensagens personalizadas." },
                        { title: "Operação Comercial", desc: "Desenhamos etapas claras e rotinas de higiene de dados." },
                        { title: "Integrações e Dados", desc: "Integramos site, formulários, email/WhatsApp, calendário e CRM." },
                        { title: "Proposta, preço e risco", desc: "Modelos modulares, envio ágil e próximo passo claro." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border-2 border-laranja-intenso/20 hover:border-laranja-intenso transition-all duration-300 p-4 md:p-5 rounded-sm flex flex-col items-start justify-start group">
                            <h3 className="font-['AmsiPro'] font-bold text-xs sm:text-sm uppercase mb-2 leading-tight text-laranja-intenso group-hover:text-laranja-chama transition-colors">{item.title}</h3>
                            <p className="text-xs leading-relaxed text-zinc-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Card - Aceleração Comercial */}
            <div className="w-full max-w-6xl bg-zinc-900 rounded-sm shadow-xl px-6 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-12 md:py-14 lg:py-20 flex flex-col items-center text-white border border-zinc-800">
                <div className="w-full text-center space-y-6 md:space-y-8">
                    <h2 className="font-['AmsiPro'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight">
                        ACELERAÇÃO COMERCIAL
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto px-4">
                        Uma engenharia operacional que integra dados, campanhas e CRM para formar um sistema de vendas ativo, inteligente e sustentável.
                    </p>

                    <h3 className="font-['AmsiPro'] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-8 md:mt-10 mb-4 md:mb-6 leading-tight px-4">
                        A SOLUÇÃO DO MAIOR GARGALO DAS EMPRESAS QUE NÃO VENDEM
                    </h3>

                    <div className="text-left mx-auto max-w-4xl text-sm sm:text-base md:text-lg text-zinc-100 space-y-4 md:space-y-6 mt-6 md:mt-8">
                        {[
                            { num: "01", title: "Descobrir", desc: "Mapeamos a jornada de compra real e as intenções que movem seu cliente." },
                            { num: "02", title: "Orquestrar", desc: "Conectamos atração e relacionamento em um único fluxo, alinhado ao estágio de decisão." },
                            { num: "03", title: "Sincronizar", desc: "Seu time recebe contexto útil no momento certo; nada se perde entre marketing, CRM e agenda." },
                            { num: "04", title: "Conduzir", desc: "Mensagens e contatos evoluem o lead de forma natural até o &quot;sim&quot;, sem atrito desnecessário." },
                            { num: "05", title: "Aprender", desc: "Operação melhora enquanto roda: leitura de sinais, ajustes leves e previsibilidade de receita." },
                            { num: "06", title: "Escalar", desc: "Replicamos o que funciona, ampliamos canais e volume com governança." }
                        ].map((step, idx) => (
                            <div key={idx} className="leading-relaxed pb-3 md:pb-4 border-b border-zinc-800 last:border-0">
                                <span className="font-semibold text-laranja-intenso text-base md:text-lg">{step.num} — {step.title}</span><br />
                                <span className="text-zinc-400 text-sm md:text-base">{step.desc}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-zinc-400 mt-8 md:mt-10 leading-relaxed max-w-3xl mx-auto px-4">
                        Uma operação única: jornada mapeada, conexões certas e pós-lead que não deixa oportunidades para trás.
                    </p>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="w-full max-w-7xl text-center mt-12 md:mt-16 lg:mt-20">
                <h4 className="font-['AmsiPro'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-900 mb-3 md:mb-4">Soluções</h4>
                <p className="text-base md:text-lg text-zinc-600 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                    Serviços integrados para transformar sua estratégia comercial em resultados concretos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-sm sm:text-base md:text-lg font-semibold text-zinc-900">
                    {[
                        "Gestão de mídia paga",
                        "Criativos para anúncios",
                        "Landing Pages de Alta Conversão",
                        "Estratégia para anúncio",
                        "Identidade Visual",
                        "Campanhas de e-mail",
                        "CRM & Automação",
                        "Captação de Conteúdo"
                    ].map((solution, idx) => (
                        <div key={idx} className="bg-white border border-zinc-200 hover:border-laranja-intenso hover:shadow-md transition-all duration-300 p-4 md:p-6 rounded-sm group">
                            <p className="group-hover:text-laranja-intenso transition-colors">{solution}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section - Final Contact */}
            <div className="w-full max-w-7xl mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_380px] xl:grid-cols-[1.5fr_400px] gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Text */}
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <h3 className="font-['AmsiPro'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                            Dê o primeiro passo para<br className="hidden sm:block" />
                            alinhar <span className="text-laranja-intenso">marketing e vendas.</span>
                        </h3>
                    </div>

                    {/* Right - Form */}
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
