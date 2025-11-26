/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Script para remover entradas duplicadas no Contentful
 * Executa: node scripts/cleanup-duplicates.js
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

async function cleanupDuplicates() {
  try {
    console.log("🧹 Limpando entradas duplicadas...\n");

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // ========== LIMPAR GARGALOS DUPLICADOS ==========
    console.log("📝 Verificando Gargalos...");
    const gargalos = await environment.getEntries({
      content_type: "gargalo",
      limit: 100,
    });
    console.log(`   Total encontrado: ${gargalos.items.length}`);

    if (gargalos.items.length > 6) {
      console.log(
        "⚠️  Duplicatas encontradas! Mantendo apenas as 6 primeiras..."
      );
      for (let i = 6; i < gargalos.items.length; i++) {
        const item = gargalos.items[i];
        try {
          if (item.isPublished()) {
            await item.unpublish();
          }
          await item.delete();
          console.log(`   ✅ Removido: ${item.fields.title?.["en-US"]}`);
        } catch (e) {
          console.log(`   ⚠️  Erro ao remover: ${e.message}`);
        }
      }
    } else {
      console.log("   ✅ Sem duplicatas\n");
    }

    // ========== LIMPAR METHODOLOGY STEPS DUPLICADOS ==========
    console.log("\n📝 Verificando Methodology Steps...");
    const steps = await environment.getEntries({
      content_type: "methodologyStep",
      limit: 100,
    });
    console.log(`   Total encontrado: ${steps.items.length}`);

    if (steps.items.length > 6) {
      console.log(
        "⚠️  Duplicatas encontradas! Mantendo apenas as 6 primeiras..."
      );
      for (let i = 6; i < steps.items.length; i++) {
        const item = steps.items[i];
        try {
          if (item.isPublished()) {
            await item.unpublish();
          }
          await item.delete();
          console.log(`   ✅ Removido: ${item.fields.title?.["en-US"]}`);
        } catch (e) {
          console.log(`   ⚠️  Erro ao remover: ${e.message}`);
        }
      }
    } else {
      console.log("   ✅ Sem duplicatas\n");
    }

    // ========== LIMPAR FOOTER CONTENT DUPLICADO ==========
    console.log("\n📝 Verificando Footer Content...");
    const footers = await environment.getEntries({
      content_type: "footerContent",
      limit: 100,
    });
    console.log(`   Total encontrado: ${footers.items.length}`);

    if (footers.items.length > 1) {
      console.log("⚠️  Duplicatas encontradas! Mantendo apenas a primeira...");
      for (let i = 1; i < footers.items.length; i++) {
        const item = footers.items[i];
        try {
          if (item.isPublished()) {
            await item.unpublish();
          }
          await item.delete();
          console.log(`   ✅ Removido duplicata de Footer Content`);
        } catch (e) {
          console.log(`   ⚠️  Erro ao remover: ${e.message}`);
        }
      }
    } else {
      console.log("   ✅ Sem duplicatas\n");
    }

    // ========== LIMPAR HERO CONTENT DUPLICADO ==========
    console.log("\n📝 Verificando Hero Content...");
    const heroes = await environment.getEntries({
      content_type: "heroContent",
      limit: 100,
    });
    console.log(`   Total encontrado: ${heroes.items.length}`);

    if (heroes.items.length > 1) {
      console.log("⚠️  Duplicatas encontradas! Mantendo apenas a primeira...");
      for (let i = 1; i < heroes.items.length; i++) {
        const item = heroes.items[i];
        try {
          if (item.isPublished()) {
            await item.unpublish();
          }
          await item.delete();
          console.log(`   ✅ Removido duplicata de Hero Content`);
        } catch (e) {
          console.log(`   ⚠️  Erro ao remover: ${e.message}`);
        }
      }
    } else {
      console.log("   ✅ Sem duplicatas\n");
    }

    // ========== LIMPAR ACCELERATION CONTENT DUPLICADO ==========
    console.log("\n📝 Verificando Acceleration Content...");
    const accelerations = await environment.getEntries({
      content_type: "accelerationContent",
      limit: 100,
    });
    console.log(`   Total encontrado: ${accelerations.items.length}`);

    if (accelerations.items.length > 1) {
      console.log("⚠️  Duplicatas encontradas! Mantendo apenas a primeira...");
      for (let i = 1; i < accelerations.items.length; i++) {
        const item = accelerations.items[i];
        try {
          if (item.isPublished()) {
            await item.unpublish();
          }
          await item.delete();
          console.log(`   ✅ Removido duplicata de Acceleration Content`);
        } catch (e) {
          console.log(`   ⚠️  Erro ao remover: ${e.message}`);
        }
      }
    } else {
      console.log("   ✅ Sem duplicatas\n");
    }

    // ========== LIMPAR CONTACT CONTENT DUPLICADO ==========
    console.log("\n📝 Verificando Contact Content...");
    const contacts = await environment.getEntries({
      content_type: "contactContent",
      limit: 100,
    });
    console.log(`   Total encontrado: ${contacts.items.length}`);

    if (contacts.items.length > 1) {
      console.log("⚠️  Duplicatas encontradas! Mantendo apenas a primeira...");
      for (let i = 1; i < contacts.items.length; i++) {
        const item = contacts.items[i];
        try {
          if (item.isPublished()) {
            await item.unpublish();
          }
          await item.delete();
          console.log(`   ✅ Removido duplicata de Contact Content`);
        } catch (e) {
          console.log(`   ⚠️  Erro ao remover: ${e.message}`);
        }
      }
    } else {
      console.log("   ✅ Sem duplicatas\n");
    }

    console.log("\n🎉 LIMPEZA COMPLETA!\n");
    console.log("📋 Resumo:");
    console.log(
      `   • Gargalos: ${Math.min(gargalos.items.length, 6)} entradas mantidas`
    );
    console.log(
      `   • Methodology Steps: ${Math.min(
        steps.items.length,
        6
      )} entradas mantidas`
    );
    console.log(`   • Hero Content: 1 entrada`);
    console.log(`   • Acceleration Content: 1 entrada`);
    console.log(`   • Footer Content: 1 entrada`);
    console.log(`   • Contact Content: 1 entrada`);
    console.log("\n✨ Site limpo e otimizado!\n");
  } catch (error) {
    console.error("\n❌ Erro:", error.message);
    if (error.details) {
      console.error("Detalhes:", JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

cleanupDuplicates();
