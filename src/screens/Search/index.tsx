import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';

const searchResults = [
  { title: 'Legendary foil pull', tag: 'Collectors' },
  { title: 'Binder accessories', tag: 'Supplies' },
  { title: 'Auto-trade card sleeves', tag: 'Trade' },
  { title: 'Collector showcase', tag: 'Display' },
];

export default function SearchScreen({ navigation }: any) {
  return (
    <View style={styles.searchScreen}>
      <NavHeader navigation={navigation} title="Search" />
      <ScrollView contentContainerStyle={styles.searchContent}>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder="Search CardFolio"
            placeholderTextColor={palette.secondaryText}
            style={styles.searchInput}
            editable={false}
          />
        </View>

        <View style={styles.popularSearchesHeader}>
          <Text style={styles.popularSearchesLabel}>Popular searches</Text>
        </View>

        {searchResults.map((result) => (
          <TouchableOpacity key={result.title} onPress={() => navigation.navigate('CardInfoFlow')}>
            <View style={styles.searchResultItem}>
              <View style={styles.searchResultIndicator} />
              <View style={styles.searchResultContent}>
                <Text style={styles.searchResultTitle}>{result.title}</Text>
                <Text style={styles.searchResultTag}>{result.tag}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  searchContent: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 128,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 18,
    letterSpacing: -0.5,
    fontFamily: fontFamilies.heading,
  },
  searchInputContainer: {
    backgroundColor: palette.panel,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: palette.border,
    paddingHorizontal: 16,
    marginBottom: 18,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  searchInput: {
    height: 52,
    color: palette.darkText,
    fontSize: 16,
    fontFamily: fontFamilies.heading,
  },
  popularSearchesHeader: {
    marginBottom: 10,
  },
  popularSearchesLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: palette.subtle,
    fontFamily: fontFamilies.heading,
  },
  searchResultItem: {
    backgroundColor: palette.panel,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#edf1f7',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  searchResultIndicator: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.accent,
    marginRight: 12,
    opacity: 0.8,
  },
  searchResultContent: {
    flex: 1,
  },
  searchResultTitle: {
    color: palette.darkText,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
    fontFamily: fontFamilies.heading,
  },
  searchResultTag: {
    color: palette.secondaryText,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    fontFamily: fontFamilies.heading,
  },
});
