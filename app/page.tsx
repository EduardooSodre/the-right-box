import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { fetchHeroContent } from "@/lib/fetchHeroContent";

// Enable ISR with 60 second revalidation
export const revalidate = 60;

export default async function Home() {
  // Fetch content from Contentful
  let heroContent;
  try {
    heroContent = await fetchHeroContent();
  } catch (error) {
    console.error("Error fetching hero content:", error);
    heroContent = undefined;
  }

  return (
    <>
      <Header />
      <Hero content={heroContent} />
      <NextSection />
      <Footer />
      <ScrollButton />
    </>
  );
}
