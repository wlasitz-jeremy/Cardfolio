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
  display: 'Oswald',
  interface: 'Oswald',

  // Compatibility aliases for existing screen styles.
  heading: 'Oswald',
  body: 'Oswald',
} as const;

export const typography = {
  // Welcome and authentication artwork screens
  welcomeDisplay: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.display,
    fontWeight: '700',
    lineHeight: 72,
  },

  welcomeTitle: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.hero,
    fontWeight: '700',
    lineHeight: 56,
  },

  // Primary titles from screen headers
  screenTitle: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.xxxl,
    fontWeight: '700',
    lineHeight: 40,
  },

  // Section headings such as Popular Searches and Collection Progress
  sectionTitle: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.xxl,
    fontWeight: '600',
    lineHeight: 32,
  },

  // Card, product, article, and post titles
  cardTitle: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.xl,
    fontWeight: '600',
    lineHeight: 28,
  },

  // Primary and secondary action labels
  actionLabel: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.lg,
    fontWeight: '600',
    lineHeight: 24,
  },

  actionLabelLarge: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.xl,
    fontWeight: '700',
    lineHeight: 28,
  },

  // Form labels and field values
  formLabel: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.md,
    fontWeight: '500',
    lineHeight: 24,
  },

  formInput: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.md,
    fontWeight: '400',
    lineHeight: 24,
  },

  // Descriptive screen content
  bodyText: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.md,
    fontWeight: '400',
    lineHeight: 24,
  },

  bodyTextLarge: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.lg,
    fontWeight: '400',
    lineHeight: 28,
  },

  helperText: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.sm,
    fontWeight: '400',
    lineHeight: 20,
  },

  // Search filters, tabs, and menu items
  navigationLabel: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.md,
    fontWeight: '500',
    lineHeight: 24,
  },

  // Counts, timestamps, tags, and supporting metadata
  metadata: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.xs,
    fontWeight: '400',
    lineHeight: 16,
  },

  caption: {
    fontFamily: fontFamilies.interface,
    fontSize: fontSizes.xs,
    fontWeight: '500',
    lineHeight: 16,
  },
} as const;
