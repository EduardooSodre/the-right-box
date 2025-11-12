/**
 * Script para atualizar o Hero Content no Contentful
 */

require('dotenv').config({ path: '.env.local' });
const contentful = require('contentful-management');

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = 'master';

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
  console.error('❌ Erro: Configure as variáveis de ambiente');
  process.exit(1);
}

const client = contentful.createClient({
  accessToken: MANAGEMENT_TOKEN,
});

async function updateHeroContent() {
  try {
    console.log('🚀 Atualizando Hero Content...\n');

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // Buscar o Hero Content existente
    const entries = await environment.getEntries({
      content_type: 'heroContent',
      limit: 1,
    });

    if (entries.items.length === 0) {
      console.error('❌ Nenhum Hero Content encontrado!');
      process.exit(1);
    }

    const entry = entries.items[0];

    // Atualizar os campos
    entry.fields.headline = {
      'en-US': 'Integramos marca, tráfego e operação comercial em um único sistema para transformar interesse em receita previsível — sem achismo, sem ruído, sem desperdício.',
    };
    
    entry.fields.subheadline = {
      'en-US': 'Você não precisa "pensar fora da caixa". Precisa da Caixa Certa.',
    };
    
    entry.fields.ctaButtonText = {
      'en-US': 'Quero performar minhas vendas,\nnão apenas anunciar',
    };

    const updatedEntry = await entry.update();
    await updatedEntry.publish();

    console.log('✅ Hero Content atualizado com sucesso!\n');
    console.log('📋 Novos valores:');
    console.log('   Headline:', entry.fields.headline['en-US'].substring(0, 50) + '...');
    console.log('   Subheadline:', entry.fields.subheadline['en-US']);
    console.log('   CTA:', entry.fields.ctaButtonText['en-US']);
    console.log('\n🔄 Recarregue a página em http://localhost:3000\n');

  } catch (error) {
    console.error('\n❌ Erro:', error.message);
    if (error.details) {
      console.error('Detalhes:', JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

updateHeroContent();
