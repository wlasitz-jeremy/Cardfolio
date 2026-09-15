import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

export default function LocationScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.pageTitle}>Location</Text>

      <View style={styles.mapCard}>
        <Text style={styles.mapLabel}>Nearby stores</Text>
        <Text style={styles.mapText}>Northside Card Shop</Text>
        <Text style={styles.mapSubText}>2.4 miles away</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoPill}>
            <Text style={styles.infoPillText}>Open now</Text>
          </View>
          <Text style={styles.metaText}>4.8 rating</Text>
        </View>
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
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  mapCard: {
    backgroundColor: palette.panel,
    borderRadius: 22,
    padding: 20,
    minHeight: 220,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  mapLabel: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  mapText: {
    color: palette.darkText,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  mapSubText: {
    color: palette.secondaryText,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoPill: {
    backgroundColor: palette.softAccent,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 12,
  },
  infoPillText: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  metaText: {
    color: palette.secondaryText,
    fontSize: 13,
    fontWeight: '700',
  },
});
