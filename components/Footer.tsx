import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col space-y-4">
                        <div className="w-24 h-24 relative">
                            <Image
                                src="/logos/LOGO-1A.png"
                                alt="The Right Box Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                            Identificamos e corrigimos os gargalos que impedem suas vendas
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-['AmsiPro'] font-bold text-base uppercase text-laranja-intenso tracking-wide">
                            CONTATO
                        </h4>
                        <div className="space-y-2">
                            <Link
                                href="mailto:contato@therightbox.com.br"
                                className="block text-xs text-zinc-300 hover:text-laranja-intenso transition-colors"
                            >
                                EMAIL
                            </Link>
                        </div>
                    </div>

                    {/* Social Media - Instagram */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-['AmsiPro'] font-bold text-base uppercase text-white tracking-wide">
                            REDES SOCIAIS
                        </h4>
                        <div className="space-y-2">
                            <a
                                href="https://instagram.com/therightbox"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-xs text-zinc-300 hover:text-laranja-intenso transition-colors"
                            >
                                @THERIGHTBOX
                            </a>
                        </div>
                    </div>

                    {/* Empty column for spacing */}
                    <div></div>
                </div>

                {/* Footer bottom - Credits and Copyright */}
                <div className="pt-6 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <p className="text-xs text-zinc-500 text-center md:text-left">
                            © {new Date().getFullYear()} The Right Box. Todos os direitos reservados.
                        </p>
                        <p className="text-xs text-zinc-500 text-center md:text-right">
                            Desenvolvido por{" "}
                            <Link
                                href="https://dev-eduardo-phi.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-laranja-intenso hover:text-laranja-chama transition-colors font-semibold"
                            >
                                Eduardo Sodré
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
