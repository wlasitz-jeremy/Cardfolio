import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { colors, palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const homeSections = [
  { title: 'Recently added', cards: [
    { image: require('../../assets/Screenshot 2026-07-23 151905.png') },
    { image: require('../../assets/Screenshot 2026-07-23 151914.png') },
    { image: require('../../assets/Screenshot 2026-07-23 152027.png') },
    { image: require('../../assets/Screenshot 2026-07-23 152036.png') },
    { image: require('../../assets/Screenshot 2026-07-23 152045.png') },
    { image: require('../../assets/Screenshot 2026-07-23 152053.png') },
  ] },
  { title: 'Top gains / losses', cards: [
    { image: require('../../assets/Screenshot 2026-07-23 152102.png'), value: '29%', rising: true },
    { image: require('../../assets/Screenshot 2026-07-23 212343.png'), value: '72%', rising: false },
    { image: require('../../assets/Screenshot 2026-07-23 212608.png'), value: '4', rising: true },
    { image: require('../../assets/Screenshot 2026-07-23 212632.png'), value: '18%', rising: true },
    { image: require('../../assets/Screenshot 2026-07-23 220818.png'), value: '41%', rising: false },
  ] },
  { title: 'Collection progress', cards: [
    { image: require('../../assets/Screenshot 2026-07-23 221158.png'), progress: 72 },
    { image: require('../../assets/Screenshot 2026-07-23 221400.png'), progress: 48 },
    { image: require('../../assets/Screenshot 2026-07-23 221726.png'), progress: 31 },
    { image: require('../../assets/Screenshot 2026-07-23 222042.png'), progress: 84 },
  ] },
];

export default function HomeScreen({ navigation }: any) {
  const goToRoot = (screen: string) => navigation.getParent()?.navigate(screen);

  return (
    <View style={styles.homeScreen}>
      <NavHeader navigation={navigation} title="Welcome" centerTitle />

        <Text style={styles.welcomeGreeting}>Smeagol Reagol Rol kien Tolkien</Text>

        <View style={styles.quickSearch}>
          <TouchableOpacity style={styles.searchInputContainer} onPress={() => goToRoot('Search')}>
            <SymbolView accessibilityElementsHidden name={{ ios: 'magnifyingglass', android: 'search', web: 'search' }} tintColor={palette.darkText} size={24} />
            <TextInput editable={false} placeholder="quick search" placeholderTextColor={palette.secondaryText} style={styles.searchInput} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Choose search category" style={styles.searchCategoryButton}>
            <Text style={styles.searchCategoryText}>Game</Text>
            <SymbolView accessibilityElementsHidden name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }} tintColor={palette.darkText} size={18} style={styles.categoryChevron} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.homeContent} showsVerticalScrollIndicator={false}>
          {homeSections.map((section) => (
            <View key={section.title} style={styles.homeSection}>
              <Text style={styles.homeSectionTitle}>{section.title}</Text>
              <View style={styles.cardCarousel}>
                <TouchableOpacity accessibilityLabel={`Previous ${section.title}`} style={styles.carouselArrow}><SymbolView accessibilityElementsHidden name={{ ios: 'chevron.left', android: 'chevron_left', web: 'chevron_left' }} tintColor={palette.darkText} size={20} /></TouchableOpacity>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContent}>
                  {section.cards.map((card, index) => (
                    <TouchableOpacity key={`${section.title}-${index}`} accessibilityLabel={`Open ${section.title} card ${index + 1}`} onPress={() => goToRoot('CardInfoFlow')} style={styles.carouselCard}>
                      <Image source={card.image} style={styles.cardImage} />
                      {'value' in card && card.value ? <View style={styles.valueBadge}><Text style={styles.valueText}>{card.value}</Text><Text style={[styles.trend, card.rising ? styles.trendUp : styles.trendDown]}>{card.rising ? '↗' : '↘'}</Text></View> : null}
                      {'progress' in card && typeof card.progress === 'number' ? <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${card.progress}%` }]} /></View> : null}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity accessibilityLabel={`Next ${section.title}`} style={styles.carouselArrow}><SymbolView accessibilityElementsHidden name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }} tintColor={palette.darkText} size={20} /></TouchableOpacity>
              </View>
              <View style={styles.carouselPagination}>{Array.from({ length: 3 }).map((_, index) => <SymbolView key={index} accessibilityElementsHidden name={{ ios: 'circle.fill', android: 'circle', web: 'circle' }} tintColor={palette.darkText} size={7} />)}</View>
            </View>
          ))}
        </ScrollView>
      <BottomTabBar navigation={navigation} activeTab="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: { flex: 1, backgroundColor: palette.background },
  homeContent: { paddingHorizontal: 20, paddingTop: 0, paddingBottom: 112, gap: 7 },
  welcomeGreeting: { color: palette.secondaryText, fontFamily: fontFamilies.heading, fontSize: 16, fontWeight: '700', marginTop: 8, marginBottom: 16, marginHorizontal: 20, textAlign: 'center' },
  quickSearch: { flexDirection: 'row', height: 30, marginBottom: 7, marginHorizontal: 45 },
  searchInputContainer: { flex: 1, borderWidth: 2, borderColor: palette.darkText, borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingLeft: 13, backgroundColor: palette.white },
  searchInput: { flex: 1, color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 12, paddingVertical: 0, marginLeft: 4 },
  searchCategoryButton: { width: 90, marginLeft: -1, borderWidth: 2, borderColor: palette.darkText, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: palette.white },
  searchCategoryText: { color: palette.accent, fontFamily: fontFamilies.body, fontSize: 12 },
  categoryChevron: { transform: [{ rotate: '90deg' }] },
  homeSection: { marginTop: 0 },
  homeSectionTitle: { color: palette.secondaryText, fontFamily: fontFamilies.body, fontSize: 12, marginBottom: 7 },
  cardCarousel: { height: 150, borderRadius: 10, backgroundColor: colors.LightStructuralPanels, shadowColor: '#6b5a89', shadowOpacity: 0.85, shadowRadius: 6, shadowOffset: { width: 0, height: 4 }, elevation: 3, flexDirection: 'row', alignItems: 'center' },
  carouselArrow: { width: 30, alignItems: 'center', justifyContent: 'center' },
  carouselContent: { flexGrow: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 30 },
  carouselCard: { width: 75, height: 75, justifyContent: 'flex-end' },
  cardImage: { width: 75, height: 75, borderRadius: 10, backgroundColor: '#b8b6cf' },
  valueBadge: { position: 'absolute', bottom: 16, left: 4, right: 4, height: 20, borderRadius: 4, backgroundColor: 'rgba(235,235,235,0.9)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  valueText: { color: palette.darkText, fontSize: 11, fontFamily: fontFamilies.body },
  trend: { fontSize: 17, marginLeft: 4 },
  trendUp: { color: '#17a57a' },
  trendDown: { color: '#df4b45' },
  progressTrack: { position: 'absolute', bottom: 2, left: 4, right: 4, height: 8, borderRadius: 6, backgroundColor: '#c9c9d0' },
  progressFill: { height: 8, borderRadius: 6, backgroundColor: '#111315' },
  carouselPagination: { height: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: -10, marginTop: -2 },
  paginationDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4f5868' },
  activePaginationDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4f5868' },
});
