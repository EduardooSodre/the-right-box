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
    // Dores e problemas (pesquisas informacionais)
    "por que meus leads não convertem",
    "problemas no funil de vendas",
    "como melhorar conversão de leads",
    "solução para vender mais",
    "funil comercial desorganizado",
    "como estruturar equipe de vendas",
    "leads não avançam no funil",
    "taxa de conversão baixa",
    "equipe comercial desalinhada com marketing",
    "por que perco vendas no meio do funil",
    "leads qualificados não fecham",
    "como aumentar ticket médio",
    "como reduzir CAC",
    "custo de aquisição alto",
    "ROI de marketing baixo",

    // Soluções e diferenciais
    "agência de marketing ou consultoria comercial",
    "diferença entre agência e aceleração de vendas",
    "aceleração comercial",
    "consultoria de vendas",
    "integração marketing e vendas",
    "CRM para pequenas e médias empresas",
    "automação de vendas B2B",
    "automação de vendas B2C",
    "gestão de pipeline de vendas",
    "otimização de funil comercial",

    // Processos e metodologias
    "diagnóstico comercial empresarial",
    "auditoria de processo de vendas",
    "estruturação de processo comercial",
    "previsibilidade de receita",
    "como criar fluxo de vendas eficiente",
    "inteligência de mercado B2B",
    "análise de jornada do cliente",
    "nurturing de leads automático",

    // Público-alvo e segmentos
    "aceleração comercial para PME",
    "consultoria comercial para pequenas empresas",
    "solução de vendas para médias empresas",
    "vendas B2B com CRM",
    "como vender mais no B2C",
    "gestão comercial para empresas em crescimento",

    // Resultados e benefícios
    "como ter receita previsível",
    "vendas escaláveis",
    "processo comercial escalável",
    "redução de ciclo de vendas",
    "aumento de conversão comercial",
    "vendas consistentes todo mês"
  ].join(", "),
  authors: [{ name: "The Right Box" }],
  creator: "The Right Box",
  publisher: "The Right Box",
  robots: "index, follow",
  alternates: {
    canonical: "https://therightbox.com.br"
  },
  openGraph: {
    title: "The Right Box - Aceleração Comercial | Conversão de Leads e Vendas",
    description: "Transforme leads em vendas com processos automatizados e comunicação personalizada. Integração completa entre marketing, CRM e vendas para resultados previsíveis.",
    type: "website",
    url: "https://therightbox.com.br",
    siteName: "The Right Box",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Right Box - Aceleração Comercial",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Right Box - Aceleração Comercial",
    description: "Transforme leads em vendas com processos automatizados e comunicação personalizada",
    images: ["/og-image.png"],
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
      <section id="hero">
        <Hero content={heroContent} />
      </section>
      <section id="sobre-nos">
        <GargalosSection />
      </section>
      <section id="aceleracao">
        <AceleracaoSection />
      </section>

      <section id="servicos">
        <PMEStatsSection />
        <Solutions />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <Footer content={footerContent} contactContent={contactContent} />
      <ScrollButton />
    </>
  );
}
