import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";

// Enable ISR with 60 second revalidation
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <NextSection />
      <Footer />
      <ScrollButton />
    </>
  );
}
