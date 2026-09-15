import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';

const articles = [
  { title: 'How to grade your pull', snippet: 'Learn what collectors look for in condition and rarity.' },
  { title: 'Top 5 modern sets', snippet: 'A quick guide to the hottest releases this season.' },
  { title: 'Protecting your binder', snippet: 'Smart display choices that preserve card quality over time.' },
];

export default function BlogScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
      <InlineScreenHeader navigation={navigation} title="Blog" />
      {articles.map((article) => (
        <View key={article.title} style={styles.articleCard}>
          <Text style={styles.category}>Insights</Text>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.snippet}>{article.snippet}</Text>
        </View>
      ))}
      </ScrollView>
      <BottomTabBar navigation={navigation} activeTab="Blog" />
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
    letterSpacing: 0.2,
    fontFamily: fontFamilies.heading,
  },
  articleCard: {
    backgroundColor: palette.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  category: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
    fontFamily: fontFamilies.heading,
  },
  title: {
    color: palette.darkText,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    fontFamily: fontFamilies.heading,
  },
  snippet: {
    color: palette.secondaryText,
    lineHeight: 20,
    fontSize: 14,
    fontFamily: fontFamilies.heading,
  },
});
