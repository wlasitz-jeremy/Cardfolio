import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import NavHeader from '../../components/NavHeader/NavHeader';

const universeEntries = [
  { name: 'Celestial Forge', tag: 'Mythic', tone: '#dfe7f8' },
  { name: 'Shadow Circuit', tag: 'Rare', tone: '#e7e2f7' },
  { name: 'Solar Archive', tag: 'Legendary', tone: '#dfe9e0' },
];

export default function UniverseScreen({ navigation }: any) {
  return (
    <View style={styles.universeScreen}>
      <NavHeader navigation={navigation} title="Universe" centerTitle />
      <ScrollView contentContainerStyle={styles.universeContent}>
      {universeEntries.map((entry) => (
        <View key={entry.name} style={styles.universeEntry}>
          <View style={[styles.universeArtwork, { backgroundColor: entry.tone }]} />
          <View style={styles.universeDetails}>
            <Text style={styles.universeName}>{entry.name}</Text>
            <View style={styles.universeTagBadge}>
              <Text style={styles.universeTagText}>{entry.tag}</Text>
            </View>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  universeScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  universeContent: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 128,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  universeEntry: {
    backgroundColor: palette.panel,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 1,
  },
  universeArtwork: {
    width: 72,
    height: 72,
    borderRadius: 16,
    marginRight: 14,
  },
  universeDetails: {
    flex: 1,
  },
  universeName: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  universeTagBadge: {
    alignSelf: 'flex-start',
    backgroundColor: palette.softAccent,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  universeTagText: {
    color: palette.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
