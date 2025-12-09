import { client } from "@/lib/contentful";
import type { Asset } from "contentful";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchFooterContent } from "@/lib/fetchFooterContent";
import { fetchContactContent } from "@/lib/fetchContactContent";
import { getCategoryByTag } from "@/lib/blogCategories";

interface BlogPostFields {
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: Asset;
    publishedDate: string;
    author?: string;
    tags?: string[];
}

export const revalidate = 60;

export const metadata = {
    title: "Blog | The Right Box - Insights sobre Vendas e Marketing",
    description: "Artigos, dicas e estratégias sobre aceleração comercial, CRM, marketing digital e vendas para PMEs.",
    openGraph: {
        title: "Blog | The Right Box",
        description: "Insights sobre vendas, marketing e aceleração comercial",
        type: "website",
    },
};

interface BlogPageProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const postsPerPage = 12; // 4 linhas × 3 colunas = 12 posts por página

    // Buscar todos os posts para contar total
    const allEntries = await client.getEntries({
        content_type: "blogPost",
        order: ["-sys.createdAt"],
        limit: 1000,
    });

    const totalPosts = allEntries.total;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Buscar posts da página atual
    const entries = await client.getEntries({
        content_type: "blogPost",
        order: ["-sys.createdAt"],
        limit: postsPerPage,
        skip: (currentPage - 1) * postsPerPage,
    });

    const posts = entries.items.map((item) => {
        const fields = item.fields as unknown as BlogPostFields;
        const imageUrl = fields.featuredImage?.fields?.file?.url;

        return {
            title: fields.title,
            slug: fields.slug,
            excerpt: fields.excerpt,
            image: imageUrl ? `https:${imageUrl}` : "/images/blog.png",
            publishedDate: fields.publishedDate,
            author: fields.author,
            tags: fields.tags,
        };
    });

    // Buscar footer content
    let footerContent, contactContent;
    try {
        [footerContent, contactContent] = await Promise.all([
            fetchFooterContent(),
            fetchContactContent(),
        ]);
    } catch (error) {
        console.error("Error fetching footer content:", error);
    }

    return (
        <>
            <Header />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-linear-to-t from-zinc-900 via-zinc-800 to-black text-white py-20 md:py-32">
                    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                        <div className="max-w-4xl">
                            <h1 className="font-[AmsiPro] text-5xl md:text-6xl lg:text-7xl font-black lowercase mb-6 leading-tight">
                                blog
                            </h1>
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                                Insights, estratégias e tendências sobre aceleração comercial, vendas e marketing digital.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Posts Grid */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                        {posts.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-xl text-zinc-500 mb-8">
                                    Nenhum post publicado ainda. Em breve teremos novidades!
                                </p>
                                <Link
                                    href="/"
                                    className="inline-block px-8 py-4 bg-laranja-intenso text-white font-bold rounded-full hover:bg-orange-600 transition-colors"
                                >
                                    Voltar para Home
                                </Link>
                            </div>
                        ) : (
                            <>
                                {/* Grid de Posts */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                                    {posts.map((post, index) => {
                                        const formattedDate = new Date(post.publishedDate).toLocaleDateString("pt-BR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        });

                                        // Obter categoria com cor
                                        const category = post.tags && post.tags.length > 0
                                            ? getCategoryByTag(post.tags[0])
                                            : { label: "Geral", color: "bg-laranja-intenso", textColor: "text-laranja-intenso" };

                                        return (
                                            <Link
                                                key={post.slug}
                                                href={`/blog/${post.slug}`}
                                                className="group block"
                                            >
                                                <article className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-laranja-intenso transition-all duration-300 hover:shadow-2xl hover:shadow-laranja-intenso/10 h-full flex flex-col">
                                                    {/* Imagem */}
                                                    <div className="relative w-full aspect-video overflow-hidden bg-zinc-100">
                                                        <Image
                                                            src={post.image}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                            priority={index < 3}
                                                        />

                                                        {/* Overlay com Badge Colorida */}
                                                        <div className="absolute top-4 left-4">
                                                            <span className={`px-3 py-1 ${category.color} text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg`}>
                                                                {category.label}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Conteúdo */}
                                                    <div className="p-6 flex-1 flex flex-col">
                                                        {/* Meta Info */}
                                                        <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                                                            <span className="flex items-center gap-1">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-4 w-4"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                {formattedDate}
                                                            </span>
                                                            {post.author && (
                                                                <span className="flex items-center gap-1">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-4 w-4"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                    {post.author}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Título */}
                                                        <h2 className="font-[AmsiPro] text-2xl md:text-3xl font-bold text-zinc-900 mb-3 leading-tight group-hover:text-laranja-intenso transition-colors line-clamp-2">
                                                            {post.title}
                                                        </h2>

                                                        {/* Excerpt */}
                                                        <p className="text-zinc-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                                                            {post.excerpt}
                                                        </p>

                                                        {/* Read More */}
                                                        <div className="flex items-center gap-2 text-laranja-intenso font-bold group-hover:gap-4 transition-all">
                                                            Ler mais
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-5 w-5"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Paginação */}
                                {totalPages > 1 && (
                                    <div className="mt-12 flex justify-center items-center gap-2">
                                        {/* Botão Anterior */}
                                        {currentPage > 1 ? (
                                            <Link
                                                href={`/blog?page=${currentPage - 1}`}
                                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-zinc-300 text-zinc-600 hover:border-laranja-intenso hover:text-laranja-intenso transition-all"
                                                aria-label="Página anterior"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                        ) : (
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 text-zinc-400 cursor-not-allowed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        )}

                                        {/* Números das páginas */}
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                                            const isActive = pageNum === currentPage;
                                            return (
                                                <Link
                                                    key={pageNum}
                                                    href={`/blog?page=${pageNum}`}
                                                    className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${isActive
                                                            ? "bg-laranja-intenso text-white shadow-lg"
                                                            : "bg-white border-2 border-zinc-300 text-zinc-600 hover:border-laranja-intenso hover:text-laranja-intenso"
                                                        }`}
                                                >
                                                    {pageNum}
                                                </Link>
                                            );
                                        })}

                                        {/* Botão Próximo */}
                                        {currentPage < totalPages ? (
                                            <Link
                                                href={`/blog?page=${currentPage + 1}`}
                                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-zinc-300 text-zinc-600 hover:border-laranja-intenso hover:text-laranja-intenso transition-all"
                                                aria-label="Próxima página"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                        ) : (
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 text-zinc-400 cursor-not-allowed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* CTA Final */}
                                <div className="mt-16 p-8 bg-linear-to-br from-zinc-900 to-black rounded-3xl text-white text-center">
                                    <h3 className="font-[AmsiPro] text-2xl md:text-3xl font-bold mb-4">
                                        Quer acelerar suas vendas?
                                    </h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        Agende uma conversa com nossos especialistas e descubra como podemos ajudar.
                                    </p>
                                    <Link
                                        href="/"
                                        className="inline-block px-8 py-4 bg-laranja-intenso text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-xl shadow-laranja-intenso/30 text-lg"
                                    >
                                        Falar com Especialista
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>

            <Footer content={footerContent} contactContent={contactContent} />
        </>
    );
}
