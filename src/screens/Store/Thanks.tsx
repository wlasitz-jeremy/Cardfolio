import { StyleSheet, Text, View } from 'react-native';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

export default function ThanksScreen({ navigation }: any) {
  return (
    <View style={styles.thanksScreen}>
      <NavHeader navigation={navigation} title="" centerTitle />
      <View style={styles.thanksBody}>
      <Text style={styles.thanksTitle}>Thank-You Smeagol for Ordering with Cardfolio</Text>
      <View style={styles.orderSummary}>
        <Text>Items: .............................................................. $782.74</Text>
        <Text>Shipping and Handling: .................................... $5.99</Text>
        <Text>Estimated taxes: .............................................. $39.15</Text>
        <Text>Order Total: .................................................... $821.88</Text>
      </View>
      <View style={styles.deliveryDetails}>
        <Text style={styles.deliveryText}>Delivering to “Customer Name”</Text>
        <Text style={styles.addressText}>1234 some street, somewhere, some place</Text>
      </View>
      <View style={styles.confirmation}>
        <Text>Order Confirmation Number:</Text>
        <Text>893hgf939fhwh29cbd23894fc</Text>
      </View>
      </View>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  thanksScreen: { flex: 1, backgroundColor: palette.background },
  thanksBody: { flex: 1, paddingHorizontal: 25, paddingTop: 20 },
  thanksTitle: { color: palette.darkText, fontFamily: fontFamilies.heading, fontSize: 38, lineHeight: 46, textAlign: 'center', marginTop: 20, height: 138 },
  orderSummary: { borderTopWidth: 5, borderBottomWidth: 5, borderColor: '#a7a7a7', paddingVertical: 20, gap: 8, marginTop: 10 },
  deliveryDetails: { borderBottomWidth: 5, borderColor: '#a7a7a7', paddingVertical: 26 },
  deliveryText: { color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 14, textAlign: 'center' },
  addressText: { color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 12, textAlign: 'center', marginTop: 6 },
  confirmation: { paddingTop: 28, alignItems: 'center', gap: 4, color: palette.darkText },
});
