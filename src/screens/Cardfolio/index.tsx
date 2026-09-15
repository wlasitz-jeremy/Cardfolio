import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';

const cardfolioCards = [
  { name: 'Eclipse King', set: 'Mythic Rare', value: '1.4k' },
  { name: 'Starlight Pike', set: 'Legacy Set', value: '870' },
  { name: 'Obsidian Arc', set: 'Event Pull', value: '2.2k' },
];

export default function CardfolioScreen({ navigation }: any) {
  return (
    <View style={styles.cardfolioScreen}>
      <ScrollView contentContainerStyle={styles.cardfolioContent}>
      <InlineScreenHeader navigation={navigation} title="My Cardfolio" />
      <View style={styles.collectionSummary}>
        <Text style={styles.summaryValue}>238</Text>
        <Text style={styles.summaryLabel}>Cards in collection</Text>
      </View>

      {cardfolioCards.map((card) => (
        <TouchableOpacity key={card.name} onPress={() => navigation.getParent()?.navigate('CardInfoFlow')}>
          <View style={styles.cardListItem}>
            <View style={styles.cardThumbnail} />
            <View style={styles.cardMetadata}>
              <Text style={styles.cardTitle}>{card.name}</Text>
              <Text style={styles.cardSetName}>{card.set}</Text>
            </View>
            <Text style={styles.cardMarketValue}>{card.value}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
      <BottomTabBar navigation={navigation} activeTab="Cardfolio" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardfolioScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  cardfolioContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 128,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 16,
    letterSpacing: 0.2,
    fontFamily: fontFamilies.heading,
  },
  collectionSummary: {
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
    fontFamily: fontFamilies.heading,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#f0edf5',
    marginTop: 6,
    fontFamily: fontFamilies.heading,
  },
  cardListItem: {
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
  cardThumbnail: {
    width: 56,
    height: 78,
    borderRadius: 12,
    backgroundColor: palette.muted,
    marginRight: 14,
  },
  cardMetadata: {
    flex: 1,
  },
  cardTitle: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    fontFamily: fontFamilies.heading,
  },
  cardSetName: {
    color: palette.secondaryText,
    fontSize: 13,
    fontFamily: fontFamilies.heading,
  },
  cardMarketValue: {
    color: palette.accent,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fontFamilies.heading,
  },
});
