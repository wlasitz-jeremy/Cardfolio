import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';

const notifications = [
  { text: 'New drop from your favorite set', time: '2h ago' },
  { text: 'A trade request is waiting for you', time: 'Today' },
  { text: 'Your collection was updated', time: 'Yesterday' },
];

export default function NotificationsScreen({ navigation }: any) {
  return (
    <View style={styles.notificationsScreen}>
      <ScrollView contentContainerStyle={styles.notificationsContent}>
      <InlineScreenHeader navigation={navigation} title="Notifications" />

      {notifications.map((notification) => (
        <View key={notification.text} style={styles.notificationItem}>
          <View style={styles.notificationIndicator} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationMessage}>{notification.text}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationsScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  notificationsContent: {
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
  notificationItem: {
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
  notificationIndicator: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.accent,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationMessage: {
    color: palette.darkText,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  notificationTime: {
    color: palette.secondaryText,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
