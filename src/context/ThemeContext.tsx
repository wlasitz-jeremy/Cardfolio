import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import { Appearance } from 'react-native';

import { darkPalette, lightPalette, type ThemeMode } from '../theme/colors';

type ThemeContextValue = {
	mode: ThemeMode;
	isDark: boolean;
	palette: typeof lightPalette | typeof darkPalette;
	setMode: (mode: ThemeMode) => void;
	toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
	const [mode, setMode] = useState<ThemeMode>(() => Appearance.getColorScheme() === 'dark' ? 'dark' : 'light');

	useEffect(() => {
		const subscription = Appearance.addChangeListener(({ colorScheme }) => {
			setMode(colorScheme === 'dark' ? 'dark' : 'light');
		});

		return () => subscription.remove();
	}, []);

	const value = useMemo<ThemeContextValue>(() => ({
		mode,
		isDark: mode === 'dark',
		palette: mode === 'dark' ? darkPalette : lightPalette,
		setMode,
		toggleMode: () => setMode((currentMode) => currentMode === 'dark' ? 'light' : 'dark'),
	}), [mode]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used inside ThemeProvider');
	}

	return context;
}
