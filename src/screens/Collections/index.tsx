import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const collections = [
  { title: 'Legendary Pulls', count: '18 cards', accent: '#4a475c' },
  { title: 'Starter Binder', count: '42 cards', accent: '#6f7284' },
  { title: 'Vault of Rares', count: '9 cards', accent: '#2f3642' },
  { title: 'Favorite Set', count: '31 cards', accent: '#5b5d76' },
];

export default function CollectionsScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Collections</Text>
      {collections.map((item) => (
        <TouchableOpacity key={item.title} onPress={() => navigation.navigate('CardInfoFlow')}>
          <View style={styles.card}>
            <View style={[styles.badge, { backgroundColor: item.accent }]} />
            <View style={styles.textWrap}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.count}>{item.count}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 22,
    letterSpacing: 0.2,
    fontFamily: fontFamilies.heading,
  },
  card: {
    backgroundColor: palette.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
  },
  badge: {
    width: 56,
    height: 56,
    borderRadius: 14,
    marginRight: 14,
  },
  textWrap: {
    flex: 1,
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
