import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import NavHeader from '../../components/NavHeader/NavHeader';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const notifications = [
  'System Update',
  'Price Alert',
  'Card Acquired (Gandalf)',
  'Chat from Cardfolio',
  'Card Acquired (Bilbo Baggins)',
  'Price Alert',
  'Chat from TCG-User',
  'System Update',
];

export default function NotificationsScreen({ navigation }: any) {
  return (
    <View style={styles.notificationsScreen}>
      <NavHeader navigation={navigation} title="Notifications" centerTitle />
      <View style={styles.notificationsBody}>
      <ScrollView contentContainerStyle={styles.notificationsList}>
        {notifications.map((notification) => (
          <View key={notification} style={styles.notificationRow}>
            <SymbolView accessibilityElementsHidden name={{ ios: 'bell.fill', android: 'notifications', web: 'notifications' }} tintColor={palette.accent} size={50} />
            <Text style={styles.notificationText}>{notification}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  notificationsScreen: { flex: 1, backgroundColor: palette.background },
  notificationsBody: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  notificationsList: { paddingHorizontal: 15, paddingTop: 28, paddingBottom: 120, gap: 16 },
  notificationRow: { minHeight: 50, flexDirection: 'row', alignItems: 'center' },
  notificationText: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 18, marginLeft: 10 },
});
