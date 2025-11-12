import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const viewport: Viewport = {
  themeColor: "#E95009",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://the-right-box.vercel.app/'),
  title: {
    default: "The Right Box - Aceleração Comercial | Transforme Leads em Vendas",
    template: "%s | The Right Box"
  },
  description: "Descubra por que seus leads não convertem. Solução completa de aceleração comercial para problemas no funil de vendas, estruturação de equipe e aumento de conversão B2B e B2C.",
  keywords: [
    "aceleração comercial",
    "por que meus leads não convertem",
    "problemas no funil de vendas",
    "como melhorar conversão de leads",
    "solução para vender mais",
    "funil comercial desorganizado",
    "como estruturar equipe de vendas",
    "consultoria comercial",
    "agência de marketing ou consultoria comercial",
    "diferença entre agência e aceleração de vendas",
    "CRM vendas",
    "automação comercial",
    "cadência de vendas",
    "marketing e vendas integrados",
    "The Right Box",
    "TRBOX"
  ],
  authors: [{ name: "The Right Box" }],
  creator: "The Right Box",
  publisher: "The Right Box",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://the-right-box.vercel.app/",
    siteName: "The Right Box",
    title: "The Right Box - Aceleração Comercial | Transforme Leads em Vendas",
    description: "Integramos estratégia, tráfego, CRM e vendas em um único sistema. Aceleração Comercial é sobre resultado previsível, não apenas cliques.",
    images: [
      {
        url: "/logos/LOGO-1C.png",
        width: 1200,
        height: 630,
        alt: "The Right Box - Aceleração Comercial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Right Box - Aceleração Comercial",
    description: "Transforme leads em vendas com processos automatizados e comunicação personalizada",
    images: ["/logos/LOGO-1C.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
  icons: {
    icon: "/logos/LOGO-1C.png",
    apple: "/logos/LOGO-1C.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
