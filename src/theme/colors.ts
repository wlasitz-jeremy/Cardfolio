import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const colors = {
    LightBase: '#f4f4f8',
    DarkBase: '#111315',
    LightStructuralPanels: '#e2e1f4',
    DarkStructuralPanels: '#1f1e27',
    LightMainTypography: '#1e293b',
    DarkMainTypography: '#f1f3f5',
    LightSecondaryTypography: '#424b57',
    DarkSecondaryTypography: '#c4c7ca',
    LightAccent: '#4a475c',
    DarkAccent: '#c1bbe1',
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

export type ThemeMode = 'light' | 'dark';

export const lightPalette = palette;

export const darkPalette = {
    background: colors.DarkBase,
    darkText: colors.DarkMainTypography,
    secondaryText: colors.DarkSecondaryTypography,
    accent: colors.DarkAccent,
    white: colors.DarkMainTypography,
    panel: colors.DarkStructuralPanels,
    softWhite: '#2a2a32',
    softPanel: colors.DarkStructuralPanels,
    muted: '#a7abb0',
    subtle: '#8f969e',
    inputStroke: colors.DarkMainTypography,
    border: '#3b3b45',
    softAccent: '#353044',
    lavender: '#4a455d',
    lavenderDark: '#6c6484',
} as const;

export const navigationThemes = {
    light: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: colors.LightAccent,
            background: colors.LightBase,
            card: '#ffffff',
            text: colors.LightMainTypography,
            border: '#dfe3ea',
            notification: colors.LightAccent,
        },
    },
    dark: {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: colors.DarkAccent,
            background: colors.DarkBase,
            card: colors.DarkStructuralPanels,
            text: colors.DarkMainTypography,
            border: '#3b3b45',
            notification: colors.DarkAccent,
        },
    },
} as const;
