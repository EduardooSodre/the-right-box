"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import BackgroundEffects from "./BackgroundEffects";
import type { HeroContent } from "@/types/contentful";

interface HeroProps {
    content?: HeroContent;
}

export default function Hero({ content }: HeroProps) {
    // Fallback content if Contentful is not yet configured
    const headline = content?.headline || "Integramos marca, tráfego e operação comercial em um único sistema para transformar interesse em receita previsível — sem achismo, sem ruído, sem desperdício.";
    const subheadline = content?.subheadline || "";
    const cta = content?.cta || "Quero performar minhas vendas,, não apenas anunciar";

    return (
        <section className="relative h-screen bg-black text-white overflow-hidden">
            <BackgroundEffects />

            <div className="container mx-auto px-6 md:px-12 lg:px-16 h-full relative z-10 flex items-center pt-32 pb-20">
                <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 w-full items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-6 max-w-3xl">
                        {/* Main headline */}
                        <div className="space-y-4">
                            <h1 className="font-['AmsiPro'] font-light text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight text-white/95">
                                {headline}
                            </h1>
                            {subheadline && (
                                <p className="font-['AmsiPro'] font-bold text-lg md:text-xl lg:text-2xl text-laranja-intenso leading-tight">
                                    {subheadline}
                                </p>
                            )}
                        </div>

                        {/* H1 Tagline */}
                        <div className="pt-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-['AmsiPro'] font-light italic text-white/90 leading-tight">
                                Você não precisa <span className="font-normal">&apos;pensar fora da caixa&apos;</span>.<br />
                                Precisa da <span className="text-laranja-chama font-bold not-italic">Caixa Certa</span>.
                            </h2>
                        </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-sm space-y-3">
                            {/* Form Title Outside */}
                            <div className="flex justify-center items-center text-center lg:text-left">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-['AmsiPro'] font-bold leading-tight">
                                    <span className="text-white">Quero</span> <span className="text-laranja-intenso opacity-50">performar minhas vendas</span><span className="text-white">,</span><br />
                                    <span className="flex justify-center items-center text-center  text-white">{cta.split(",")[1]?.trim() || "não apenas anunciar"}</span>
                                </h3>
                            </div>

                            {/* Form Card - Square borders */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-none p-4 shadow-2xl">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom tagline - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex absolute bottom-8 left-12 lg:left-16 z-10 items-center gap-4">
                <div className="w-10 h-10 relative shrink-0">
                    <Image
                        src="/logos/LOGO-1A.png"
                        alt="The Right Box Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="text-base md:text-lg font-['AmsiPro'] font-light text-white/80">
                    Identificamos e corrigimos os gargalos que impedem suas vendas
                </p>
            </div>
        </section>
    );
}
