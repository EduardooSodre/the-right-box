// Categorias pré-definidas com cor laranja
export const BLOG_CATEGORIES = {
  vendas: {
    label: "Vendas",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  marketing: {
    label: "Marketing",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  crm: {
    label: "CRM",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  gestao: {
    label: "Gestão",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  tecnologia: {
    label: "Tecnologia",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  "time-comercial": {
    label: "Time Comercial",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  noticias: {
    label: "Notícias",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  marca: {
    label: "Marca",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  "cases-de-sucesso": {
    label: "Cases de Sucesso",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
  tendencias: {
    label: "Tendências",
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  },
} as const;

export type CategoryKey = keyof typeof BLOG_CATEGORIES;

// Função para obter categoria por slug (normaliza texto)
export function getCategoryByTag(tag: string): (typeof BLOG_CATEGORIES)[CategoryKey] {
  const normalizedTag = tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/\s+/g, "-"); // Substitui espaços por hífens

  // Tenta encontrar correspondência exata
  if (normalizedTag in BLOG_CATEGORIES) {
    return BLOG_CATEGORIES[normalizedTag as CategoryKey];
  }

  // Fallback: retorna laranja (cor padrão do site)
  return {
    label: tag,
    color: "bg-laranja-intenso",
    textColor: "text-laranja-intenso",
  };
}

// Função para normalizar tag para uso como chave
export function normalizeTagToKey(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}
