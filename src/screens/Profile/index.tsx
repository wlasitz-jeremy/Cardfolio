import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const profileImageAsset = require('../../assets/Screenshot 2026-07-24 081400.png');
const profileDetails = [
  { label: 'MyPrecious', icon: { ios: 'person.circle', android: 'person', web: 'person' } },
  { label: '435-913-6149', icon: { ios: 'phone.fill', android: 'phone', web: 'phone' } },
  { label: 'tcginventorysystem@cardfolio.ca', icon: { ios: 'envelope.fill', android: 'mail', web: 'mail' } },
  { label: 'FilthyBaggins', icon: { ios: 'person.circle', android: 'person', web: 'person' } },
  { label: 'Two-factor Authentication', icon: { ios: 'lock.shield', android: 'security', web: 'security' } },
  { label: 'Light-Mode', icon: { ios: 'sun.max.fill', android: 'light_mode', web: 'light_mode' } },
  { label: 'Dark-Mode', icon: { ios: 'moon.fill', android: 'dark_mode', web: 'dark_mode' } },
] as const;

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.profileScreen}>
      <NavHeader navigation={navigation} title="Smeagol's Profile" />
      <View style={styles.profileBody}>
      <Image source={profileImageAsset} style={styles.profileImage} />
      <View style={styles.profileDetails}>
        {profileDetails.map((detail) => (
          <View key={detail.label} style={styles.profileDetailRow}>
            <SymbolView accessibilityElementsHidden name={detail.icon} tintColor={palette.accent} size={50} />
            <Text style={styles.profileDetailText}>{detail.label}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.editProfileButton} accessibilityRole="button">
        <Text style={styles.editProfileText}>Edit profile</Text>
      </TouchableOpacity>
      </View>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileScreen: { flex: 1, backgroundColor: palette.background },
  profileBody: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 10, alignSelf: 'center', marginTop: 32, marginBottom: 28 },
  profileDetails: { marginHorizontal: 20, gap: 18 },
  profileDetailRow: { minHeight: 50, flexDirection: 'row', alignItems: 'center' },
  profileDetailText: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 18, marginLeft: 10, flexShrink: 1 },
  editProfileButton: { width: 200, height: 50, borderRadius: 10, backgroundColor: palette.accent, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  editProfileText: { color: palette.background, fontFamily: fontFamilies.heading, fontSize: 18, fontWeight: '700' },
});
