import { CatalogSeedItem } from '../../features/product/catalog-seed-item.model';
import { LOCAL_PRODUCT_CATALOG } from '../../features/product/local-product-catalog.seed';

export interface StorefrontBrandingConfig {
  name: string;
  logoPath: string;
  logoAlt: string;
  homeAriaLabel: string;
  faviconPath: string;
  tagline: string;
  description: string;
  notFoundImagePath: string;
}

export interface BrandThemeTokens {
  primaryColor: string;
  primaryColorDark: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  surfaceSoftColor: string;
  textMainColor: string;
  textMutedColor: string;
  borderColor: string;
  starColor: string;
}

export interface ContactChannel {
  type: 'whatsapp' | 'instagram' | 'support';
  label: string;
  url: string;
}

export interface StorefrontContentConfig {
  seeAllProductsLabel: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  heroEyebrow: string;
  heroCtaLabel: string;
  popularSectionTitle: string;
  emptyCatalogTitle: string;
  emptyCatalogDescription: string;
  detailTitle: string;
  detailHighlightsTitle: string;
  relatedSectionTitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  storeInfoSectionTitle: string;
  footerShortcutsTitle: string;
  footerSupportTitle: string;
  footerCopyrightText: string;
  searchButtonLabel: string;
  notFoundTitle: string;
  notFoundDescription: string;
  notFoundBrowseLabel: string;
  filtersTitle: string;
  filtersResetLabel: string;
  filterSearchPlaceholder: string;
  priceRangeTitle: string;
  priceRangeAriaLabel: string;
  priceRangeCurrentPrefix: string;
  pricePresetAllLabel: string;
  pricePresetMidLabel: string;
  pricePresetHighLabel: string;
  categoriesTitle: string;
  sortByLabel: string;
  resultsCountSuffix: string;
  sortPopularLabel: string;
  sortLowestPriceLabel: string;
  sortHighestRatedLabel: string;
  mobileFilterButtonLabel: string;
  mobileFilterApplyLabel: string;
  pageNotFoundEyebrow: string;
  backToHomeLabel: string;
  productNotFoundEyebrow: string;
  productAriaPrefix: string;
}

export interface StorefrontNavigationLink {
  label: string;
  route: string;
}

export interface StorefrontSocialLinksConfig {
  instagramUrl: string;
  whatsappUrl: string;
  facebookUrl?: string;
  youtubeUrl?: string;
}

export interface StorefrontCatalogConfig {
  currencyCode: string;
  baseProductUrl: string;
  defaultWhatsAppMessage: string;
  priceRangeMin: number;
  priceRangeMax: number;
  pricePresetMidValue: number;
  pricePresetHighValue: number;
}

export interface StorefrontConfig {
  brand: StorefrontBrandingConfig;
  theme: BrandThemeTokens;
  content: StorefrontContentConfig;
  productCatalog: CatalogSeedItem[];
  contactChannels: ContactChannel[];
  navigationLinks: StorefrontNavigationLink[];
  socialLinks: StorefrontSocialLinksConfig;
  catalog: StorefrontCatalogConfig;
  primaryContactChannel?: 'whatsapp' | 'instagram';
}

export const STOREFRONT_CONFIG: StorefrontConfig = {
  brand: {
    name: 'Alma Sexy',
    logoPath: 'logo-sem-fundo.png',
    logoAlt: 'Alma Sexy',
    homeAriaLabel: 'Alma Sexy home',
    faviconPath: 'logo-sem-fundo.png',
    tagline: 'Desperte seus sentidos',
    description: 'Experiências sensoriais, elegância e desejo em cada detalhe.',
    notFoundImagePath: 'logo-sem-fundo.png',
  },
  theme: {
    primaryColor: '#7B1E3A',        // vinho elegante (não agressivo)
    primaryColorDark: '#4A0F22',    // sombra profunda
    secondaryColor: '#A44A63',      // rosé sensual
    accentColor: '#D4AF37',         // dourado suave (luxo)

    backgroundColor: '#F8F5F2',     // fundo creme quente (MUDA TUDO)
    surfaceColor: '#FFFFFF',        // branco puro (respiro)
    surfaceSoftColor: '#F1ECE8',    // camada suave

    textMainColor: '#2B1B1F',       // quase vinho escuro (mais elegante que preto)
    textMutedColor: '#7A6A6E',      // neutro sofisticado

    borderColor: '#E6DCD5',         // borda suave

    starColor: '#D4AF37',           // dourado
  },
  content: {
    seeAllProductsLabel: 'Ver todos os produtos',
    searchPlaceholder: 'Explore seus desejos...',
    searchAriaLabel: 'Buscar produtos',
    heroEyebrow: 'Experiência sensorial',
    heroCtaLabel: 'Descobrir agora',
    popularSectionTitle: 'Mais desejados',
    emptyCatalogTitle: 'Nada encontrado',
    emptyCatalogDescription: 'Refine sua busca e descubra novas sensações.',
    detailTitle: 'Sobre o produto',
    detailHighlightsTitle: 'Destaques',
    relatedSectionTitle: 'Você também pode desejar',
    primaryCtaLabel: 'Comprar no WhatsApp',
    secondaryCtaLabel: 'Ver no Instagram',
    storeInfoSectionTitle: 'Sobre a Alma Sexy',
    footerShortcutsTitle: 'Navegação',
    footerSupportTitle: 'Atendimento',
    footerCopyrightText: 'Todos os direitos reservados.',
    searchButtonLabel: 'Buscar',
    notFoundTitle: 'Produto não encontrado',
    notFoundDescription: 'O desejo continua. Explore outras opções.',
    notFoundBrowseLabel: 'Explorar produtos',
    filtersTitle: 'Filtros',
    filtersResetLabel: 'Limpar',
    filterSearchPlaceholder: 'Buscar...',
    priceRangeTitle: 'Faixa de preço',
    priceRangeAriaLabel: 'Preço mínimo',
    priceRangeCurrentPrefix: 'A partir de',
    pricePresetAllLabel: 'Todos',
    pricePresetMidLabel: 'Acima de R$ 20',
    pricePresetHighLabel: 'Acima de R$ 50',
    categoriesTitle: 'Categorias',
    sortByLabel: 'Ordenar por:',
    resultsCountSuffix: 'itens',
    sortPopularLabel: 'Mais desejados',
    sortLowestPriceLabel: 'Menor preço',
    sortHighestRatedLabel: 'Mais avaliados',
    mobileFilterButtonLabel: 'Filtrar',
    mobileFilterApplyLabel: 'Aplicar',
    pageNotFoundEyebrow: 'Página não encontrada',
    backToHomeLabel: 'Voltar ao início',
    productNotFoundEyebrow: 'Produto não encontrado',
    productAriaPrefix: 'Abrir',
  },
  productCatalog: LOCAL_PRODUCT_CATALOG,
  contactChannels: [
    {
      type: 'whatsapp',
      label: 'Atendimento discreto',
      url: 'https://wa.me/5561995286755',
    },
    {
      type: 'instagram',
      label: 'Instagram oficial',
      url: 'https://instagram.com/aalmasexy',
    },
  ],
  navigationLinks: [
    { label: 'Inicio', route: '/' },
    { label: 'Buscar', route: '/search' },
  ],
  socialLinks: {
    instagramUrl: 'https://instagram.com/aalmasexy',
    whatsappUrl: 'https://wa.me/5561995286755',
  },
  catalog: {
    currencyCode: 'BRL',
    baseProductUrl: '',
    defaultWhatsAppMessage: 'Olá! Tenho interesse neste produto:',
    priceRangeMin: 0,
    priceRangeMax: 100,
    pricePresetMidValue: 20,
    pricePresetHighValue: 50,
  },
  primaryContactChannel: 'whatsapp',
};
