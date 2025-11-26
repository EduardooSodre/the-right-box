/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Script COMPLETO para configurar TODOS os Content Models e Conteúdos do Contentful
 * Executa: node scripts/setup-all-contentful.js
 */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import contentful from "contentful-management";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = "master";

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
  console.error(
    "❌ Erro: Configure CONTENTFUL_SPACE_ID e CONTENTFUL_MANAGEMENT_TOKEN no .env.local"
  );
  process.exit(1);
}

const client = contentful.createClient({ accessToken: MANAGEMENT_TOKEN });

async function setupAllContent() {
  try {
    console.log("🚀 Configurando TODOS os Content Models e Conteúdos...\n");

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // ========== 1. ATUALIZAR HERO CONTENT ==========
    console.log("📝 Atualizando Hero Content Model...");
    try {
      const heroType = await environment.getContentType("heroContent");

      // Adicionar campos novos se não existirem
      const existingFields = heroType.fields.map((f) => f.id);

      if (!existingFields.includes("tagline")) {
        heroType.fields.push({
          id: "tagline",
          name: "Tagline",
          type: "Text",
          required: false,
        });
      }

      if (!existingFields.includes("bottomTagline")) {
        heroType.fields.push({
          id: "bottomTagline",
          name: "Bottom Tagline",
          type: "Text",
          required: false,
        });
      }

      const updatedHero = await heroType.update();
      await updatedHero.publish();
      console.log("✅ Hero Content Model atualizado!\n");
    } catch (_e) {
      console.log("ℹ️  Hero Content já existe, pulando...\n");
    }

    // ========== 2. GARGALO ==========
    console.log("📝 Criando Content Model: Gargalo...");
    try {
      const gargaloType = await environment.createContentTypeWithId("gargalo", {
        name: "Gargalo",
        description: "Gargalos que impedem vendas",
        displayField: "title",
        fields: [
          { id: "title", name: "Title", type: "Symbol", required: true },
          {
            id: "description",
            name: "Description",
            type: "Text",
            required: true,
          },
          { id: "order", name: "Order", type: "Integer", required: true },
        ],
      });
      await gargaloType.publish();
      console.log("✅ Gargalo criado!\n");
    } catch (_e) {
      console.log("ℹ️  Gargalo já existe, pulando...\n");
    }

    // ========== 3. METHODOLOGY STEP ==========
    console.log("📝 Criando Content Model: Methodology Step...");
    try {
      const methodologyType = await environment.createContentTypeWithId(
        "methodologyStep",
        {
          name: "Methodology Step",
          description: "Etapas da metodologia",
          displayField: "title",
          fields: [
            { id: "number", name: "Number", type: "Symbol", required: true },
            { id: "title", name: "Title", type: "Symbol", required: true },
            {
              id: "description",
              name: "Description",
              type: "Text",
              required: true,
            },
            { id: "order", name: "Order", type: "Integer", required: true },
          ],
        }
      );
      await methodologyType.publish();
      console.log("✅ Methodology Step criado!\n");
    } catch (_e) {
      console.log("ℹ️  Methodology Step já existe, pulando...\n");
    }

    // ========== 4. ATUALIZAR ACCELERATION CONTENT ==========
    console.log("📝 Atualizando Acceleration Content Model...");
    try {
      const accType = await environment.getContentType("accelerationContent");

      // Primeiro, omitir o campo "description" se ele existir
      const descField = accType.fields.find((f) => f.id === "description");
      if (descField && !descField.omitted) {
        descField.omitted = true;
        const omitUpdate = await accType.update();
        await omitUpdate.publish();
        console.log('ℹ️  Campo "description" omitido\n');

        // Aguardar um pouco para processar
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Recarregar o content type
        const accTypeReloaded = await environment.getContentType(
          "accelerationContent"
        );

        // Agora substituir todos os campos
        accTypeReloaded.fields = [
          { id: "title", name: "Title", type: "Symbol", required: true },
          { id: "subtitle", name: "Subtitle", type: "Text", required: true },
          {
            id: "mainTitle",
            name: "Main Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "mainDescription",
            name: "Main Description",
            type: "Text",
            required: true,
          },
          {
            id: "solutionsSectionTitle",
            name: "Solutions Section Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "solutionsSectionDescription",
            name: "Solutions Section Description",
            type: "Text",
            required: true,
          },
          { id: "ctaTitle", name: "CTA Title", type: "Text", required: true },
          { id: "finalNote", name: "Final Note", type: "Text", required: true },
          {
            id: "gargalosTitle",
            name: "Gargalos Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "gargalosSubtitle",
            name: "Gargalos Subtitle",
            type: "Text",
            required: true,
          },
        ];

        const updatedAcc = await accTypeReloaded.update();
        await updatedAcc.publish();
        console.log("✅ Acceleration Content Model atualizado!\n");
      } else {
        // Se não tem o campo description, apenas atualizar
        accType.fields = [
          { id: "title", name: "Title", type: "Symbol", required: true },
          { id: "subtitle", name: "Subtitle", type: "Text", required: true },
          {
            id: "mainTitle",
            name: "Main Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "mainDescription",
            name: "Main Description",
            type: "Text",
            required: true,
          },
          {
            id: "solutionsSectionTitle",
            name: "Solutions Section Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "solutionsSectionDescription",
            name: "Solutions Section Description",
            type: "Text",
            required: true,
          },
          { id: "ctaTitle", name: "CTA Title", type: "Text", required: true },
          { id: "finalNote", name: "Final Note", type: "Text", required: true },
          {
            id: "gargalosTitle",
            name: "Gargalos Title",
            type: "Symbol",
            required: true,
          },
          {
            id: "gargalosSubtitle",
            name: "Gargalos Subtitle",
            type: "Text",
            required: true,
          },
        ];

        const updatedAcc = await accType.update();
        await updatedAcc.publish();
        console.log("✅ Acceleration Content Model atualizado!\n");
      }
    } catch (_e) {
      console.log("ℹ️  Erro ao atualizar Acceleration:", e.message, "\n");
    }

    // ========== 5. FOOTER CONTENT ==========
    console.log("📝 Criando Content Model: Footer Content...");
    try {
      const footerType = await environment.createContentTypeWithId(
        "footerContent",
        {
          name: "Footer Content",
          description: "Conteúdo do rodapé",
          displayField: "tagline",
          fields: [
            { id: "tagline", name: "Tagline", type: "Text", required: true },
            {
              id: "contactTitle",
              name: "Contact Title",
              type: "Symbol",
              required: true,
            },
            {
              id: "socialTitle",
              name: "Social Title",
              type: "Symbol",
              required: true,
            },
            {
              id: "copyright",
              name: "Copyright",
              type: "Symbol",
              required: true,
            },
            {
              id: "developedBy",
              name: "Developed By",
              type: "Symbol",
              required: true,
            },
            {
              id: "developedByUrl",
              name: "Developed By URL",
              type: "Symbol",
              required: true,
            },
          ],
        }
      );
      await footerType.publish();
      console.log("✅ Footer Content criado!\n");
    } catch (_e) {
      console.log("ℹ️  Footer Content já existe, pulando...\n");
    }

    console.log("⏳ Aguardando processamento...");
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // ========== CRIAR CONTEÚDOS ==========
    console.log("\n📦 Criando conteúdos...\n");

    // Hero Content - Atualizar
    console.log("📝 Atualizando Hero Content...");
    try {
      const heroEntries = await environment.getEntries({
        content_type: "heroContent",
        limit: 1,
      });
      if (heroEntries.items.length > 0) {
        const hero = heroEntries.items[0];
        hero.fields.tagline = {
          "en-US":
            'Você não precisa "pensar fora da caixa". Precisa da Caixa Certa.',
        };
        hero.fields.bottomTagline = {
          "en-US":
            "Identificamos e corrigimos os gargalos que impedem suas vendas",
        };
        const updated = await hero.update();
        await updated.publish();
        console.log("✅ Hero Content atualizado!\n");
      } else {
        console.log("ℹ️  Nenhum Hero Content encontrado para atualizar\n");
      }
    } catch (_e) {
      console.log("ℹ️  Erro ao atualizar Hero:", e.message, "\n");
    }

    // Gargalos
    const gargalos = [
      {
        title: "Estratégia & Oferta",
        desc: "Clarificamos posicionamento e encaixe de oferta por segmento e jornada.",
        order: 1,
      },
      {
        title: "Qualificação & Prioridade",
        desc: "Definimos ICP, critérios de qualificação e score de intenção.",
        order: 2,
      },
      {
        title: "Tempo & Cadência",
        desc: "Orquestramos cadências multicanal com mensagens personalizadas.",
        order: 3,
      },
      {
        title: "Operação Comercial",
        desc: "Desenhamos etapas claras e rotinas de higiene de dados.",
        order: 4,
      },
      {
        title: "Integrações e Dados",
        desc: "Integramos site, formulários, email/WhatsApp, calendário e CRM.",
        order: 5,
      },
      {
        title: "Proposta, preço e risco",
        desc: "Modelos modulares, envio ágil e próximo passo claro.",
        order: 6,
      },
    ];

    for (const gargalo of gargalos) {
      console.log(`📝 Criando Gargalo: ${gargalo.title}...`);
      try {
        const entry = await environment.createEntry("gargalo", {
          fields: {
            title: { "en-US": gargalo.title },
            description: { "en-US": gargalo.desc },
            order: { "en-US": gargalo.order },
          },
        });
        await entry.publish();
        console.log(`✅ ${gargalo.title} publicado!\n`);
      } catch (_e) {
        console.log(`ℹ️  ${gargalo.title} pode já existir, pulando...\n`);
      }
    }

    // Methodology Steps
    const steps = [
      {
        num: "01",
        title: "Descobrir",
        desc: "Mapeamos a jornada de compra real e as intenções que movem seu cliente.",
        order: 1,
      },
      {
        num: "02",
        title: "Orquestrar",
        desc: "Conectamos atração e relacionamento em um único fluxo, alinhado ao estágio de decisão.",
        order: 2,
      },
      {
        num: "03",
        title: "Sincronizar",
        desc: "Seu time recebe contexto útil no momento certo; nada se perde entre marketing, CRM e agenda.",
        order: 3,
      },
      {
        num: "04",
        title: "Conduzir",
        desc: 'Mensagens e contatos evoluem o lead de forma natural até o "sim", sem atrito desnecessário.',
        order: 4,
      },
      {
        num: "05",
        title: "Aprender",
        desc: "Operação melhora enquanto roda: leitura de sinais, ajustes leves e previsibilidade de receita.",
        order: 5,
      },
      {
        num: "06",
        title: "Escalar",
        desc: "Replicamos o que funciona, ampliamos canais e volume com governança.",
        order: 6,
      },
    ];

    for (const step of steps) {
      console.log(`📝 Criando Methodology Step: ${step.title}...`);
      try {
        const entry = await environment.createEntry("methodologyStep", {
          fields: {
            number: { "en-US": step.num },
            title: { "en-US": step.title },
            description: { "en-US": step.desc },
            order: { "en-US": step.order },
          },
        });
        await entry.publish();
        console.log(`✅ ${step.title} publicado!\n`);
      } catch (_e) {
        console.log(`ℹ️  ${step.title} pode já existir, pulando...\n`);
      }
    }

    // Acceleration Content
    console.log("📝 Atualizando Acceleration Content...");
    try {
      const accEntries = await environment.getEntries({
        content_type: "accelerationContent",
        limit: 1,
      });
      if (accEntries.items.length > 0) {
        const acc = accEntries.items[0];
        acc.fields = {
          title: { "en-US": "ACELERAÇÃO COMERCIAL" },
          subtitle: {
            "en-US":
              "Uma engenharia operacional que integra dados, campanhas e CRM para formar um sistema de vendas ativo, inteligente e sustentável.",
          },
          mainTitle: {
            "en-US": "A SOLUÇÃO DO MAIOR GARGALO DAS EMPRESAS QUE NÃO VENDEM",
          },
          mainDescription: {
            "en-US":
              "Transformamos sua operação comercial em uma máquina de vendas previsível e escalável",
          },
          solutionsSectionTitle: { "en-US": "Soluções" },
          solutionsSectionDescription: {
            "en-US":
              "Serviços integrados para transformar sua estratégia comercial em resultados concretos.",
          },
          ctaTitle: {
            "en-US": "Dê o primeiro passo para alinhar marketing e vendas.",
          },
          finalNote: {
            "en-US":
              "Uma operação única: jornada mapeada, conexões certas e pós-lead que não deixa oportunidades para trás.",
          },
          gargalosTitle: {
            "en-US":
              "Identificamos e corrigimos os gargalos que impedem suas vendas",
          },
          gargalosSubtitle: {
            "en-US":
              'Do anúncio ao CRM — para que cada interação avance rumo ao "sim".',
          },
        };
        const updated = await acc.update();
        await updated.publish();
        console.log("✅ Acceleration Content atualizado!\n");
      } else {
        console.log(
          "ℹ️  Nenhum Acceleration Content encontrado para atualizar\n"
        );
      }
    } catch (_e) {
      console.log(
        "ℹ️  Erro ao atualizar Acceleration Content:",
        e.message,
        "\n"
      );
    }

    // Footer Content
    console.log("📝 Criando Footer Content...");
    try {
      const footerEntry = await environment.createEntry("footerContent", {
        fields: {
          tagline: {
            "en-US":
              "Identificamos e corrigimos os gargalos que impedem suas vendas",
          },
          contactTitle: { "en-US": "CONTATO" },
          socialTitle: { "en-US": "REDES SOCIAIS" },
          copyright: {
            "en-US": "The Right Box. Todos os direitos reservados.",
          },
          developedBy: { "en-US": "Eduardo Sodré" },
          developedByUrl: { "en-US": "https://dev-eduardo-phi.vercel.app/" },
        },
      });
      await footerEntry.publish();
      console.log("✅ Footer Content publicado!\n");
    } catch (_e) {
      console.log("ℹ️  Footer Content pode já existir, pulando...\n");
    }

    // Atualizar Solutions com descrições
    console.log("📝 Atualizando Solutions com descrições...");
    const solutionsList = [
      "Gestão de mídia paga",
      "Criativos para anúncios",
      "Landing Pages de Alta Conversão",
      "Estratégia para anúncio",
      "Identidade Visual",
      "Campanhas de e-mail",
      "CRM & Automação",
      "Captação de Conteúdo",
    ];

    const solutionsEntries = await environment.getEntries({
      content_type: "solution",
    });

    // Primeiro, despublicar todas as solutions para evitar conflitos de unique constraint
    console.log("ℹ️  Despublicando solutions para evitar conflitos...");
    for (const solution of solutionsEntries.items) {
      if (solution.isPublished()) {
        try {
          await solution.unpublish();
        } catch (_e) {
          console.log(`ℹ️  Erro ao despublicar solution: ${e.message}`);
        }
      }
    }

    // Aguardar um pouco
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Agora atualizar cada uma com novo order
    for (
      let i = 0;
      i < solutionsEntries.items.length && i < solutionsList.length;
      i++
    ) {
      const solution = solutionsEntries.items[i];
      solution.fields.title = { "en-US": solutionsList[i] };
      solution.fields.order = { "en-US": i + 1 };
      try {
        const updated = await solution.update();
        await updated.publish();
        console.log(`✅ Solution "${solutionsList[i]}" atualizada!\n`);
      } catch (_e) {
        console.log(`ℹ️  Erro ao atualizar solution: ${e.message}\n`);
      }
    }

    console.log("\n🎉 SETUP COMPLETO!\n");
    console.log("📋 Configurados:");
    console.log("   ✅ Hero Content (com tagline e bottomTagline)");
    console.log("   ✅ 6 Gargalos");
    console.log("   ✅ 6 Methodology Steps");
    console.log("   ✅ Acceleration Content (completo)");
    console.log("   ✅ Footer Content");
    console.log("   ✅ Solutions atualizadas");
    console.log("\n🚀 Agora atualize os componentes React!\n");
  } catch (error) {
    console.error("\n❌ Erro:", error.message);
    if (error.details) {
      console.error("Detalhes:", JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

setupAllContent();
