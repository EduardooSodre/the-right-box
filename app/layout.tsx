import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Right Box | Hub de Soluções Comerciais",
  description: "Integramos marca, tráfego e operação comercial em um único sistema para transformar interesse em receita previsível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
