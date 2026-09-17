import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { palette } from '../../theme/colors';
import { typography } from '../../theme/typography';

const profileImageAsset = require('../../assets/cardfolio-logo.png');
const profileDetails = [
  { label: 'MyPrecious', icon: { ios: 'person.crop.rectangle', android: 'account_box', web: 'account_box' } },
  { label: '435-913-6149', icon: { ios: 'phone.fill', android: 'phone', web: 'phone' } },
  { label: 'tcginventorysystem@cardfolio.ca', icon: { ios: 'envelope.fill', android: 'mail', web: 'mail' } },
  { label: 'FilthyBaggins', icon: { ios: 'eye', android: 'visibility', web: 'visibility' } },
  { label: 'Two-factor Authentication', icon: { ios: 'checkmark.seal', android: 'verified', web: 'verified' } },
  { label: 'Light-Mode', icon: { ios: 'lightbulb', android: 'lightbulb', web: 'lightbulb' } },
  { label: 'Dark-Mode', icon: { ios: 'lightbulb', android: 'lightbulb_outline', web: 'lightbulb_outline' } },
] as const;

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.profileScreen}>
      <NavHeader navigation={navigation} title="Smeagol's Profile" centerTitle />
      <ScrollView
        contentContainerStyle={styles.profileBody}
        showsVerticalScrollIndicator={false}
      >
        <Image source={profileImageAsset} style={styles.profileImage} />

        <View style={styles.profileDetails}>
          {profileDetails.map((detail) => (
            <View key={detail.label} style={styles.profileDetailRow}>
              <SymbolView accessibilityElementsHidden name={detail.icon} tintColor={palette.accent} size={50} />
              <Text style={styles.profileDetailText}>{detail.label}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.editProfileButton}
          accessibilityRole="button"
          accessibilityLabel="Edit profile"
          activeOpacity={0.82}
        >
          <Text style={styles.editProfileText}>Edit profile</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileScreen: { flex: 1, backgroundColor: palette.background },
  profileBody: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 166,
  },
  profileImage: {
    width: 100,
    height: 104,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 20,
  },
  profileDetails: {
    marginHorizontal: 20,
    gap: 18,
  },
  profileDetailRow: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileDetailText: {
    ...typography.bodyTextLarge,
    color: palette.darkText,
    marginLeft: 10,
    flex: 1,
    flexShrink: 1,
  },
  editProfileButton: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: palette.accent,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  editProfileText: {
    ...typography.actionLabel,
    color: palette.background,
    fontWeight: '700',
  },
});
