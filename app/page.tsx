import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GargalosSection from "@/components/GargalosSection";
import AceleracaoSection from "@/components/AceleracaoSection";
import PMEStatsSection from "@/components/PMEStatsSection";
import Solutions from "@/components/Solutions";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { fetchHeroContent } from "@/lib/fetchHeroContent";
import { fetchFooterContent } from "@/lib/fetchFooterContent";
import { fetchContactContent } from "@/lib/fetchContactContent";

// Enable ISR with 60 second revalidation
export const revalidate = 60;

// SEO Metadata
export const metadata = {
  title: "The Right Box - Aceleração Comercial | Conversão de Leads e Vendas",
  description: "Descubra por que seus leads não convertem. Solução completa para problemas no funil de vendas, estruturação de equipe comercial e aceleração de vendas B2B e B2C.",
  keywords: [
    "por que meus leads não convertem",
    "problemas no funil de vendas",
    "como melhorar conversão de leads",
    "solução para vender mais",
    "funil comercial desorganizado",
    "como estruturar equipe de vendas",
    "agência de marketing ou consultoria comercial",
    "diferença entre agência e aceleração de vendas",
    "aceleração comercial",
    "consultoria de vendas"
  ].join(", "),
  openGraph: {
    title: "The Right Box - Aceleração Comercial",
    description: "Transforme leads em vendas com processos automatizados e comunicação personalizada",
    type: "website",
  },
};

export default async function Home() {
  // Fetch all content from Contentful
  let heroContent, footerContent, contactContent;

  try {
    [heroContent, footerContent, contactContent] = await Promise.all([
      fetchHeroContent(),
      fetchFooterContent(),
      fetchContactContent(),
    ]);
  } catch (error) {
    console.error("Error fetching content:", error);
  }

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Right Box",
    "alternateName": "TRBOX",
    "url": "https://therightbox.com.br",
    "logo": "https://therightbox.com.br/logo.png",
    "description": "Aceleração Comercial - Integramos estratégia, tráfego, CRM e vendas em um único sistema",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://instagram.com/therightbox_"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contato@therightbox.com.br",
      "contactType": "customer service"
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Aceleração Comercial",
        "description": "Solução completa para problemas no funil de vendas e conversão de leads"
      }
    }
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <Hero content={heroContent} />
      <GargalosSection />
      <AceleracaoSection />

      <PMEStatsSection />
      <Solutions />
      <BlogSection />
      <Footer content={footerContent} contactContent={contactContent} />
      <ScrollButton />
    </>
  );
}
