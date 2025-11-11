"use client";
import React from 'react';

export default function NextSection() {
    return (
        <section id="next-section" className="relative min-h-screen bg-white text-zinc-900 flex flex-col items-center justify-center py-12 md:py-16 px-6 md:px-12">
            {/* Gargalos Section - Top */}
            <div className="w-full max-w-7xl mb-12">
                <h2 className="text-center font-['AmsiPro'] font-black text-2xl md:text-3xl lg:text-4xl text-laranja-intenso uppercase tracking-tight mb-8">
                    Identificamos e corrigimos os gargalos que impedem suas vendas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { title: "Estratégia & Oferta", desc: "Clarificamos posicionamento e encaixe de oferta por segmento e jornada para aumentar a relevância por toque." },
                        { title: "Qualificação & Prioridade", desc: "Definimos ICP, critérios de qualificação e score de intenção para priorizar quem está pronto para comprar." },
                        { title: "Tempo & Cadência (pós-lead)", desc: "Orquestramos cadências multicanal com mensagens personalizadas por estágio e comportamento." },
                        { title: "Operação Comercial", desc: "Desenhamos etapas claras, campos essenciais e rotinas de higiene de dados para decisões confiáveis." },
                        { title: "Integrações e Dados", desc: "Integramos site, formulários, email/WhatsApp, calendário e CRM para manter contexto contínuo." },
                        { title: "Proposta, preço e risco", desc: "Modelos modulares, envio ágil e próximo passo claro; pilotos quando faz sentido para reduzir risco." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-laranja-intenso text-white p-4 rounded-sm flex flex-col items-start justify-start">
                            <h3 className="font-['AmsiPro'] font-black text-sm uppercase mb-2 leading-tight">{item.title}</h3>
                            <p className="text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Card - Aceleração Comercial */}
            <div className="w-full max-w-5xl bg-zinc-900 rounded-3xl shadow-2xl px-8 md:px-14 py-12 md:py-16 flex flex-col items-center text-white">
                <div className="w-full text-center space-y-6">
                    <h2 className="font-['AmsiPro'] font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                        ACELERAÇÃO COMERCIAL
                    </h2>
                    <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed italic max-w-3xl mx-auto">
                        Uma engenharia operacional que integra dados, campanhas e CRM para formar um sistema de vendas ativo, inteligente e sustentável.
                    </p>
                    
                    <h3 className="font-['AmsiPro'] font-bold text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-4 uppercase tracking-wide">
                        A SOLUÇÃO DO MAIOR GARGALO DAS EMPRESAS QUE NÃO VENDEM
                    </h3>
                    
                    <div className="text-left mx-auto max-w-3xl text-sm md:text-base text-zinc-100 space-y-4 mt-6">
                        {[
                            { num: "01", title: "Descobrir", desc: "Mapeamos a jornada de compra real e as intenções que movem seu cliente." },
                            { num: "02", title: "Orquestrar", desc: "Conectamos atração e relacionamento em um único fluxo, alinhado ao estágio de decisão." },
                            { num: "03", title: "Sincronizar", desc: "Seu time recebe contexto útil no momento certo; nada se perde entre marketing, CRM e agenda." },
                            { num: "04", title: "Conduzir", desc: "Mensagens e contatos evoluem o lead de forma natural até o \"sim\", sem atrito desnecessário." },
                            { num: "05", title: "Aprender", desc: "Operação melhora enquanto roda: leitura de sinais, ajustes leves e previsibilidade de receita." },
                            { num: "06", title: "Escalar", desc: "Replicamos o que funciona, ampliamos canais e volume com governança." }
                        ].map((step, idx) => (
                            <div key={idx} className="leading-relaxed">
                                <span className="font-bold text-laranja-intenso italic">{step.num} — {step.title}</span><br />
                                <span className="text-zinc-300">{step.desc}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm md:text-base text-zinc-400 italic mt-8 leading-relaxed max-w-2xl mx-auto">
                        Uma operação única: jornada mapeada, conexões certas e pós-lead que não deixa oportunidades para trás.
                    </p>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="w-full max-w-7xl text-center mt-16">
                <h4 className="font-['AmsiPro'] font-black text-3xl md:text-4xl text-laranja-intenso uppercase mb-6 tracking-tight">Soluções</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-base md:text-lg font-bold text-zinc-900">
                    {[
                        "Gestão de mídia paga",
                        "Criativos para anúncios",
                        "Criação de Site e Landing Page de Conversão",
                        "Estratégia para anúncio",
                        "Identidade Visual",
                        "Campanhas de e-mail",
                        "Campanhas de e-mail",
                        "Captação de Conteúdo"
                    ].map((solution, idx) => (
                        <div key={idx} className="bg-white border-2 border-zinc-200 p-4 rounded-sm hover:border-laranja-intenso transition-all">
                            {solution}
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-12 flex flex-col items-center gap-2 text-laranja-intenso/70 hover:text-laranja-intenso transition-colors cursor-pointer animate-bounce"
                aria-label="Voltar ao topo"
            >
                <svg
                    className="w-6 h-6 rotate-180"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </section>
    );
}
