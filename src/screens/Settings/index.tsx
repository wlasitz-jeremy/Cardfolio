import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';
import { useTheme } from '../../context/ThemeContext';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const profileImageAsset = 'https://www.figma.com/api/mcp/asset/149b53d4-73da-49c0-913a-f499db6b2164.png';
const userIconAsset = 'https://www.figma.com/api/mcp/asset/d11f2265-ef76-444a-b3c8-18f07aeefdf6.svg';
const mailIconAsset = 'https://www.figma.com/api/mcp/asset/7351b5f9-f0b8-4094-997d-7caeaa390d21.svg';
const logoutIconAsset = 'https://www.figma.com/api/mcp/asset/677d7fdc-ab51-4c84-80a2-65a97ec435ab.svg';
const trashIconAsset = 'https://www.figma.com/api/mcp/asset/7351b5f9-f0b8-4094-997d-7caeaa390d21.svg';

export default function SettingsScreen({ navigation }: any) {
  const { isDark, toggleMode } = useTheme();
  const settingsItems = [
    { label: 'My Account Preferences', icon: userIconAsset },
    { label: 'Notifications', icon: mailIconAsset, action: () => navigation.navigate('Notifications') },
    { label: 'Logout', icon: logoutIconAsset },
    { label: 'Community Chat', icon: mailIconAsset },
    { label: 'Delete Account', icon: trashIconAsset },
  ];

  return (
    <View style={styles.settingsScreen}>
      <InlineScreenHeader navigation={navigation} title="Settings" />
      <Image source={{ uri: profileImageAsset }} style={styles.settingsAvatar} />
      <View style={styles.settingsList}>
        {settingsItems.map((item) => (
          <TouchableOpacity key={item.label} style={styles.settingsRow} onPress={item.action}>
            <SvgUri accessibilityElementsHidden uri={item.icon} width={50} height={50} />
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
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsScreen: { flex: 1, backgroundColor: palette.background, paddingHorizontal: 20, paddingTop: 20 },
  settingsAvatar: { width: 100, height: 100, borderRadius: 10, alignSelf: 'center', marginTop: 32, marginBottom: 20 },
  settingsList: { marginHorizontal: 15, gap: 16 },
  settingsRow: { minHeight: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  settingsLabel: { flex: 1, color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 18, marginLeft: 10 },
  editSettingsButton: { width: 200, height: 50, borderRadius: 10, backgroundColor: palette.accent, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 18 },
  editSettingsText: { color: palette.background, fontFamily: fontFamilies.heading, fontSize: 18, fontWeight: '700' },
});
