import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';

const communityPosts = [
  { user: 'Ari', title: 'Trade night wins', body: 'Managed to complete a full foil set this weekend.' },
  { user: 'Mika', title: 'Best budget pulls', body: 'These underrated cards are crushing the current meta.' },
  { user: 'Theo', title: 'Binder updates', body: 'Fresh organization system and new upgrade priorities.' },
];

export default function CommunityScreen({ navigation }: any) {
  return (
    <View style={styles.communityScreen}>
      <NavHeader navigation={navigation} title="Community" />
      <ScrollView contentContainerStyle={styles.communityContent}>
      {communityPosts.map((post) => (
        <View key={post.title} style={styles.communityPostCard}>
          <Text style={styles.postAuthor}>{post.user}</Text>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postBody}>{post.body}</Text>
        </View>
      ))}
      </ScrollView>
      <BottomTabBar navigation={navigation} activeTab="Community" />
    </View>
  );
}

const styles = StyleSheet.create({
  communityScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  communityContent: {
    paddingHorizontal: 20,
    paddingTop: 0,
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
  communityPostCard: {
    backgroundColor: palette.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  postAuthor: {
    color: palette.accent,
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 6,
    fontFamily: fontFamilies.heading,
  },
  postTitle: {
    color: palette.darkText,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    fontFamily: fontFamilies.heading,
  },
  postBody: {
    color: palette.secondaryText,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamilies.heading,
  },
});
