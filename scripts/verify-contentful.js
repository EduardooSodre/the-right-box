/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Script para verificar o status atual do Contentful
 * Executa: node scripts/verify-contentful.js
 */

require("dotenv").config({ path: ".env.local" });
const contentful = require("contentful-management");

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

async function verifyContentful() {
  try {
    console.log("🔍 Verificando status do Contentful...\n");

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    console.log("📋 RESUMO DO CONTEÚDO:\n");

    // Hero Content
    const heroes = await environment.getEntries({
      content_type: "heroContent",
      limit: 10,
    });
    console.log(`✅ Hero Content: ${heroes.items.length} entrada(s)`);
    if (heroes.items.length > 0) {
      const hero = heroes.items[0];
      console.log(
        `   - Headline: ${hero.fields.headline?.["en-US"]?.substring(0, 50)}...`
      );
      console.log(`   - Tagline: ${hero.fields.tagline?.["en-US"]}`);
      console.log(`   - CTA: ${hero.fields.ctaButtonText?.["en-US"]}`);
    }

    // Gargalos
    const gargalos = await environment.getEntries({
      content_type: "gargalo",
      limit: 100,
    });
    console.log(`\n✅ Gargalos: ${gargalos.items.length} entrada(s)`);
    gargalos.items.forEach((item, idx) => {
      console.log(`   ${idx + 1}. ${item.fields.title?.["en-US"]}`);
    });

    // Methodology Steps
    const steps = await environment.getEntries({
      content_type: "methodologyStep",
      limit: 100,
    });
    console.log(`\n✅ Methodology Steps: ${steps.items.length} entrada(s)`);
    steps.items.forEach((item) => {
      console.log(
        `   ${item.fields.number?.["en-US"]}. ${item.fields.title?.["en-US"]}`
      );
    });

    // Acceleration Content
    const accelerations = await environment.getEntries({
      content_type: "accelerationContent",
      limit: 10,
    });
    console.log(
      `\n✅ Acceleration Content: ${accelerations.items.length} entrada(s)`
    );
    if (accelerations.items.length > 0) {
      const acc = accelerations.items[0];
      console.log(`   - Title: ${acc.fields.title?.["en-US"]}`);
      console.log(`   - Main Title: ${acc.fields.mainTitle?.["en-US"]}`);
    }

    // Solutions
    const solutions = await environment.getEntries({
      content_type: "solution",
      limit: 100,
    });
    console.log(`\n✅ Solutions: ${solutions.items.length} entrada(s)`);
    solutions.items.forEach((item, idx) => {
      console.log(`   ${idx + 1}. ${item.fields.title?.["en-US"]}`);
    });

    // Footer Content
    const footers = await environment.getEntries({
      content_type: "footerContent",
      limit: 10,
    });
    console.log(`\n✅ Footer Content: ${footers.items.length} entrada(s)`);
    if (footers.items.length > 0) {
      const footer = footers.items[0];
      console.log(`   - Tagline: ${footer.fields.tagline?.["en-US"]}`);
      console.log(`   - Copyright: ${footer.fields.copyright?.["en-US"]}`);
    }

    // Contact Content
    const contacts = await environment.getEntries({
      content_type: "contactContent",
      limit: 10,
    });
    console.log(`\n✅ Contact Content: ${contacts.items.length} entrada(s)`);
    if (contacts.items.length > 0) {
      const contact = contacts.items[0];
      console.log(`   - Email: ${contact.fields.email?.["en-US"]}`);
      console.log(`   - Instagram: ${contact.fields.instagram?.["en-US"]}`);
    }

    console.log("\n\n🎉 VERIFICAÇÃO COMPLETA!\n");
    console.log("📊 ESTATÍSTICAS:");
    console.log(`   • Total de Content Types: 7`);
    console.log(
      `   • Total de Entradas: ${
        heroes.items.length +
        gargalos.items.length +
        steps.items.length +
        accelerations.items.length +
        solutions.items.length +
        footers.items.length +
        contacts.items.length
      }`
    );
    console.log("\n✨ Tudo configurado corretamente!\n");
  } catch (error) {
    console.error("\n❌ Erro:", error.message);
    if (error.details) {
      console.error("Detalhes:", JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

verifyContentful();
