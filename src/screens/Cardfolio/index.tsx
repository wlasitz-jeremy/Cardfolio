import { ScrollView, StyleSheet, Text, View } from 'react-native';

const palette = {
  background: '#f4f4f8',
  darkText: '#1e293b',
  secondaryText: '#424b57',
  accent: '#4a475c',
  white: '#ffffff',
  muted: '#dfe3ec',
};

const cards = [
  { name: 'Eclipse King', set: 'Mythic Rare', value: '1.4k' },
  { name: 'Starlight Pike', set: 'Legacy Set', value: '870' },
  { name: 'Obsidian Arc', set: 'Event Pull', value: '2.2k' },
];

export default function CardfolioScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>My Cardfolio</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryValue}>238</Text>
        <Text style={styles.summaryLabel}>Cards in collection</Text>
      </View>

      {cards.map((card) => (
        <View key={card.name} style={styles.card}>
          <View style={styles.cardArt} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardName}>{card.name}</Text>
            <Text style={styles.cardSet}>{card.set}</Text>
          </View>
          <Text style={styles.cardValue}>{card.value}</Text>
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
    paddingTop: 52,
    paddingBottom: 32,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  summary: {
    backgroundColor: palette.accent,
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  summaryValue: {
    fontSize: 38,
    fontWeight: '700',
    color: palette.white,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#f0edf5',
    marginTop: 6,
  },
  card: {
    backgroundColor: palette.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardArt: {
    width: 56,
    height: 78,
    borderRadius: 12,
    backgroundColor: palette.muted,
    marginRight: 14,
  },
  cardDetails: {
    flex: 1,
  },
  cardName: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardSet: {
    color: palette.secondaryText,
    fontSize: 13,
  },
  cardValue: {
    color: palette.accent,
    fontSize: 18,
    fontWeight: '700',
  },
});
