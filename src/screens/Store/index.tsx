import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';

const storeProducts = [
  { name: 'Premium Sleeves', price: '$18.00', tone: '#dfe7f8' },
  { name: 'Collector Binder', price: '$35.00', tone: '#e7e2f7' },
  { name: 'Display Stand', price: '$22.00', tone: '#dfe9e0' },
];

export default function StoreScreen({ navigation }: any) {
  return (
    <View style={styles.storeScreen}>
      <NavHeader navigation={navigation} title="Store" />
      <ScrollView contentContainerStyle={styles.storeContent}>
        {storeProducts.map((product) => (
          <TouchableOpacity key={product.name} onPress={() => navigation.navigate('Cart')}>
            <View style={styles.productTile}>
              <View style={[styles.productImage, { backgroundColor: product.tone }]} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
              <View style={styles.purchaseBadge}>
                <Text style={styles.purchaseText}>Buy</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  storeScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  storeContent: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 128,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 20,
    letterSpacing: -0.5,
    fontFamily: fontFamilies.heading,
  },
  productTile: {
    backgroundColor: palette.panel,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 16,
    marginRight: 14,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    color: palette.darkText,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
    fontFamily: fontFamilies.heading,
  },
  productPrice: {
    color: palette.accent,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fontFamilies.heading,
  },
  purchaseBadge: {
    backgroundColor: palette.softAccent,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 10,
  },
  purchaseText: {
    color: palette.darkText,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    fontFamily: fontFamilies.heading,
  },
});
