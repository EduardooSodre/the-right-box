"use client";

import { motion, type PanInfo } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const blogPosts = [
    {
        title: "Take a Rowing Lesson",
        excerpt: "Learn the art of rowing like a Venetian from a local instructor while navigating the city's intricate network of canals.",
        image: "/images/blog.png",
    },
    {
        title: "Take a Rowing Lesson",
        excerpt: "Learn the art of rowing like a Venetian from a local instructor while navigating the city's intricate network of canals.",
        image: "/images/blog.png",
    },
    {
        title: "Take a Rowing Lesson",
        excerpt: "Learn the art of rowing like a Venetian from a local instructor while navigating the city's intricate network of canals.",
        image: "/images/blog.png",
    },
    {
        title: "Take a Rowing Lesson",
        excerpt: "Learn the art of rowing like a Venetian from a local instructor while navigating the city's intricate network of canals.",
        image: "/images/blog.png",
    },
    {
        title: "Take a Rowing Lesson",
        excerpt: "Learn the art of rowing like a Venetian from a local instructor while navigating the city's intricate network of canals.",
        image: "/images/blog.png",
    },
    {
        title: "Take a Rowing Lesson",
        excerpt: "Learn the art of rowing like a Venetian from a local instructor while navigating the city's intricate network of canals.",
        image: "/images/blog.png",
    },
];

export default function BlogSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            // Dragged right - go to previous
            setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
        } else if (info.offset.x < -threshold) {
            // Dragged left - go to next
            setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
        }
    };

    // Get the 3 cards to display: left, center, right
    const getVisibleCards = () => {
        const prevIndex = (currentIndex - 1 + blogPosts.length) % blogPosts.length;
        const nextIndex = (currentIndex + 1) % blogPosts.length;

        return [
            { post: blogPosts[prevIndex], index: prevIndex, position: 'left' },
            { post: blogPosts[currentIndex], index: currentIndex, position: 'center' },
            { post: blogPosts[nextIndex], index: nextIndex, position: 'right' },
        ];
    };

    return (
        <section className="relative bg-white overflow-hidden py-12 sm:py-16">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 sm:mb-12"
            >
                <h2 className="font-[AmsiPro] bg-black container mx-auto max-w-full px-10 sm:px-16 lg:px-22 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black lowercase text-white py-4">
                    blog
                </h2>
            </motion.div>

            {/* Cards Container */}
            <motion.div
                className="relative max-w-7xl mx-auto px-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {getVisibleCards().map(({ post, index, position }) => {
                        const isCenter = position === 'center';

                        return (
                            <motion.article
                                key={`${index}-${position}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                                animate={{
                                    scale: isCenter ? 0.96 : 1,
                                    y: isCenter ? 6 : -6,
                                    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
                                }}
                                onClick={() => handleCardClick(index)}
                                className="relative cursor-pointer w-full md:w-[340px] lg:w-[380px] shrink-0"
                            >
                                {/* iOS-style 3D Card - Horizontal Layout */}
                                <div
                                    className={`
                                        relative rounded-3xl overflow-hidden
                                        transition-all duration-700 ease-out
                                        ${isCenter
                                            ? 'blog-card-active'
                                            : 'blog-card-inactive'
                                        }
                                    `}
                                >
                                    {/* Horizontal Layout: Image Left + Content Right */}
                                    <div className="flex flex-row items-stretch p-3 pb-2">
                                        {/* Image Container - Left Side with Rounded Effect */}
                                        <div className="relative w-[140px] h-[140px] overflow-hidden rounded-2xl shrink-0">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                                sizes="140px"
                                                priority={isCenter}
                                            />
                                        </div>

                                        {/* Content - Right Side */}
                                        <div className="flex-1 pl-4 pr-2 py-2 flex flex-col justify-center">
                                            <h3 className={`
                                                font-[AmsiPro] text-xl md:text-2xl font-bold mb-2 leading-tight
                                                transition-colors duration-300
                                                ${isCenter ? 'text-white' : 'text-zinc-900'}
                                            `}>
                                                {post.title}
                                            </h3>

                                            <p className={`
                                                text-[11px] md:text-xs leading-snug line-clamp-4
                                                transition-colors duration-300
                                                ${isCenter ? 'text-white/90' : 'text-zinc-700'}
                                            `}>
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {blogPosts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`
                                h-2 rounded-full transition-all duration-300
                                ${index === currentIndex
                                    ? 'w-8 bg-[#ff7700]'
                                    : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                                }
                            `}
                            aria-label={`Ir para post ${index + 1}`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
