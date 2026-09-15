import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';

export default function LocationScreen({ navigation }: any) {
  return (
    <View style={styles.locationScreen}>
      <InlineScreenHeader navigation={navigation} title="Location" />

      <View style={styles.nearbyStoreCard}>
        <Text style={styles.nearbyStoreLabel}>Nearby stores</Text>
        <Text style={styles.storeName}>Northside Card Shop</Text>
        <Text style={styles.storeDistance}>2.4 miles away</Text>

        <View style={styles.storeStatusRow}>
          <View style={styles.storeStatusBadge}>
            <Text style={styles.storeStatusText}>Open now</Text>
          </View>
          <Text style={styles.storeRating}>4.8 rating</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locationScreen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  nearbyStoreCard: {
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
  nearbyStoreLabel: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  storeName: {
    color: palette.darkText,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  storeDistance: {
    color: palette.secondaryText,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  storeStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeStatusBadge: {
    backgroundColor: palette.softAccent,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 12,
  },
  storeStatusText: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  storeRating: {
    color: palette.secondaryText,
    fontSize: 13,
    fontWeight: '700',
  },
});
