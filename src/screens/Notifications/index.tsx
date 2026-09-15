import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';

const items = [
  { text: 'New drop from your favorite set', time: '2h ago' },
  { text: 'A trade request is waiting for you', time: 'Today' },
  { text: 'Your collection was updated', time: 'Yesterday' },
];

export default function NotificationsScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
      <InlineScreenHeader navigation={navigation} title="Notifications" />

      {items.map((item) => (
        <View key={item.text} style={styles.note}>
          <View style={styles.noteDot} />
          <View style={styles.noteTextWrap}>
            <Text style={styles.noteText}>{item.text}</Text>
            <Text style={styles.noteTime}>{item.time}</Text>
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
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  note: {
    backgroundColor: palette.panel,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  noteDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.accent,
    marginRight: 12,
  },
  noteTextWrap: {
    flex: 1,
  },
  noteText: {
    color: palette.darkText,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  noteTime: {
    color: palette.secondaryText,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
