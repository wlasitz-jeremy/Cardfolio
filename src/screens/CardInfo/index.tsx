import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { colors, palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const cardImageAsset = require('../../assets/Screenshot 2026-07-23 212632.png');
const priceHistoryChartAsset = require('../../assets/card-price-history-chart.png');
const cardTags = ['Flash', 'Foil', 'Promo Pack', 'Rare', '1/3'];

export default function CardInfoScreen({ navigation }: any) {
  return (
    <View style={styles.cardInfoScreen}>
      <TouchableOpacity
        accessibilityLabel="Go back"
        accessibilityRole="button"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <SymbolView accessibilityElementsHidden name={{ ios: 'chevron.left', android: 'arrow_back', web: 'arrow_back' }} tintColor={palette.darkText} size={26} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.cardInfoContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardFrame}>
          <Image source={cardImageAsset} style={styles.cardImage} resizeMode="cover" />
        </View>

        <View style={styles.cardTags}>
          {cardTags.map((tag) => (
            <View key={tag} style={styles.cardTag}>
              <Text style={styles.cardTagText}>#{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.priceSection}>
          <View style={styles.priceColumnLeft}>
            <Text style={styles.priceHistoryTitle}>Card Price History</Text>
            <Text style={styles.rawLabel}>Raw</Text>
            <View style={styles.rawDivider} />
            <Image source={priceHistoryChartAsset} style={styles.priceHistoryChart} resizeMode="cover" />
          </View>

          <View style={styles.priceColumnRight}>
            <Text style={styles.marketValueLabel}>Market Value</Text>
            <View style={styles.nearMintBox}>
              <Text style={styles.nearMintLabel}>Near Mint</Text>
              <Text style={styles.priceText}>$ 39.99</Text>
            </View>
            <TouchableOpacity
              accessibilityLabel="Add to cart"
              activeOpacity={0.9}
              style={styles.addToCartButton}
              onPress={() => navigation.getParent()?.navigate('StoreFlow', { screen: 'Cart' })}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomTabBar navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  cardInfoScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 17,
    zIndex: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInfoContent: {
    paddingHorizontal: 25,
    paddingTop: 33,
    paddingBottom: 140,
    alignItems: 'center',
  },
  cardFrame: {
    width: 250,
    height: 351,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#000000',
    overflow: 'hidden',
    backgroundColor: colors.LightStructuralPanels,
    shadowColor: 'rgba(30, 41, 59, 0.66)',
    shadowOffset: { width: -9, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 3.3,
    elevation: 8,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 22,
    width: '100%',
  },
  cardTag: {
    backgroundColor: colors.LightStructuralPanels,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    height: 30,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTagText: {
    color: palette.darkText,
    fontSize: 16,
    letterSpacing: 0.32,
    fontFamily: fontFamilies.body,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 44,
  },
  priceColumnLeft: {
    width: 140,
  },
  priceHistoryTitle: {
    color: palette.darkText,
    fontSize: 16,
    letterSpacing: 0.32,
    textAlign: 'center',
    fontFamily: fontFamilies.body,
  },
  rawLabel: {
    color: palette.secondaryText,
    fontSize: 12,
    letterSpacing: 0.24,
    textAlign: 'center',
    marginTop: 26,
    fontFamily: fontFamilies.body,
  },
  rawDivider: {
    height: 1,
    backgroundColor: palette.darkText,
    marginTop: 11,
    marginBottom: 18,
  },
  priceHistoryChart: {
    width: 140,
    height: 93,
    borderRadius: 10,
  },
  priceColumnRight: {
    width: 130,
    alignItems: 'center',
  },
  marketValueLabel: {
    color: palette.secondaryText,
    fontSize: 12,
    letterSpacing: 0.24,
    textAlign: 'center',
    fontFamily: fontFamilies.body,
  },
  nearMintBox: {
    width: 80,
    height: 70,
    backgroundColor: colors.LightStructuralPanels,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 8,
    shadowColor: palette.darkText,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  nearMintLabel: {
    color: palette.darkText,
    fontSize: 12,
    letterSpacing: 0.24,
    fontFamily: fontFamilies.body,
  },
  priceText: {
    color: palette.darkText,
    fontSize: 16,
    letterSpacing: 0.32,
    fontFamily: fontFamilies.body,
  },
  addToCartButton: {
    width: 130,
    height: 36,
    backgroundColor: palette.accent,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 29,
    shadowColor: palette.darkText,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  addToCartText: {
    color: palette.background,
    fontSize: 12,
    letterSpacing: 0.24,
    fontFamily: fontFamilies.body,
  },
});

