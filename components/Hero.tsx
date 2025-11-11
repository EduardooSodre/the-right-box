"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import BackgroundEffects from "./BackgroundEffects";

export default function Hero() {
    return (
        <section className="relative h-screen bg-black text-white overflow-hidden">
            <BackgroundEffects />

            <div className="container mx-auto px-12 lg:px-16 h-full relative z-10 flex items-center pt-28">
                <div className="grid lg:grid-cols-[1fr_480px] gap-16 w-full items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-6 max-w-3xl">
                        {/* Main headline */}
                        <div className="space-y-3">
                            <h1 className="font-['AmsiPro'] font-light text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight italic text-white/90 ">
                                Integramos marca, tráfego e time comercial em um sistema único para transformar interesse em faturamento previsível.
                            </h1>
                        </div>

                        {/* Orange highlight text */}
                        <p className="font-['AmsiPro'] font-bold text-xl md:text-2xl text-laranja-intenso leading-tight">
                            Sem achismo, sem ruído, sem desperdício.
                        </p>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-md space-y-4">
                            {/* Form Title Outside */}
                            <div className="flex justify-center items-center text-left">
                                <h2 className="text-2xl md:text-3xl font-['AmsiPro'] font-black text-white leading-tight">
                                    Quero <span className="text-laranja-intenso">performar minhas vendas</span>,<br />
                                    <span className="flex justify-center items-center font-normal text-lg md:text-xl">não apenas anunciar</span>
                                </h2>
                            </div>

                            {/* Form Card - Square borders */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 shadow-2xl">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom tagline */}
            <div className="absolute bottom-8 left-12 lg:left-16 z-10 flex items-center gap-4">
                <div className="w-10 h-10 relative shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="text-xl md:text-2xl font-['AmsiPro'] font-light italic text-white/90">
                    Você não precisa <span className="font-normal">&apos;pensar fora da caixa&apos;</span>. Precisa da{" "}
                    <span className="text-laranja-chama font-bold not-italic">Caixa Certa</span>
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <button
                    onClick={() => {
                        const nextSection = document.getElementById('next-section');
                        if (nextSection) {
                            nextSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="flex flex-col items-center gap-2 text-laranja-intenso/70 hover:text-laranja-intenso transition-colors cursor-pointer"
                    aria-label="Scroll para próxima seção"
                >
                    <svg
                        className="w-6 h-6"
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
            </div>
        </section>
    );
}
