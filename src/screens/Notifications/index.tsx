import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const notificationIcon = 'https://www.figma.com/api/mcp/asset/6baa00e8-7a35-480d-8180-615c7ff14a9d.svg';
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
      <InlineScreenHeader navigation={navigation} title="Notifications" />
      <ScrollView contentContainerStyle={styles.notificationsList}>
        {notifications.map((notification) => (
          <View key={notification} style={styles.notificationRow}>
            <SvgUri accessibilityElementsHidden uri={notificationIcon} width={50} height={50} />
            <Text style={styles.notificationText}>{notification}</Text>
          </View>
        ))}
      </ScrollView>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  notificationsScreen: { flex: 1, backgroundColor: palette.background, paddingHorizontal: 20, paddingTop: 20 },
  notificationsList: { paddingHorizontal: 15, paddingTop: 28, paddingBottom: 120, gap: 16 },
  notificationRow: { minHeight: 50, flexDirection: 'row', alignItems: 'center' },
  notificationText: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 18, marginLeft: 10 },
});
