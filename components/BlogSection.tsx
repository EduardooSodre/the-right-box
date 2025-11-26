"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
    {
        title: "Take a Rowing Lesson",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/blog.png",
        date: "15 Nov 2025",
    },
    {
        title: "Take a Rowing Lesson",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/blog.png",
        date: "15 Nov 2025",
        featured: true,
    },
    {
        title: "Take a Rowing Lesson",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/blog.png",
        date: "15 Nov 2025",
    },
];

export default function BlogSection() {
    return (
        <section className="relative bg-gradient-to-b from-white to-zinc-50 text-black py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 sm:mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold lowercase">
                        blog
                    </h2>
                </motion.div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${post.featured
                                    ? "bg-laranja-intenso text-white"
                                    : "bg-white"
                                }`}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                <h3
                                    className={`text-xl sm:text-2xl font-bold mb-3 group-hover:${post.featured ? "text-white" : "text-laranja-intenso"
                                        } transition-colors`}
                                >
                                    {post.title}
                                </h3>

                                <p
                                    className={`text-sm sm:text-base leading-relaxed mb-4 ${post.featured ? "text-white/90" : "text-zinc-600"
                                        }`}
                                >
                                    {post.excerpt}
                                </p>

                                <div
                                    className={`text-xs sm:text-sm font-semibold ${post.featured ? "text-white/80" : "text-zinc-500"
                                        }`}
                                >
                                    {post.date}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
