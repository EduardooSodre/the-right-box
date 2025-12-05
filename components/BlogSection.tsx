"use client";

import { motion, AnimatePresence, type PanInfo } from "framer-motion";
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
    const [direction, setDirection] = useState(0);

    const handleCardClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            // Dragged right - go to previous
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
        } else if (info.offset.x < -threshold) {
            // Dragged left - go to next
            setDirection(1);
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
        <section className="relative overflow-hidden pb-12 sm:pb-16 md:pb-20 bg-[#f7f7f7]">
            {/* Title */}
            <h2 className="font-[AmsiPro] bg-black container mx-auto max-w-full px-10 sm:px-16 lg:px-22 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black lowercase mb-14 sm:mb-16 md:mb-20 text-white">
                blog
            </h2>


            {/* Cards Container */}
            <div className="relative mx-auto overflow-visible">
                <div className="flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mx-auto relative px-4 md:px-0 max-w-7xl">
                    <AnimatePresence mode="popLayout" custom={direction}>
                        {getVisibleCards().map(({ post, index, position }) => {
                            const isCenter = position === 'center';

                            return (
                                <motion.article
                                    key={`${index}-${position}`}
                                    custom={direction}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={handleDragEnd}
                                    initial={{
                                        x: direction > 0 ? 400 : -400,
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    animate={{
                                        x: 0,
                                        opacity: isCenter ? 1 : 0.85,
                                        scale: isCenter ? 0.96 : 1,
                                        y: isCenter ? 6 : -6,
                                        rotateY: isCenter ? 0 : position === 'left' ? 8 : -8,
                                    }}
                                    exit={{
                                        x: direction > 0 ? -400 : 400,
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{
                                        scale: isCenter ? 0.96 : 1.02,
                                        y: isCenter ? 6 : -8,
                                        transition: { duration: 0.3 },
                                    }}
                                    onClick={() => handleCardClick(index)}
                                    className={`
                                        relative cursor-grab active:cursor-grabbing shrink-0
                                        ${isCenter
                                            ? 'w-[85%] sm:w-[80%] md:w-[340px] lg:w-[380px] z-10'
                                            : 'w-[30%] sm:w-[25%] md:w-[340px] lg:w-[380px] z-0'
                                        }
                                    `}
                                    style={{ perspective: 1000 }}
                                >
                                    {/* iOS-style 3D Card - Horizontal Layout */}
                                    <div
                                        className={`
                                        relative rounded-3xl overflow-hidden
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
                    </AnimatePresence>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {blogPosts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
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
            </div>
        </section>
    );
}