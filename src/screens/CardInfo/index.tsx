import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';
import PrimaryButton from '../../components/Button/PrimaryButton';

export default function CardInfoScreen({ navigation }: any) {
  return (
    <View style={styles.cardInfoScreen}>
      <InlineScreenHeader navigation={navigation} title="Card Info" />
      <View style={styles.cardArtwork} />

      <View style={styles.cardDetailsPanel}>
        <Text style={styles.cardName}>Eclipse King</Text>
        <Text style={styles.cardMetadata}>Mythic Rare • Card #128</Text>

        <View style={styles.cardTags}>
          <View style={styles.cardTag}>
            <Text style={styles.cardTagText}>Rare</Text>
          </View>
          <View style={styles.cardTag}>
            <Text style={styles.cardTagText}>Foil</Text>
          </View>
          <View style={styles.cardTag}>
            <Text style={styles.cardTagText}>1/3</Text>
          </View>
        </View>

        <Text style={styles.cardDescription}>
          Legendary attack patterns, set-defining artwork, and an iconic foil finish make this card a standout in any collection.
        </Text>
      </View>

      <PrimaryButton
        label="Add to cart"
        style={styles.addToCartButton}
        onPress={() => navigation.getParent()?.navigate('StoreFlow', { screen: 'Cart' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardInfoScreen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  cardArtwork: {
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
  cardDetailsPanel: {
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
  cardName: {
    color: palette.darkText,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: -0.6,
    fontFamily: fontFamilies.heading,
  },
  cardMetadata: {
    color: palette.secondaryText,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 16,
    fontFamily: fontFamilies.heading,
  },
  cardTags: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardTag: {
    backgroundColor: palette.softAccent,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 8,
  },
  cardTagText: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    fontFamily: fontFamilies.heading,
  },
  cardDescription: {
    color: palette.darkText,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'left',
    fontFamily: fontFamilies.heading,
  },
  addToCartButton: {
    width: '100%',
    backgroundColor: palette.accent,
    borderRadius: 16,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    fontFamily: fontFamilies.heading,
  },
});
