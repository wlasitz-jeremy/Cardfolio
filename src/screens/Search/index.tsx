import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const palette = {
  background: '#f4f5f9',
  panel: '#ffffff',
  softPanel: '#eef1f7',
  darkText: '#1f2937',
  secondaryText: '#586578',
  accent: '#3d4052',
  subtle: '#9aa7b6',
  border: '#e2e8f0',
};

const results = [
  { title: 'Legendary foil pull', tag: 'Collectors' },
  { title: 'Binder accessories', tag: 'Supplies' },
  { title: 'Auto-trade card sleeves', tag: 'Trade' },
  { title: 'Collector showcase', tag: 'Display' },
];

export default function SearchScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Search</Text>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search CardFolio"
          placeholderTextColor={palette.secondaryText}
          style={styles.input}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionLabel}>Popular searches</Text>
      </View>

      {results.map((result) => (
        <View key={result.title} style={styles.resultItem}>
          <View style={styles.resultDot} />
          <View style={styles.resultTextWrap}>
            <Text style={styles.resultText}>{result.title}</Text>
            <Text style={styles.resultTag}>{result.tag}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 32,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  searchBox: {
    backgroundColor: palette.panel,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: palette.border,
    paddingHorizontal: 16,
    marginBottom: 18,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  input: {
    height: 52,
    color: palette.darkText,
    fontSize: 16,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: palette.subtle,
  },
  resultItem: {
    backgroundColor: palette.panel,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#edf1f7',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  resultDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.accent,
    marginRight: 12,
    opacity: 0.8,
  },
  resultTextWrap: {
    flex: 1,
  },
  resultText: {
    color: palette.darkText,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  resultTag: {
    color: palette.secondaryText,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
