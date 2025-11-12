import Image from "next/image";
import Link from "next/link";
import type { FooterContent, ContactContent } from "@/types/contentful";

interface FooterProps {
    content?: FooterContent;
    contactContent?: ContactContent;
}

export default function Footer({ content, contactContent }: FooterProps) {
    const tagline = content?.tagline || "Identificamos e corrigimos os gargalos que impedem suas vendas";
    const contactTitle = content?.contactTitle || "CONTATO";
    const socialTitle = content?.socialTitle || "REDES SOCIAIS";
    const copyright = content?.copyright || "The Right Box. Todos os direitos reservados.";
    const developedBy = content?.developedBy || "Eduardo Sodré";
    const developedByUrl = content?.developedByUrl || "https://dev-eduardo-phi.vercel.app/";
    
    const email = contactContent?.email || "contato@therightbox.com.br";
    const instagram = contactContent?.instagram || "https://instagram.com/therightbox";

    return (
        <footer className="relative bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-10 md:py-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col space-y-3 sm:space-y-4 items-center sm:items-start text-center sm:text-left">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                            <Image
                                src="/logos/LOGO-1A.png"
                                alt="The Right Box Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                            {tagline}
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col space-y-2 sm:space-y-3 items-center sm:items-start text-center sm:text-left">
                        <h4 className="font-['AmsiPro'] font-bold text-sm sm:text-base uppercase text-laranja-intenso tracking-wide">
                            {contactTitle}
                        </h4>
                        <div className="space-y-2">
                            <Link
                                href={`mailto:${email}`}
                                className="block text-xs text-zinc-300 hover:text-laranja-intenso transition-colors"
                            >
                                EMAIL
                            </Link>
                        </div>
                    </div>

                    {/* Social Media - Instagram */}
                    <div className="flex flex-col space-y-2 sm:space-y-3 items-center sm:items-start text-center sm:text-left">
                        <h4 className="font-['AmsiPro'] font-bold text-sm sm:text-base uppercase text-white tracking-wide">
                            {socialTitle}
                        </h4>
                        <div className="space-y-2">
                            <a
                                href={instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-xs text-zinc-300 hover:text-laranja-intenso transition-colors"
                            >
                                @THERIGHTBOX
                            </a>
                        </div>
                    </div>

                    {/* Empty column for spacing - hide on mobile */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Footer bottom - Credits and Copyright */}
                <div className="pt-4 sm:pt-6 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3">
                        <p className="text-xs text-zinc-500 text-center md:text-left">
                            © {new Date().getFullYear()} {copyright}
                        </p>
                        <p className="text-xs text-zinc-500 text-center md:text-right">
                            Desenvolvido por{" "}
                            <Link
                                href={developedByUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-laranja-intenso hover:text-laranja-chama transition-colors font-semibold"
                            >
                                {developedBy}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
