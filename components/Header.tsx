import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
            <nav className="container mx-auto px-12 lg:px-16  flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80">
                    <div className="w-24 h-24 relative shrink-0">
                        <Image
                            src="/logo.png"
                            alt="The Right Box Logo"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-['AmsiPro'] font-black text-4xl italic leading-none tracking-tight">
                            HOME
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-laranja-intenso font-['AmsiPro'] font-bold text-base uppercase tracking-wide hover:text-laranja-chama transition-colors"
                    >
                        HOME
                    </Link>
                    <Link
                        href="/sobre-nos"
                        className="text-white/70 font-['AmsiPro'] font-semibold text-base uppercase tracking-wide hover:text-white transition-colors"
                    >
                        SOBRE NÓS
                    </Link>
                    <Link
                        href="/aceleracao-comercial"
                        className="text-white/70 font-['AmsiPro'] font-semibold text-base uppercase tracking-wide hover:text-white transition-colors"
                    >
                        ACELERAÇÃO COMERCIAL
                    </Link>
                    <Link
                        href="/servicos"
                        className="text-white/70 font-['AmsiPro'] font-semibold text-base uppercase tracking-wide hover:text-white transition-colors"
                    >
                        SERVIÇOS
                    </Link>
                    <Link
                        href="/blog"
                        className="text-white/70 font-['AmsiPro'] font-semibold text-base uppercase tracking-wide hover:text-white transition-colors"
                    >
                        BLOG
                    </Link>
                </div>
            </nav>
        </header>
    );
}
