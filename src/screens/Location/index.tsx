import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import NavHeader from '../../components/NavHeader/NavHeader';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const locationImageAsset = require('../../assets/Screenshot 2026-07-24 081348.png');
const stores = [
  ['Arcane Nexus Games', 'Arcane Nexus Games is a popular destination for trading card enthusiasts looking for rare singles, booster packs, and competitive events. Location: 1457 Crystal Avenue, Eldermere, WA'],
  ["Dragon's Hoard Collectibles", 'Known for its extensive inventory of trading cards and collectibles, Dragon\'s Hoard Collectibles specializes in sealed products, graded cards, and limited-edition releases. Location: 88 Ember Street, Ironhold, TX'],
  ['Mana Vault Marketplace', 'Mana Vault Marketplace offers a modern gaming space with spacious tables and regular community events. Location: 302 Sapphire Boulevard, Riverton, CO'],
  ['Mythic Realm Cards', 'Mythic Realm Cards is a community-focused shop featuring a large selection of trading cards, accessories, and custom deck supplies. Location: 719 Mooncrest Lane, Silverbrook, OR'],
  ["Planeswalker's Retreat", "Planeswalker's Retreat combines a gaming lounge with a premium card shop experience. Location: 421 Arcadia Drive, Brightfall, AZ"],
];

export default function LocationScreen({ navigation }: any) {
  return (
    <View style={styles.locationScreen}>
      <NavHeader navigation={navigation} title="Location" centerTitle />
      <View style={styles.locationBody}>
      <Image source={locationImageAsset} style={styles.locationImage} />
      <ScrollView contentContainerStyle={styles.storeList}>
        {stores.map(([name, description]) => (
          <View key={name} style={styles.storeEntry}>
            <Text style={styles.storeName}>{name}</Text>
            <Text style={styles.storeDescription}>{description}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  locationScreen: { flex: 1, backgroundColor: palette.background },
  locationBody: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  locationImage: { width: 300, height: 200, alignSelf: 'center', marginTop: 32, borderRadius: 10 },
  storeList: { paddingHorizontal: 5, paddingTop: 26, paddingBottom: 120, gap: 22 },
  storeEntry: { minHeight: 180 },
  storeName: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 22, fontWeight: '700', marginBottom: 6 },
  storeDescription: { color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 15, lineHeight: 22 },
});
