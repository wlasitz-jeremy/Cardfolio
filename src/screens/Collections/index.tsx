import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react-native';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';

const collectionEntries = [
  { title: 'Legendary Pulls', count: '18 cards', accent: '#4a475c' },
  { title: 'Starter Binder', count: '42 cards', accent: '#6f7284' },
  { title: 'Vault of Rares', count: '9 cards', accent: '#2f3642' },
  { title: 'Favorite Set', count: '31 cards', accent: '#5b5d76' },
  { title: 'Trade Night Finds', count: '26 cards', accent: '#536d69' },
  { title: 'Cards to Grade', count: '14 cards', accent: '#8a6e63' },
  { title: 'Illustration Rares', count: '37 cards', accent: '#59627a' },
  { title: 'First Edition', count: '12 cards', accent: '#7a668f' },
  { title: 'Shiny Collection', count: '22 cards', accent: '#4a475c' },
  { title: 'Trainer Archive', count: '35 cards', accent: '#6f7284' },
  { title: 'Vintage Treasures', count: '11 cards', accent: '#2f3642' },
  { title: 'Battle Ready', count: '29 cards', accent: '#5b5d76' },
  { title: 'Convention Haul', count: '33 cards', accent: '#536d69' },
  { title: 'Future Investments', count: '17 cards', accent: '#8a6e63' },
  { title: 'Promo Exclusives', count: '24 cards', accent: '#59627a' },
  { title: 'Elite Collection', count: '15 cards', accent: '#7a668f' },
  { title: 'Regional Favorites', count: '27 cards', accent: '#4a475c' },
  { title: 'Master Showcase', count: '19 cards', accent: '#6f7284' },
  { title: 'Autograph Series', count: '8 cards', accent: '#2f3642' },
  { title: 'Event Rewards', count: '21 cards', accent: '#5b5d76' },
  { title: 'Hidden Gems', count: '16 cards', accent: '#536d69' },
  { title: 'Collector Classics', count: '28 cards', accent: '#8a6e63' },
  { title: 'Rainbow Rares', count: '13 cards', accent: '#59627a' },
  { title: 'Showcase Picks', count: '30 cards', accent: '#7a668f' },
];

const deckEntries = [
  { title: 'Tournament Ready', count: '24 cards', accent: '#59627a' },
  { title: 'Trade Night Picks', count: '16 cards', accent: '#7a668f' },
  { title: 'Favorites to Grade', count: '8 cards', accent: '#536d69' },
  { title: 'Weekend League', count: '30 cards', accent: '#4a475c' },
  { title: 'Beginner Build', count: '20 cards', accent: '#8a6e63' },
  { title: 'Wishlist Deck', count: '18 cards', accent: '#6f7284' },
  { title: 'Moonlit Control', count: '22 cards', accent: '#59627a' },
  { title: 'Fast Starter', count: '26 cards', accent: '#536d69' },
  { title: 'Rare Finishers', count: '12 cards', accent: '#7a668f' },
  { title: 'Champion Rush', count: '28 cards', accent: '#4a475c' },
  { title: 'Shadow Tactics', count: '21 cards', accent: '#8a6e63' },
  { title: 'Power Draw', count: '15 cards', accent: '#6f7284' },
  { title: 'Storm Breakers', count: '32 cards', accent: '#59627a' },
  { title: 'Crystal Core', count: '17 cards', accent: '#536d69' },
  { title: 'Dragon Flight', count: '25 cards', accent: '#7a668f' },
  { title: 'Mystic Pulse', count: '19 cards', accent: '#4a475c' },
  { title: 'Rapid Strike', count: '23 cards', accent: '#8a6e63' },
  { title: 'Iron Fortress', count: '27 cards', accent: '#6f7284' },
  { title: 'Solar Charge', count: '14 cards', accent: '#59627a' },
  { title: 'Nightfall Combo', count: '31 cards', accent: '#536d69' },
  { title: 'Emerald Path', count: '20 cards', accent: '#7a668f' },
  { title: 'Frozen Edge', count: '18 cards', accent: '#4a475c' },
  { title: 'Arcane Engine', count: '29 cards', accent: '#8a6e63' },
  { title: 'Victory Lineup', count: '13 cards', accent: '#6f7284' },
  { title: 'Titan Build', count: '34 cards', accent: '#59627a' },
  { title: 'Phoenix Squad', count: '22 cards', accent: '#536d69' },
  { title: 'Circuit Masters', count: '16 cards', accent: '#7a668f' },
];

const exploreEntries = [
  { title: 'Featured Sets', count: 'Discover new releases', accent: '#4a475c' },
  { title: 'Community Favorites', count: 'Most saved this week', accent: '#6f7284' },
  { title: 'Collector Guides', count: 'Tips for every level', accent: '#8a6e63' },
  { title: 'Trending This Week', count: 'See what collectors are watching', accent: '#536d69' },
  { title: 'Local Meetups', count: 'Find your next trade night', accent: '#59627a' },
  { title: 'New to Collecting', count: 'Start with the essentials', accent: '#7a668f' },
  { title: 'Price Watch', count: 'Track market movers', accent: '#4a475c' },
  { title: 'Rare Spotlights', count: 'Featured collectibles', accent: '#6f7284' },
  { title: 'Grading Insights', count: 'Learn card valuation', accent: '#8a6e63' },
  { title: 'Set Completion', count: 'Finish your collection', accent: '#536d69' },
  { title: 'Upcoming Releases', count: 'What arrives next', accent: '#59627a' },
  { title: 'Trading Tips', count: 'Make smarter swaps', accent: '#7a668f' },
  { title: 'Collector Stories', count: 'Community highlights', accent: '#4a475c' },
  { title: 'Event Calendar', count: 'Shows and conventions', accent: '#6f7284' },
  { title: 'Rookie Picks', count: 'Great starters to collect', accent: '#8a6e63' },
  { title: 'Market Trends', count: 'See what is rising', accent: '#536d69' },
  { title: 'Top Rated Sets', count: 'Highest community scores', accent: '#59627a' },
  { title: 'Hidden Collectibles', count: 'Underrated finds', accent: '#7a668f' },
  { title: 'Showcase Collections', count: 'Featured member binders', accent: '#4a475c' },
  { title: 'Premium Editions', count: 'Limited release highlights', accent: '#6f7284' },
  { title: 'Collection Goals', count: 'Build your wish list', accent: '#8a6e63' },
  { title: 'Expert Recommendations', count: 'Curated by collectors', accent: '#536d69' },
  { title: 'Card Art Gallery', count: 'Celebrate amazing artwork', accent: '#59627a' },
  { title: 'Community Challenges', count: 'Join monthly events', accent: '#7a668f' },
];

type Section = 'Collections' | 'Decks' | 'Explore';

const collectionTileImages = [
  require('../../assets/Screenshot 2026-07-23 222259.png'),
  require('../../assets/Screenshot 2026-07-23 222659.png'),
  require('../../assets/Screenshot 2026-07-24 080424.png'),
  require('../../assets/Screenshot 2026-07-24 080446.png'),
  require('../../assets/Screenshot 2026-07-24 080510.png'),
  require('../../assets/Screenshot 2026-07-24 080523.png'),
  require('../../assets/Screenshot 2026-07-24 080545.png'),
  require('../../assets/Screenshot 2026-07-24 080600.png'),
];

export default function CollectionsScreen({ navigation }: any) {
  const [activeSection, setActiveSection] = useState<Section>('Collections');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionEntries = activeSection === 'Collections' ? collectionEntries : activeSection === 'Decks' ? deckEntries : exploreEntries;
  const filteredEntries = sectionEntries.filter((entry) =>
    `${entry.title} ${entry.count}`.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.collectionsScreen}>
      <View style={styles.collectionsHeader}>
        <View style={styles.collectionsNavigation}>
          <HamburgerMenu navigation={navigation} inline />
          <View style={styles.collectionTabs}>
          {(['Collections', 'Decks', 'Explore'] as Section[]).map((section) => (
            <TouchableOpacity
              key={section}
              accessibilityRole="tab"
              accessibilityState={{ selected: activeSection === section }}
              onPress={() => setActiveSection(section)}
              style={[styles.collectionTab, activeSection === section && styles.activeCollectionTab]}
            >
              <Text style={[styles.collectionTabText, activeSection === section && styles.activeCollectionTabText]}>
                {section}
              </Text>
            </TouchableOpacity>
          ))}
          </View>
        </View>

        <View style={styles.collectionSearch}>
          <SearchIcon size={22} color={palette.darkText} strokeWidth={2} />
          <TextInput
            accessibilityLabel={`Search ${activeSection.toLowerCase()}`}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={activeSection === 'Decks' ? 'My decks' : `Search ${activeSection.toLowerCase()}`}
            placeholderTextColor={palette.secondaryText}
            style={styles.collectionSearchInput}
          />
        </View>

        </View>

      <ScrollView contentContainerStyle={styles.collectionsContent}>
        <View style={styles.collectionGrid}>
          {filteredEntries.map((entry, index) => (
            <TouchableOpacity
              key={entry.title}
              onPress={() => navigation.getParent()?.navigate('CardInfoFlow')}
              style={styles.collectionTileTouch}
            >
              <View style={styles.collectionTile}>
                <Image source={collectionTileImages[index % collectionTileImages.length]} style={styles.collectionTileImage} />
                <View style={styles.collectionTileCaption}>
                  <Text style={styles.collectionTileTitle} numberOfLines={1}>{entry.title}</Text>
                  <Text style={styles.collectionTileCount} numberOfLines={1}>{entry.count}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomTabBar navigation={navigation} activeTab="Collections" />
    </View>
  );
}

const styles = StyleSheet.create({
  collectionsScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  collectionsHeader: {
    paddingHorizontal: 20,
    paddingTop: 72,
  },
  collectionsNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  collectionsContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 128,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 22,
    letterSpacing: 0.2,
    fontFamily: fontFamilies.heading,
  },
  collectionTabs: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  collectionTab: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  activeCollectionTab: {
    borderBottomColor: palette.darkText,
  },
  collectionTabText: {
    color: palette.secondaryText,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: fontFamilies.body,
  },
  activeCollectionTabText: {
    color: palette.darkText,
    fontWeight: '700',
  },
  collectionSearch: {
    alignSelf: 'center',
    width: 260,
    height: 30,
    borderWidth: 2,
    borderColor: palette.darkText,
    borderRadius: 18,
    backgroundColor: palette.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  collectionSearchInput: {
    flex: 1,
    height: 28,
    marginLeft: 6,
    color: palette.darkText,
    fontFamily: fontFamilies.body,
    fontSize: 12,
  },
  sectionHint: {
    color: palette.secondaryText,
    fontSize: 14,
    marginBottom: 12,
    fontFamily: fontFamilies.heading,
  },
  collectionGrid: {
    width: 301,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  collectionTileTouch: {
    width: 141,
    marginBottom: 20,
  },
  collectionTile: {
    width: 141,
    height: 106,
    overflow: 'hidden',
    backgroundColor: palette.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    position: 'relative',
  },
  collectionTileImage: {
    width: 141,
    height: 106,
    resizeMode: 'cover',
  },
  collectionTileCaption: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 22,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: 'rgba(244, 244, 248, 0.82)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  collectionTileTitle: {
    flex: 1,
    color: palette.darkText,
    fontSize: 8,
    fontWeight: '700',
    fontFamily: fontFamilies.body,
  },
  collectionTileCount: {
    color: palette.darkText,
    fontSize: 8,
    fontFamily: fontFamilies.body,
    marginLeft: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 4,
    fontFamily: fontFamilies.heading,
  },
  count: {
    color: palette.secondaryText,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: fontFamilies.heading,
  },
});
