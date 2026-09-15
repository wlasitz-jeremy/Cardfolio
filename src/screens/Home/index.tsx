import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Search as SearchIcon } from 'lucide-react-native';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const sections = [
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.headerRow}>
          <View style={styles.headerSide}><HamburgerMenu navigation={navigation} inline /></View>
          <Text style={styles.title}>Welcome</Text>
          <TouchableOpacity accessibilityLabel="Open location" onPress={() => goToRoot('Location')} style={styles.locationButton}>
            <MapPin size={40} color={palette.darkText} strokeWidth={1.8} />
          </TouchableOpacity>
        </View>

        <Text style={styles.greeting}>Smeagol Reagol Rol kien Tolkien</Text>

        <View style={styles.searchRow}>
          <TouchableOpacity style={styles.searchField} onPress={() => goToRoot('Search')}>
            <SearchIcon size={25} color={palette.darkText} strokeWidth={2} />
            <TextInput editable={false} placeholder="quick search" placeholderTextColor={palette.secondaryText} style={styles.searchInput} />
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="Choose search category" style={styles.categoryButton}>
            <Text style={styles.categoryText}>Game</Text>
            <ChevronDown size={21} color={palette.darkText} strokeWidth={2.2} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {sections.map((section) => (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.carousel}>
                <TouchableOpacity accessibilityLabel={`Previous ${section.title}`} style={styles.arrowButton}><ChevronLeft size={25} color={palette.darkText} strokeWidth={2.2} /></TouchableOpacity>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardRow}>
                  {section.cards.map((card, index) => (
                    <TouchableOpacity key={`${section.title}-${index}`} accessibilityLabel={`Open ${section.title} card ${index + 1}`} onPress={() => goToRoot('CardInfoFlow')} style={styles.cardSlot}>
                      <Image source={card.image} style={styles.cardImage} />
                      {'value' in card && card.value ? <View style={styles.valueBadge}><Text style={styles.valueText}>{card.value}</Text><Text style={[styles.trend, card.rising ? styles.trendUp : styles.trendDown]}>{card.rising ? '↗' : '↘'}</Text></View> : null}
                      {'progress' in card && typeof card.progress === 'number' ? <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${card.progress}%` }]} /></View> : null}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity accessibilityLabel={`Next ${section.title}`} style={styles.arrowButton}><ChevronRight size={25} color={palette.darkText} strokeWidth={2.2} /></TouchableOpacity>
              </View>
              <View style={styles.dots}>{Array.from({ length: 7 }).map((_, index) => <View key={index} style={[styles.dot, index === 0 && styles.dotActive]} />)}</View>
            </View>
          ))}
        </ScrollView>
      </View>
      <BottomTabBar navigation={navigation} activeTab="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: palette.background },
  screen: { flex: 1, backgroundColor: palette.background },
  content: { paddingHorizontal: 28, paddingTop: 0, paddingBottom: 128 },
  headerRow: { marginHorizontal: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: 60, marginTop: 20 },
  headerSide: { width: 60, height: 60 },
  title: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 48, fontWeight: '700', lineHeight: 54, includeFontPadding: false },
  locationButton: { width: 60, height: 60, borderRadius: 10, borderWidth: 1, borderColor: '#000000', backgroundColor: palette.white, alignItems: 'center', justifyContent: 'center', shadowColor: palette.darkText, shadowOpacity: 1, shadowRadius: 0, shadowOffset: { width: 5, height: 5 }, elevation: 5 },
  greeting: { color: '#4f5868', fontFamily: fontFamilies.heading, fontSize: 16, fontWeight: '700', marginTop: 16, marginBottom: 17, marginHorizontal: 28, textAlign: 'center' },
  searchRow: { flexDirection: 'row', height: 42, marginBottom: 10, marginHorizontal: 28 },
  searchField: { flex: 1, borderWidth: 2, borderColor: '#111315', borderTopLeftRadius: 24, borderBottomLeftRadius: 24, flexDirection: 'row', alignItems: 'center', paddingLeft: 13, backgroundColor: palette.white },
  searchInput: { flex: 1, color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 13, paddingVertical: 0, marginLeft: 5 },
  categoryButton: { width: 94, borderWidth: 2, borderColor: '#111315', borderLeftWidth: 1, borderTopRightRadius: 24, borderBottomRightRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: palette.white },
  categoryText: { color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 13 },
  section: { marginTop: 2 },
  sectionTitle: { color: '#4f5868', fontFamily: fontFamilies.body, fontSize: 14, marginBottom: 7 },
  carousel: { height: 160, borderRadius: 10, borderWidth: 1.5, borderColor: '#76669b', backgroundColor: '#e3e1f4', shadowColor: '#76669b', shadowOpacity: 0.42, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, flexDirection: 'row', alignItems: 'center' },
  arrowButton: { width: 30, alignItems: 'center', justifyContent: 'center' },
  cardRow: { flexGrow: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, gap: 12 },
  cardSlot: { width: 80, height: 96, justifyContent: 'flex-end' },
  cardImage: { width: 80, height: 80, borderRadius: 10, backgroundColor: '#b8b6cf' },
  valueBadge: { position: 'absolute', bottom: 16, left: 4, right: 4, height: 20, borderRadius: 4, backgroundColor: 'rgba(235,235,235,0.9)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  valueText: { color: palette.darkText, fontSize: 11, fontFamily: fontFamilies.body },
  trend: { fontSize: 17, marginLeft: 4 },
  trendUp: { color: '#17a57a' },
  trendDown: { color: '#df4b45' },
  progressTrack: { position: 'absolute', bottom: 2, left: 4, right: 4, height: 8, borderRadius: 6, backgroundColor: '#c9c9d0' },
  progressFill: { height: 8, borderRadius: 6, backgroundColor: '#111315' },
  dots: { height: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 3 },
  dot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4f5868' },
  dotActive: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#4f5868' },
});
