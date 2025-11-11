import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white border-t border-white/10">
            {/* Background luminous effect */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-laranja-intenso/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-laranja-chama/20 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col space-y-6">
                        <div className="w-32 h-32 relative">
                            <Image
                                src="/logos/LOGO-1A.png"
                                alt="The Right Box Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                            Identificamos e corrigimos os gargalos que impedem suas vendas
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-['AmsiPro'] font-bold text-lg uppercase text-laranja-intenso tracking-wide">
                            CONTATO
                        </h4>
                        <div className="space-y-3">
                            <Link 
                                href="mailto:contato@therightbox.com.br" 
                                className="block text-sm text-zinc-300 hover:text-laranja-intenso transition-colors"
                            >
                                EMAIL
                            </Link>
                        </div>
                    </div>

                    {/* Social Media - Instagram repeated 3x */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-['AmsiPro'] font-bold text-lg uppercase text-white tracking-wide opacity-0">
                            SOCIAL
                        </h4>
                        <div className="space-y-3">
                            <a 
                                href="https://instagram.com/therightbox" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-sm text-zinc-300 hover:text-laranja-intenso transition-colors"
                            >
                                @THERIGHTBOX
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-['AmsiPro'] font-bold text-lg uppercase text-white tracking-wide opacity-0">
                            SOCIAL
                        </h4>
                        <div className="space-y-3">
                            <a 
                                href="https://instagram.com/therightbox" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-sm text-zinc-300 hover:text-laranja-intenso transition-colors"
                            >
                                @THERIGHTBOX
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Instagram link at bottom */}
                <div className="border-t border-white/10 pt-8">
                    <a 
                        href="https://instagram.com/therightbox" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-zinc-300 hover:text-laranja-intenso transition-colors"
                    >
                        @THERIGHTBOX
                    </a>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-xs text-zinc-500 text-center">
                        © {new Date().getFullYear()} The Right Box. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
