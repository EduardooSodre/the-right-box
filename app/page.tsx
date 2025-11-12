import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { fetchHeroContent } from "@/lib/fetchHeroContent";
import { fetchAccelerationContent } from "@/lib/fetchAccelerationContent";
import { fetchGargalos } from "@/lib/fetchGargalos";
import { fetchMethodologySteps } from "@/lib/fetchMethodologySteps";
import { fetchSolutions } from "@/lib/fetchSolutions";
import { fetchFooterContent } from "@/lib/fetchFooterContent";
import { fetchContactContent } from "@/lib/fetchContactContent";

// Enable ISR with 60 second revalidation
export const revalidate = 60;

export default async function Home() {
  // Fetch all content from Contentful
  let heroContent, accelerationContent, gargalos, methodologySteps, solutions, footerContent, contactContent;
  
  try {
    [heroContent, accelerationContent, gargalos, methodologySteps, solutions, footerContent, contactContent] = await Promise.all([
      fetchHeroContent(),
      fetchAccelerationContent(),
      fetchGargalos(),
      fetchMethodologySteps(),
      fetchSolutions(),
      fetchFooterContent(),
      fetchContactContent(),
    ]);
  } catch (error) {
    console.error("Error fetching content:", error);
  }

  return (
    <>
      <Header />
      <Hero content={heroContent} />
      <NextSection 
        accelerationContent={accelerationContent}
        gargalos={gargalos}
        methodologySteps={methodologySteps}
        solutions={solutions}
      />
      <Footer content={footerContent} contactContent={contactContent} />
      <ScrollButton />
    </>
  );
}
