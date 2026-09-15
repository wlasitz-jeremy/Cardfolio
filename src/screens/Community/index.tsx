import { ScrollView, StyleSheet, Text, View } from 'react-native';

const palette = {
  background: '#f4f4f8',
  darkText: '#1e293b',
  secondaryText: '#424b57',
  accent: '#4a475c',
  white: '#ffffff',
};

const posts = [
  { user: 'Ari', title: 'Trade night wins', body: 'Managed to complete a full foil set this weekend.' },
  { user: 'Mika', title: 'Best budget pulls', body: 'These underrated cards are crushing the current meta.' },
  { user: 'Theo', title: 'Binder updates', body: 'Fresh organization system and new upgrade priorities.' },
];

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Community</Text>
      {posts.map((post) => (
        <View key={post.title} style={styles.postCard}>
          <Text style={styles.user}>{post.user}</Text>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
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
  postCard: {
    backgroundColor: palette.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  user: {
    color: palette.accent,
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 6,
  },
  title: {
    color: palette.darkText,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  body: {
    color: palette.secondaryText,
    fontSize: 14,
    lineHeight: 20,
  },
});
