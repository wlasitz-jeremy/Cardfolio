import { ScrollView, StyleSheet, Text, View } from 'react-native';

const palette = {
  background: '#f4f4f8',
  darkText: '#1e293b',
  secondaryText: '#424b57',
  accent: '#4a475c',
  white: '#ffffff',
};

const articles = [
  { title: 'How to grade your pull', snippet: 'Learn what collectors look for in condition and rarity.' },
  { title: 'Top 5 modern sets', snippet: 'A quick guide to the hottest releases this season.' },
  { title: 'Protecting your binder', snippet: 'Smart display choices that preserve card quality over time.' },
];

export default function BlogScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Blog</Text>
      {articles.map((article) => (
        <View key={article.title} style={styles.articleCard}>
          <Text style={styles.category}>Insights</Text>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.snippet}>{article.snippet}</Text>
        </View>
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
    marginBottom: 20,
    letterSpacing: 0.2,
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
  },
  title: {
    color: palette.darkText,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  snippet: {
    color: palette.secondaryText,
    lineHeight: 20,
    fontSize: 14,
  },
});
