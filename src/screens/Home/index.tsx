import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Search as SearchIcon } from 'lucide-react-native';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const homeSections = [
  { title: 'Recently added', cards: [
    { image: require('../../assets/Screenshot 2026-07-24 101602.png') },
    { image: require('../../assets/Screenshot 2026-07-24 102624.png') },
    { image: require('../../assets/Screenshot 2026-07-24 101519.png') },
    { image: require('../../assets/Screenshot 2026-07-24 101540.png') },
    { image: require('../../assets/Screenshot 2026-07-24 101234.png') },
    { image: require('../../assets/Screenshot 2026-07-24 102157.png') },
  ] },
  { title: 'Top gains / losses', cards: [
    { image: require('../../assets/Screenshot 2026-07-24 101440.png'), value: '29%', rising: true },
    { image: require('../../assets/Screenshot 2026-07-24 101408.png'), value: '72%', rising: false },
    { image: require('../../assets/Screenshot 2026-07-24 101321.png'), value: '4%', rising: true },
    { image: require('../../assets/Screenshot 2026-07-24 081314.png'), value: '18%', rising: true },
    { image: require('../../assets/Screenshot 2026-07-24 080810.png'), value: '41%', rising: false },
    { image: require('../../assets/Screenshot 2026-07-24 080746.png'), value: '12%', rising: true },
  ] },
  { title: 'Collection progress', cards: [
    { image: require('../../assets/Screenshot 2026-07-24 103103.png'), progress: 72 },
    { image: require('../../assets/Screenshot 2026-07-24 103047.png'), progress: 48 },
    { image: require('../../assets/Screenshot 2026-07-24 103034.png'), progress: 31 },
    { image: require('../../assets/Screenshot 2026-07-24 103018.png'), progress: 84 },
    { image: require('../../assets/Screenshot 2026-07-24 103034.png'), progress: 56 },
    { image: require('../../assets/Screenshot 2026-07-24 103047.png'), progress: 39 },
  ] },
];

export default function HomeScreen({ navigation }: any) {
  const goToRoot = (screen: string) => navigation.getParent()?.navigate(screen);

  return (
    <SafeAreaView style={styles.homeSafeArea}>
      <View style={styles.homeScreen}>
        <View style={styles.welcomeHeader}>
          <View style={styles.menuSlot}><HamburgerMenu navigation={navigation} inline /></View>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <TouchableOpacity accessibilityLabel="Open location" onPress={() => goToRoot('Location')} style={styles.locationButton}>
            <MapPin size={40} color={palette.darkText} strokeWidth={1.8} />
          </TouchableOpacity>
        </View>

        <Text style={styles.welcomeGreeting}>Smeagol Reagol Rol kien Tolkien</Text>

        <View style={styles.quickSearch}>
          <TouchableOpacity style={styles.searchInputContainer} onPress={() => goToRoot('Search')}>
            <SearchIcon size={25} color={palette.darkText} strokeWidth={2} />
            <TextInput editable={false} placeholder="quick search" placeholderTextColor={palette.secondaryText} style={styles.searchInput} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Choose search category" style={styles.searchCategoryButton}>
            <Text style={styles.searchCategoryText}>Game</Text>
            <ChevronDown size={21} color={palette.darkText} strokeWidth={2.2} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.homeContent} showsVerticalScrollIndicator={false}>
          {homeSections.map((section) => (
            <View key={section.title} style={styles.homeSection}>
              <Text style={styles.homeSectionTitle}>{section.title}</Text>
              <View style={styles.cardCarousel}>
                <TouchableOpacity accessibilityLabel={`Previous ${section.title}`} style={styles.carouselArrow}><ChevronLeft size={25} color={palette.darkText} strokeWidth={2.2} /></TouchableOpacity>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContent}>
                  {section.cards.map((card, index) => (
                    <TouchableOpacity key={`${section.title}-${index}`} accessibilityLabel={`Open ${section.title} card ${index + 1}`} onPress={() => goToRoot('CardInfoFlow')} style={styles.carouselCard}>
                      <Image source={card.image} style={styles.cardImage} />
                      {'value' in card && card.value ? <View style={styles.valueBadge}><Text style={styles.valueText}>{card.value}</Text><Text style={[styles.trend, card.rising ? styles.trendUp : styles.trendDown]}>{card.rising ? '↗' : '↘'}</Text></View> : null}
                      {'progress' in card && typeof card.progress === 'number' ? <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${card.progress}%` }]} /></View> : null}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity accessibilityLabel={`Next ${section.title}`} style={styles.carouselArrow}><ChevronRight size={25} color={palette.darkText} strokeWidth={2.2} /></TouchableOpacity>
              </View>
              <View style={styles.carouselPagination}>{Array.from({ length: 7 }).map((_, index) => <View key={index} style={[styles.paginationDot, index === 0 && styles.activePaginationDot]} />)}</View>
            </View>
          ))}
        </ScrollView>
      </View>
      <BottomTabBar navigation={navigation} activeTab="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeSafeArea: { flex: 1, backgroundColor: palette.background },
  homeScreen: { flex: 1, backgroundColor: palette.background },
  homeContent: { paddingHorizontal: 28, paddingTop: 0, paddingBottom: 128 },
  welcomeHeader: { marginHorizontal: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: 60, marginTop: 20 },
  menuSlot: { width: 60, height: 60 },
  welcomeTitle: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 48, fontWeight: '700', lineHeight: 54, includeFontPadding: false },
  locationButton: { width: 60, height: 60, borderRadius: 10, borderWidth: 1, borderColor: '#000000', backgroundColor: palette.white, alignItems: 'center', justifyContent: 'center', shadowColor: palette.darkText, shadowOpacity: 1, shadowRadius: 0, shadowOffset: { width: 5, height: 5 }, elevation: 5 },
  welcomeGreeting: { color: '#4f5868', fontFamily: fontFamilies.heading, fontSize: 16, fontWeight: '700', marginTop: 16, marginBottom: 17, marginHorizontal: 28, textAlign: 'center' },
  quickSearch: { flexDirection: 'row', height: 42, marginBottom: 10, marginHorizontal: 28 },
  searchInputContainer: { flex: 1, borderWidth: 2, borderColor: '#111315', borderTopLeftRadius: 24, borderBottomLeftRadius: 24, flexDirection: 'row', alignItems: 'center', paddingLeft: 13, backgroundColor: palette.white },
  searchInput: { flex: 1, color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 13, paddingVertical: 0, marginLeft: 5 },
  searchCategoryButton: { width: 94, borderWidth: 2, borderColor: '#111315', borderLeftWidth: 1, borderTopRightRadius: 24, borderBottomRightRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: palette.white },
  searchCategoryText: { color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 13 },
  homeSection: { marginTop: 2 },
  homeSectionTitle: { color: '#4f5868', fontFamily: fontFamilies.body, fontSize: 14, marginBottom: 7 },
  cardCarousel: { height: 160, borderRadius: 10, borderWidth: 1.5, borderColor: '#76669b', backgroundColor: '#e3e1f4', shadowColor: '#76669b', shadowOpacity: 0.42, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, flexDirection: 'row', alignItems: 'center' },
  carouselArrow: { width: 30, alignItems: 'center', justifyContent: 'center' },
  carouselContent: { flexGrow: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, gap: 12 },
  carouselCard: { width: 80, height: 96, justifyContent: 'flex-end' },
  cardImage: { width: 80, height: 80, borderRadius: 10, backgroundColor: '#b8b6cf' },
  valueBadge: { position: 'absolute', bottom: 16, left: 4, right: 4, height: 20, borderRadius: 4, backgroundColor: 'rgba(235,235,235,0.9)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  valueText: { color: palette.darkText, fontSize: 11, fontFamily: fontFamilies.body },
  trend: { fontSize: 17, marginLeft: 4 },
  trendUp: { color: '#17a57a' },
  trendDown: { color: '#df4b45' },
  progressTrack: { position: 'absolute', bottom: 2, left: 4, right: 4, height: 8, borderRadius: 6, backgroundColor: '#c9c9d0' },
  progressFill: { height: 8, borderRadius: 6, backgroundColor: '#111315' },
  carouselPagination: { height: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 3 },
  paginationDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4f5868' },
  activePaginationDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4f5868' },
});
