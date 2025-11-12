import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
import Solutions from "@/components/Solutions";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { fetchHeroContent } from "@/lib/fetchHeroContent";
import { fetchAccelerationContent } from "@/lib/fetchAccelerationContent";
import { fetchGargalos } from "@/lib/fetchGargalos";
import { fetchMethodologySteps } from "@/lib/fetchMethodologySteps";
import { fetchFooterContent } from "@/lib/fetchFooterContent";
import { fetchContactContent } from "@/lib/fetchContactContent";

// Enable ISR with 60 second revalidation
export const revalidate = 60;

export default async function Home() {
  // Fetch all content from Contentful
  let heroContent, accelerationContent, gargalos, methodologySteps, footerContent, contactContent;

  try {
    [heroContent, accelerationContent, gargalos, methodologySteps, footerContent, contactContent] = await Promise.all([
      fetchHeroContent(),
      fetchAccelerationContent(),
      fetchGargalos(),
      fetchMethodologySteps(),
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
      />
      <Solutions />
      <CTASection ctaTitle={accelerationContent?.ctaTitle} />
      <Footer content={footerContent} contactContent={contactContent} />
      <ScrollButton />
    </>
  );
}
