export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  hero: 48,
  display: 64,
} as const;

export const fontFamilies = {
  heading: 'Oswald',
  body: 'Roboto',
} as const;

export const typography = {
  // Welcome Screen
  display: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.display,
    fontWeight: '700',
    lineHeight: 72,
  },

  heroTitle: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.hero,
    fontWeight: '700',
    lineHeight: 56,
  },

  // Screen Titles
  pageTitle: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xxxl,
    fontWeight: '700',
    lineHeight: 40,
  },

  // Blog Cards, Store Cards, Collection Sections
  sectionTitle: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xxl,
    fontWeight: '600',
    lineHeight: 32,
  },

  // Collection Names, Product Names, Post Titles
  cardTitle: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xl,
    fontWeight: '600',
    lineHeight: 28,
  },

  // Buttons
  button: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.lg,
    fontWeight: '600',
    lineHeight: 24,
  },

  buttonLarge: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xl,
    fontWeight: '700',
    lineHeight: 28,
  },

  // Forms
  label: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.md,
    fontWeight: '500',
    lineHeight: 24,
  },

  input: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.md,
    fontWeight: '400',
    lineHeight: 24,
  },

  // Main Content
  body: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.md,
    fontWeight: '400',
    lineHeight: 24,
  },

  bodyLarge: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.lg,
    fontWeight: '400',
    lineHeight: 28,
  },

  bodySmall: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.sm,
    fontWeight: '400',
    lineHeight: 20,
  },

  // Search Filters, Tabs, Menu Items
  navLabel: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.md,
    fontWeight: '500',
    lineHeight: 24,
  },

  // Likes, Views, Comments, Counts
  meta: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xs,
    fontWeight: '400',
    lineHeight: 16,
  },

  caption: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xs,
    fontWeight: '500',
    lineHeight: 16,
  },
} as const;
