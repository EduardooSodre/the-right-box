import { client } from "@/lib/contentful";
import type { Asset } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryByTag } from "@/lib/blogCategories";

interface BlogPostFields {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    featuredImage: Asset;
    publishedDate: string;
    author?: string;
    tags?: string[];
}

// Gerar páginas estáticas para todos os posts
export async function generateStaticParams() {
    const entries = await client.getEntries({
        content_type: "blogPost",
        limit: 100,
    });

    return entries.items.map((item) => ({
        slug: (item.fields as unknown as BlogPostFields).slug,
    }));
}

// Metadata dinâmica para SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const entries = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": slug,
        limit: 1,
    });

    if (entries.items.length === 0) {
        return {
            title: "Post não encontrado | The Right Box",
        };
    }

    const post = entries.items[0].fields as unknown as BlogPostFields;
    const imageUrl = post.featuredImage?.fields?.file?.url;

    return {
        title: `${post.title} | The Right Box Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedDate,
            authors: [post.author || "The Right Box"],
            images: imageUrl ? [`https:${imageUrl}`] : [],
        },
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const richTextOptions: any = {
    renderNode: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [BLOCKS.HEADING_2]: (_node: any, children: any) => (
            <h2 className="font-[AmsiPro] text-3xl md:text-4xl font-bold text-zinc-900 mt-12 mb-6 lowercase">
                {children}
            </h2>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [BLOCKS.HEADING_3]: (_node: any, children: any) => (
            <h3 className="font-[AmsiPro] text-2xl md:text-3xl font-bold text-zinc-900 mt-10 mb-4 lowercase">
                {children}
            </h3>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
            <p className="text-base md:text-lg leading-relaxed text-zinc-700 mb-6">
                {children}
            </p>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [BLOCKS.UL_LIST]: (_node: any, children: any) => (
            <ul className="list-disc list-inside space-y-3 mb-6 text-zinc-700">
                {children}
            </ul>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [BLOCKS.OL_LIST]: (_node: any, children: any) => (
            <ol className="list-decimal list-inside space-y-3 mb-6 text-zinc-700">
                {children}
            </ol>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
            <li className="text-base md:text-lg leading-relaxed ml-4">{children}</li>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [BLOCKS.QUOTE]: (_node: any, children: any) => (
            <blockquote className="border-l-4 border-laranja-intenso pl-6 py-4 my-8 italic text-zinc-600 bg-zinc-50 rounded-r-lg">
                {children}
            </blockquote>
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [INLINES.HYPERLINK]: (node: any, children: any) => (
            <a
                href={node.data.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="text-laranja-intenso hover:underline font-medium"
            >
                {children}
            </a>
        ),
    },
};

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Buscar post pelo slug
    const entries = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": slug,
        limit: 1,
    });

    if (entries.items.length === 0) {
        notFound();
    }

    const post = entries.items[0].fields as unknown as BlogPostFields;
    const imageUrl = post.featuredImage?.fields?.file?.url;
    const formattedDate = new Date(post.publishedDate).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section com Imagem */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-zinc-900">
                {imageUrl && (
                    <Image
                        src={`https:${imageUrl}`}
                        alt={post.title}
                        fill
                        className="object-cover opacity-80"
                        priority
                        sizes="100vw"
                    />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                {/* Breadcrumb e Voltar */}
                <div className="absolute top-8 left-0 right-0 container mx-auto px-6 md:px-12">
                    <Link
                        href="/#blog"
                        className="inline-flex items-center gap-2 text-white hover:text-laranja-intenso transition-colors text-sm md:text-base font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Voltar ao Blog
                    </Link>
                </div>

                {/* Título e Meta */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="container mx-auto max-w-4xl">
                        {/* Tags com Cores */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag, index) => {
                                    const category = getCategoryByTag(tag);
                                    return (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 ${category.color} text-white text-xs md:text-sm font-bold rounded-full uppercase tracking-wide shadow-lg`}
                                        >
                                            {category.label}
                                        </span>
                                    );
                                })}
                            </div>
                        )}

                        <h1 className="font-[AmsiPro] text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 text-white/90 text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {post.author || "The Right Box"}
                            </span>
                            <span className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 max-w-4xl">
                {/* Excerpt destacado */}
                <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed mb-12 font-medium border-l-4 border-laranja-intenso pl-6 py-2">
                    {post.excerpt}
                </p>

                {/* Rich Text Content */}
                <div className="prose prose-lg max-w-none">
                    {post.content && documentToReactComponents(post.content, richTextOptions)}
                </div>

                {/* CTA Final */}
                <div className="mt-16 p-8 bg-linear-to-t from-laranja-intenso to-orange-600 rounded-3xl text-white text-center">
                    <h3 className="font-[AmsiPro] text-2xl md:text-3xl font-bold mb-4 lowercase">
                        Quer acelerar suas vendas?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                        Agende uma conversa com nossos especialistas e descubra como podemos ajudar.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-white text-laranja-intenso font-bold rounded-full hover:bg-zinc-100 transition-colors text-lg"
                    >
                        Falar com Especialista
                    </Link>
                </div>

                {/* Voltar ao Blog */}
                <div className="mt-12 text-center">
                    <Link
                        href="/#blog"
                        className="inline-flex items-center gap-2 text-laranja-intenso hover:underline font-medium text-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Ver todos os posts
                    </Link>
                </div>
            </div>
        </article>
    );
}
