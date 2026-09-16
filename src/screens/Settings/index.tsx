import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { useTheme } from '../../context/ThemeContext';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const profileImageAsset = require('../../assets/Screenshot 2026-07-24 081622.png');
export default function SettingsScreen({ navigation }: any) {
  const { isDark, toggleMode } = useTheme();
  const settingsItems = [
    { label: 'My Account Preferences', icon: { ios: 'person.circle', android: 'person', web: 'person' }, action: undefined },
    { label: 'Notifications', icon: { ios: 'bell.fill', android: 'notifications', web: 'notifications' }, action: () => navigation.navigate('Notifications') },
    { label: 'Logout', icon: { ios: 'rectangle.portrait.and.arrow.right', android: 'logout', web: 'logout' }, action: undefined },
    { label: 'Community Chat', icon: { ios: 'bubble.left.and.bubble.right.fill', android: 'forum', web: 'forum' }, action: undefined },
    { label: 'Delete Account', icon: { ios: 'trash.fill', android: 'delete', web: 'delete' }, action: undefined },
  ] as const;

  return (
    <View style={styles.settingsScreen}>
      <NavHeader navigation={navigation} title="Settings" />
      <View style={styles.settingsBody}>
      <Image source={profileImageAsset} style={styles.settingsAvatar} />
      <View style={styles.settingsList}>
        {settingsItems.map((item) => (
          <TouchableOpacity key={item.label} style={styles.settingsRow} onPress={item.action}>
            <SymbolView accessibilityElementsHidden name={item.icon} tintColor={palette.accent} size={50} />
            <Text style={styles.settingsLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.settingsRow}>
          <Text style={styles.settingsLabel}>Dark-Mode</Text>
          <Switch value={isDark} onValueChange={toggleMode} trackColor={{ false: palette.border, true: palette.accent }} thumbColor={palette.white} />
        </View>
      </View>
      <TouchableOpacity style={styles.editSettingsButton}>
        <Text style={styles.editSettingsText}>Edit settings</Text>
      </TouchableOpacity>
      </View>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsScreen: { flex: 1, backgroundColor: palette.background },
  settingsBody: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  settingsAvatar: { width: 100, height: 100, borderRadius: 10, alignSelf: 'center', marginTop: 32, marginBottom: 20 },
  settingsList: { marginHorizontal: 15, gap: 16 },
  settingsRow: { minHeight: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  settingsLabel: { flex: 1, color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 18, marginLeft: 10 },
  editSettingsButton: { width: 200, height: 50, borderRadius: 10, backgroundColor: palette.accent, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 18 },
  editSettingsText: { color: palette.background, fontFamily: fontFamilies.heading, fontSize: 18, fontWeight: '700' },
});
