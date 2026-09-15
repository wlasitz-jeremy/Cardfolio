import { StyleSheet, Text, View } from 'react-native';

const palette = {
  background: '#f4f5f9',
  panel: '#ffffff',
  darkText: '#1f2937',
  secondaryText: '#586578',
  accent: '#3d4052',
  softAccent: '#edf2ff',
};

export default function CardInfoScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.cardArt} />

      <View style={styles.infoPanel}>
        <Text style={styles.name}>Eclipse King</Text>
        <Text style={styles.meta}>Mythic Rare • Card #128</Text>

        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Rare</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Foil</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>1/3</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Legendary attack patterns, set-defining artwork, and an iconic foil finish make this card a standout in any collection.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  cardArt: {
    width: 230,
    height: 300,
    borderRadius: 24,
    backgroundColor: '#dfe7f6',
    marginBottom: 20,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },
  infoPanel: {
    backgroundColor: palette.panel,
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 18,
    width: '100%',
    borderWidth: 1,
    borderColor: '#edf1f7',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  name: {
    color: palette.darkText,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: -0.6,
  },
  meta: {
    color: palette.secondaryText,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 16,
  },
  pillRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  pill: {
    backgroundColor: palette.softAccent,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 8,
  },
  pillText: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  description: {
    color: palette.darkText,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'left',
  },
});
