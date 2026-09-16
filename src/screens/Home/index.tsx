import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { colors, palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const searchIconAsset = 'https://www.figma.com/api/mcp/asset/843b92a0-bb76-4765-aab1-17a95ffa5eec.svg';
const markerPinAsset = 'https://www.figma.com/api/mcp/asset/54634611-7417-4e6c-b5b8-776d6205874e.svg';
const chevronLeftAsset = 'https://www.figma.com/api/mcp/asset/c01d25b9-9b6e-4a46-8863-f0a12674dab5.svg';
const chevronRightAsset = 'https://www.figma.com/api/mcp/asset/0124490c-c6eb-4e19-bfa1-e1ea67bb4ae3.svg';
const dotsAsset = 'https://www.figma.com/api/mcp/asset/5e0954c0-7f96-4048-b559-1d490a807c6c.svg';

const homeSections = [
  { title: 'Recently added', cards: [
    { image: 'https://www.figma.com/api/mcp/asset/2c0782c8-cd19-4c78-9c94-ef55e5440166.png' },
    { image: 'https://www.figma.com/api/mcp/asset/d7cfca5d-5455-4f58-9e42-59b0323190ca.png' },
    { image: 'https://www.figma.com/api/mcp/asset/2e4f6cea-0a51-418d-a0f8-a83474d2140a.png' },
    { image: 'https://www.figma.com/api/mcp/asset/e537d6c5-74d4-4841-bc34-7240a0ea635b.png' },
    { image: 'https://www.figma.com/api/mcp/asset/18b444f5-5849-466c-8a61-3fd3084da20e.png' },
    { image: 'https://www.figma.com/api/mcp/asset/f5d8af93-43f9-4cfd-89f5-788d77fe43ab.png' },
  ] },
  { title: 'Top gains / losses', cards: [
    { image: 'https://www.figma.com/api/mcp/asset/91c3609b-41a6-420f-9c2f-706e665a7118.png', value: '29%', rising: true },
    { image: 'https://www.figma.com/api/mcp/asset/e8e089fa-bc6a-4143-b681-8687f0b98a71.png', value: '72%', rising: false },
    { image: 'https://www.figma.com/api/mcp/asset/668e98be-ca69-4a81-9af8-7af9543c5500.png', value: '4', rising: true },
    { image: 'https://www.figma.com/api/mcp/asset/d52ce989-810f-42a0-9e6c-ef56d6af15e6.png', value: '18%', rising: true },
    { image: 'https://www.figma.com/api/mcp/asset/7d86d414-e3b6-4049-9a3c-589c7d891017.png', value: '41%', rising: false },
  ] },
  { title: 'Collection progress', cards: [
    { image: 'https://www.figma.com/api/mcp/asset/3f983cf5-693a-4fbb-9b74-09aaebd954fc.png', progress: 72 },
    { image: 'https://www.figma.com/api/mcp/asset/0440265e-b915-465f-8aba-d61d2d9dcd81.png', progress: 48 },
    { image: 'https://www.figma.com/api/mcp/asset/a826d033-1858-4468-86d6-e4ff1de5dad9.png', progress: 31 },
    { image: 'https://www.figma.com/api/mcp/asset/0cf02da4-a07a-4fdf-a21b-9a22a07b2e50.png', progress: 84 },
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
            <SvgUri accessibilityElementsHidden uri={markerPinAsset} width={60} height={60} />
          </TouchableOpacity>
        </View>

        <Text style={styles.welcomeGreeting}>Smeagol Reagol Rol kien Tolkien</Text>

        <View style={styles.quickSearch}>
          <TouchableOpacity style={styles.searchInputContainer} onPress={() => goToRoot('Search')}>
            <SvgUri accessibilityElementsHidden uri={searchIconAsset} width={24} height={24} />
            <TextInput editable={false} placeholder="quick search" placeholderTextColor={palette.secondaryText} style={styles.searchInput} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Choose search category" style={styles.searchCategoryButton}>
            <Text style={styles.searchCategoryText}>Game</Text>
            <SvgUri accessibilityElementsHidden uri={chevronRightAsset} width={18} height={18} style={styles.categoryChevron} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.homeContent} showsVerticalScrollIndicator={false}>
          {homeSections.map((section) => (
            <View key={section.title} style={styles.homeSection}>
              <Text style={styles.homeSectionTitle}>{section.title}</Text>
              <View style={styles.cardCarousel}>
                <TouchableOpacity accessibilityLabel={`Previous ${section.title}`} style={styles.carouselArrow}><SvgUri accessibilityElementsHidden uri={chevronLeftAsset} width={20} height={20} /></TouchableOpacity>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContent}>
                  {section.cards.map((card, index) => (
                    <TouchableOpacity key={`${section.title}-${index}`} accessibilityLabel={`Open ${section.title} card ${index + 1}`} onPress={() => goToRoot('CardInfoFlow')} style={styles.carouselCard}>
                      <Image source={{ uri: card.image }} style={styles.cardImage} />
                      {'value' in card && card.value ? <View style={styles.valueBadge}><Text style={styles.valueText}>{card.value}</Text><Text style={[styles.trend, card.rising ? styles.trendUp : styles.trendDown]}>{card.rising ? '↗' : '↘'}</Text></View> : null}
                      {'progress' in card && typeof card.progress === 'number' ? <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${card.progress}%` }]} /></View> : null}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity accessibilityLabel={`Next ${section.title}`} style={styles.carouselArrow}><SvgUri accessibilityElementsHidden uri={chevronRightAsset} width={20} height={20} /></TouchableOpacity>
              </View>
              <View style={styles.carouselPagination}>{Array.from({ length: 3 }).map((_, index) => <SvgUri key={index} accessibilityElementsHidden uri={dotsAsset} width={24} height={24} />)}</View>
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
  homeContent: { paddingHorizontal: 20, paddingTop: 0, paddingBottom: 112, gap: 7 },
  welcomeHeader: { marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: 60, marginTop: 18 },
  menuSlot: { width: 60, height: 60 },
  welcomeTitle: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 46, fontWeight: '700', lineHeight: 54, includeFontPadding: false },
  locationButton: { width: 60, height: 60, alignItems: 'center', justifyContent: 'center' },
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
