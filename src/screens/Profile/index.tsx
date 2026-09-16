import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const profileImageAsset = 'https://www.figma.com/api/mcp/asset/149b53d4-73da-49c0-913a-f499db6b2164.png';
const userIconAsset = 'https://www.figma.com/api/mcp/asset/d11f2265-ef76-444a-b3c8-18f07aeefdf6.svg';
const phoneIconAsset = 'https://www.figma.com/api/mcp/asset/677d7fdc-ab51-4c84-80a2-65a97ec435ab.svg';
const mailIconAsset = 'https://www.figma.com/api/mcp/asset/7351b5f9-f0b8-4094-997d-7caeaa390d21.svg';

const profileDetails = [
  { label: 'MyPrecious', icon: userIconAsset },
  { label: '435-913-6149', icon: phoneIconAsset },
  { label: 'tcginventorysystem@cardfolio.ca', icon: mailIconAsset },
  { label: 'FilthyBaggins', icon: userIconAsset },
  { label: 'Two-factor Authentication', icon: userIconAsset },
  { label: 'Light-Mode', icon: userIconAsset },
  { label: 'Dark-Mode', icon: userIconAsset },
];

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.profileScreen}>
      <InlineScreenHeader navigation={navigation} title="Smeagol's Profile" />
      <Image source={{ uri: profileImageAsset }} style={styles.profileImage} />
      <View style={styles.profileDetails}>
        {profileDetails.map((detail) => (
          <View key={detail.label} style={styles.profileDetailRow}>
            <SvgUri accessibilityElementsHidden uri={detail.icon} width={50} height={50} />
            <Text style={styles.profileDetailText}>{detail.label}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.editProfileButton} accessibilityRole="button">
        <Text style={styles.editProfileText}>Edit profile</Text>
      </TouchableOpacity>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileScreen: { flex: 1, backgroundColor: palette.background, paddingHorizontal: 20, paddingTop: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 10, alignSelf: 'center', marginTop: 32, marginBottom: 28 },
  profileDetails: { marginHorizontal: 20, gap: 18 },
  profileDetailRow: { minHeight: 50, flexDirection: 'row', alignItems: 'center' },
  profileDetailText: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 18, marginLeft: 10, flexShrink: 1 },
  editProfileButton: { width: 200, height: 50, borderRadius: 10, backgroundColor: palette.accent, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  editProfileText: { color: palette.background, fontFamily: fontFamilies.heading, fontSize: 18, fontWeight: '700' },
});
