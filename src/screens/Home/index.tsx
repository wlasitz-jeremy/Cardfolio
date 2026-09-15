import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const palette = {
  background: '#f4f4f8',
  darkText: '#1e293b',
  secondaryText: '#424b57',
  accent: '#4a475c',
  white: '#ffffff',
  softWhite: '#eef1f5',
  muted: '#767677',
};

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Good evening</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.smallAction}>View all</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search cards, collections, or articles"
            placeholderTextColor={palette.secondaryText}
            style={styles.searchText}
            editable={false}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CardInfoFlow')}>
        <View style={styles.heroCard}>
          <Text style={styles.heroEyebrow}>Featured collection</Text>
          <Text style={styles.heroTitle}>The Collector’s Vault</Text>
          <Text style={styles.heroText}>Rare finds and standout releases from your favorite sets.</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending now</Text>
      </View>

      <View style={styles.grid}>
        {['Pikachu Gold', 'Midnight Duel', 'Sunset Seraph', 'Abyss Echo'].map((item, index) => (
          <TouchableOpacity
            key={item}
            onPress={() => navigation.navigate('CardInfoFlow')}
            style={[styles.tile, index % 2 === 1 && styles.tileAlt]}
          >
            <View>
              <Text style={styles.tileBadge}>#{index + 1}</Text>
              <Text style={styles.tileTitle}>{item}</Text>
            </View>
            <Text style={styles.tileMeta}>Updated 2h ago</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: palette.darkText,
    letterSpacing: 0.2,
    fontFamily: 'Oswald',
  },
  smallAction: {
    fontSize: 14,
    fontWeight: '700',
    color: palette.accent,
    fontFamily: 'Oswald',
  },
  searchBox: {
    backgroundColor: palette.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dfe3ea',
    paddingHorizontal: 14,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  searchText: {
    color: palette.darkText,
    fontSize: 14,
    minHeight: 52,
    justifyContent: 'center',
    fontFamily: 'Oswald',
  },
  heroCard: {
    backgroundColor: palette.accent,
    borderRadius: 18,
    padding: 22,
    marginBottom: 26,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  heroEyebrow: {
    color: '#d8d0ea',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
    fontFamily: 'Oswald',
  },
  heroTitle: {
    color: palette.white,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    fontFamily: 'Oswald',
  },
  heroText: {
    color: '#f3f2f8',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Oswald',
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: palette.darkText,
    fontFamily: 'Oswald',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  tile: {
    width: '48%',
    backgroundColor: palette.white,
    borderRadius: 14,
    padding: 18,
    minHeight: 120,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  tileAlt: {
    backgroundColor: palette.softWhite,
  },
  tileBadge: {
    color: palette.accent,
    fontWeight: '700',
    fontSize: 12,
    fontFamily: 'Oswald',
  },
  tileTitle: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
    fontFamily: 'Oswald',
  },
  tileMeta: {
    marginTop: 8,
    color: palette.secondaryText,
    fontSize: 12,
    fontFamily: 'Oswald',
  },
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: palette.darkText,
    letterSpacing: 0.2,
  },
  smallAction: {
    fontSize: 14,
    fontWeight: '700',
    color: palette.accent,
  },
  searchBox: {
    backgroundColor: palette.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dfe3ea',
    paddingHorizontal: 14,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  searchText: {
    color: palette.darkText,
    fontSize: 14,
    minHeight: 52,
    justifyContent: 'center',
  },
  heroCard: {
    backgroundColor: palette.accent,
    borderRadius: 18,
    padding: 22,
    marginBottom: 26,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  heroEyebrow: {
    color: '#d8d0ea',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  heroTitle: {
    color: palette.white,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroText: {
    color: '#f3f2f8',
    fontSize: 14,
    lineHeight: 20,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: palette.darkText,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  tile: {
    width: '48%',
    backgroundColor: palette.white,
    borderRadius: 14,
    padding: 18,
    minHeight: 120,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  tileAlt: {
    backgroundColor: palette.softWhite,
  },
  tileBadge: {
    color: palette.accent,
    fontWeight: '700',
    fontSize: 12,
  },
  tileTitle: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
  },
  tileMeta: {
    marginTop: 8,
    color: palette.secondaryText,
    fontSize: 12,
  },
});
