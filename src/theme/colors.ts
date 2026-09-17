export const colors = {
    LightBase: '#f4f4f8',
    LightStructuralPanels: '#e2e1f4',
    LightMainTypography: '#1e293b',
    LightSecondaryTypography: '#424b57',
    LightAccent: '#4a475c',
} as const;

export const palette = {
    background: colors.LightBase,
    darkText: colors.LightMainTypography,
    secondaryText: colors.LightSecondaryTypography,
    accent: colors.LightAccent,
    white: '#ffffff',
    panel: '#ffffff',
    softWhite: '#eef1f5',
    softPanel: '#eef1f7',
    muted: '#767677',
    subtle: '#9aa7b6',
    inputStroke: colors.LightMainTypography,
    border: '#dfe3ea',
    softAccent: '#eef2ff',
    lavender: '#d9d5eb',
    lavenderDark: '#bdb6dc',
} as const;

