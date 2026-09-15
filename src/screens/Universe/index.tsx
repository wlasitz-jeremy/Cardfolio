import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';

const universeCards = [
  { name: 'Celestial Forge', tag: 'Mythic', tone: '#dfe7f8' },
  { name: 'Shadow Circuit', tag: 'Rare', tone: '#e7e2f7' },
  { name: 'Solar Archive', tag: 'Legendary', tone: '#dfe9e0' },
];

export default function UniverseScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
      <InlineScreenHeader navigation={navigation} title="Universe" />

      {universeCards.map((entry) => (
        <View key={entry.name} style={styles.card}>
          <View style={[styles.art, { backgroundColor: entry.tone }]} />
          <View style={styles.textWrap}>
            <Text style={styles.name}>{entry.name}</Text>
            <View style={styles.tagPill}>
              <Text style={styles.tag}>{entry.tag}</Text>
            </View>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 128,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  card: {
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
  art: {
    width: 72,
    height: 72,
    borderRadius: 16,
    marginRight: 14,
  },
  textWrap: {
    flex: 1,
  },
  name: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  tagPill: {
    alignSelf: 'flex-start',
    backgroundColor: palette.softAccent,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tag: {
    color: palette.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
