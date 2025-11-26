/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Script para configurar automaticamente o Contentful
 *
 * IMPORTANTE: Você precisa de um MANAGEMENT TOKEN (não o Delivery Token)
 *
 * Como obter o Management Token:
 * 1. Acesse: https://app.contentful.com/
 * 2. Vá em Settings → API keys
 * 3. Clique em "Content management tokens"
 * 4. Clique em "Generate personal token"
 * 5. Dê um nome (ex: "Setup Script")
 * 6. Copie o token gerado
 * 7. Cole no .env.local como CONTENTFUL_MANAGEMENT_TOKEN
 */

// Carregar variáveis de ambiente do .env.local
require("dotenv").config({ path: ".env.local" });

const contentful = require("contentful-management");

// Configuração
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = "master";

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
  console.error(
    "❌ Erro: Configure CONTENTFUL_SPACE_ID e CONTENTFUL_MANAGEMENT_TOKEN no .env.local"
  );
  process.exit(1);
}

const client = contentful.createClient({
  accessToken: MANAGEMENT_TOKEN,
});

async function setupContentful() {
  try {
    console.log("🚀 Iniciando configuração do Contentful...\n");

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // 1. Hero Content
    console.log("📝 Criando Content Model: Hero Content...");
    const heroContentType = await environment.createContentTypeWithId(
      "heroContent",
      {
        name: "Hero Content",
        description: "Conteúdo da seção Hero (primeira tela)",
        displayField: "headline",
        fields: [
          {
            id: "headline",
            name: "Headline",
            type: "Symbol",
            required: true,
          },
          {
            id: "subheadline",
            name: "Subheadline",
            type: "Text",
            required: true,
          },
          {
            id: "ctaButtonText",
            name: "CTA Button Text",
            type: "Symbol",
            required: true,
          },
        ],
      }
    );
    await heroContentType.publish();
    console.log("✅ Hero Content criado!\n");

    // 2. Acceleration Content
    console.log("📝 Criando Content Model: Acceleration Content...");
    const accelerationContentType = await environment.createContentTypeWithId(
      "accelerationContent",
      {
        name: "Acceleration Content",
        description: "Conteúdo da seção Aceleração Comercial",
        displayField: "title",
        fields: [
          {
            id: "title",
            name: "Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "description",
            name: "Description",
            type: "Text",
            required: true,
          },
        ],
      }
    );
    await accelerationContentType.publish();
    console.log("✅ Acceleration Content criado!\n");

    // 3. Solution
    console.log("📝 Criando Content Model: Solution...");
    const solutionContentType = await environment.createContentTypeWithId(
      "solution",
      {
        name: "Solution",
        description: "Soluções oferecidas",
        displayField: "title",
        fields: [
          {
            id: "title",
            name: "Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "description",
            name: "Description",
            type: "Text",
            required: true,
          },
          {
            id: "icon",
            name: "Icon",
            type: "Link",
            linkType: "Asset",
            required: false,
          },
          {
            id: "order",
            name: "Order",
            type: "Integer",
            required: true,
            validations: [{ unique: true }],
          },
        ],
      }
    );
    await solutionContentType.publish();
    console.log("✅ Solution criado!\n");

    // 4. About Content
    console.log("📝 Criando Content Model: About Content...");
    const aboutContentType = await environment.createContentTypeWithId(
      "aboutContent",
      {
        name: "About Content",
        description: "Conteúdo da página Sobre",
        displayField: "title",
        fields: [
          {
            id: "title",
            name: "Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "description",
            name: "Description",
            type: "Text",
            required: true,
          },
          {
            id: "fullContent",
            name: "Full Content",
            type: "RichText",
            required: false,
          },
          {
            id: "featuredImage",
            name: "Featured Image",
            type: "Link",
            linkType: "Asset",
            required: false,
          },
        ],
      }
    );
    await aboutContentType.publish();
    console.log("✅ About Content criado!\n");

    // 5. Blog Post
    console.log("📝 Criando Content Model: Blog Post...");
    const blogPostContentType = await environment.createContentTypeWithId(
      "blogPost",
      {
        name: "Blog Post",
        description: "Posts do blog",
        displayField: "title",
        fields: [
          {
            id: "title",
            name: "Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "slug",
            name: "Slug",
            type: "Symbol",
            required: true,
            validations: [{ unique: true }],
          },
          {
            id: "excerpt",
            name: "Excerpt",
            type: "Text",
            required: true,
          },
          {
            id: "content",
            name: "Content",
            type: "RichText",
            required: true,
          },
          {
            id: "featuredImage",
            name: "Featured Image",
            type: "Link",
            linkType: "Asset",
            required: false,
          },
          {
            id: "author",
            name: "Author",
            type: "Symbol",
            required: true,
          },
          {
            id: "publishedDate",
            name: "Published Date",
            type: "Date",
            required: true,
          },
          {
            id: "tags",
            name: "Tags",
            type: "Array",
            items: { type: "Symbol" },
            required: false,
          },
        ],
      }
    );
    await blogPostContentType.publish();
    console.log("✅ Blog Post criado!\n");

    // 6. Contact Content
    console.log("📝 Criando Content Model: Contact Content...");
    const contactContentType = await environment.createContentTypeWithId(
      "contactContent",
      {
        name: "Contact Content",
        description: "Informações de contato",
        displayField: "email",
        fields: [
          {
            id: "email",
            name: "Email",
            type: "Symbol",
            required: true,
          },
          {
            id: "phone",
            name: "Phone",
            type: "Symbol",
            required: true,
          },
          {
            id: "whatsapp",
            name: "WhatsApp",
            type: "Symbol",
            required: false,
          },
          {
            id: "address",
            name: "Address",
            type: "Symbol",
            required: false,
          },
          {
            id: "linkedin",
            name: "LinkedIn",
            type: "Symbol",
            required: false,
          },
          {
            id: "instagram",
            name: "Instagram",
            type: "Symbol",
            required: false,
          },
        ],
      }
    );
    await contactContentType.publish();
    console.log("✅ Contact Content criado!\n");

    console.log("⏳ Aguardando processamento dos Content Models...");
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Criar conteúdo inicial
    console.log("\n📦 Criando conteúdo inicial...\n");

    // Hero Content
    console.log("📝 Criando Hero Content...");
    const heroEntry = await environment.createEntry("heroContent", {
      fields: {
        headline: { "en-US": "Venda mais e melhor com a parceira certa" },
        subheadline: {
          "en-US":
            "Acelere suas vendas com metodologia comprovada e resultados mensuráveis",
        },
        ctaButtonText: { "en-US": "Quero performar minhas vendas" },
      },
    });
    await heroEntry.publish();
    console.log("✅ Hero Content publicado!\n");

    // Acceleration Content
    console.log("📝 Criando Acceleration Content...");
    const accelerationEntry = await environment.createEntry(
      "accelerationContent",
      {
        fields: {
          title: { "en-US": "Aceleração Comercial" },
          description: {
            "en-US":
              "Transformamos sua operação comercial em uma máquina de vendas previsível e escalável",
          },
        },
      }
    );
    await accelerationEntry.publish();
    console.log("✅ Acceleration Content publicado!\n");

    // Solutions
    const solutions = [
      {
        title: "Diagnóstico Comercial",
        description:
          "Análise profunda da sua operação para identificar gargalos e oportunidades de crescimento",
        order: 1,
      },
      {
        title: "Implementação de Processos",
        description:
          "Estruturação e otimização de processos comerciais com metodologia ágil",
        order: 2,
      },
      {
        title: "Treinamento de Equipes",
        description:
          "Capacitação prática de vendedores e gestores com técnicas comprovadas",
        order: 3,
      },
      {
        title: "Mentoria Executiva",
        description:
          "Acompanhamento estratégico de líderes para decisões assertivas",
        order: 4,
      },
    ];

    for (const solution of solutions) {
      console.log(`📝 Criando Solution: ${solution.title}...`);
      const solutionEntry = await environment.createEntry("solution", {
        fields: {
          title: { "en-US": solution.title },
          description: { "en-US": solution.description },
          order: { "en-US": solution.order },
        },
      });
      await solutionEntry.publish();
      console.log(`✅ ${solution.title} publicado!\n`);
    }

    // About Content
    console.log("📝 Criando About Content...");
    const aboutEntry = await environment.createEntry("aboutContent", {
      fields: {
        title: { "en-US": "Sobre a The Right Box" },
        description: {
          "en-US":
            "Somos especialistas em aceleração comercial com metodologia própria e resultados comprovados",
        },
      },
    });
    await aboutEntry.publish();
    console.log("✅ About Content publicado!\n");

    // Contact Content
    console.log("📝 Criando Contact Content...");
    const contactEntry = await environment.createEntry("contactContent", {
      fields: {
        email: { "en-US": "contato@therightbox.com.br" },
        phone: { "en-US": "(11) 99999-9999" },
        whatsapp: { "en-US": "5511999999999" },
        linkedin: { "en-US": "https://linkedin.com/company/therightbox" },
        instagram: { "en-US": "https://instagram.com/therightbox_" },
      },
    });
    await contactEntry.publish();
    console.log("✅ Contact Content publicado!\n");

    // Blog Post
    console.log("📝 Criando Blog Post inicial...");
    const blogEntry = await environment.createEntry("blogPost", {
      fields: {
        title: { "en-US": "Como acelerar suas vendas em 2024" },
        slug: { "en-US": "como-acelerar-suas-vendas-2024" },
        excerpt: {
          "en-US":
            "Descubra as estratégias que estão transformando equipes comerciais em máquinas de vendas",
        },
        content: {
          "en-US": {
            nodeType: "document",
            data: {},
            content: [
              {
                nodeType: "paragraph",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "Conteúdo completo do post aqui...",
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
        },
        author: { "en-US": "The Right Box" },
        publishedDate: { "en-US": new Date().toISOString() },
        tags: { "en-US": ["vendas", "estratégia", "aceleração"] },
      },
    });
    await blogEntry.publish();
    console.log("✅ Blog Post publicado!\n");

    console.log("\n🎉 SUCESSO! Contentful configurado completamente!\n");
    console.log("📋 Criados:");
    console.log("   ✅ 6 Content Models");
    console.log("   ✅ 1 Hero Content");
    console.log("   ✅ 1 Acceleration Content");
    console.log("   ✅ 4 Solutions");
    console.log("   ✅ 1 About Content");
    console.log("   ✅ 1 Contact Content");
    console.log("   ✅ 1 Blog Post");
    console.log("\n🚀 Agora rode: npm run dev");
    console.log("📱 E acesse: http://localhost:3000\n");
  } catch (error) {
    console.error("\n❌ Erro ao configurar Contentful:", error.message);
    if (error.details) {
      console.error("Detalhes:", JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

setupContentful();
