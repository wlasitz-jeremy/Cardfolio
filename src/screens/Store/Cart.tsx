import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import NavHeader from '../../components/NavHeader/NavHeader';

export default function CartScreen({ navigation }: any) {
  return (
    <View style={styles.cartScreen}>
      <NavHeader navigation={navigation} title="Your Cart" centerTitle />

      <View style={styles.cartBody}>
      <View style={styles.cartItem}>
        <View style={styles.productThumbnail} />
        <View style={styles.cartItemDetails}>
          <Text style={styles.productName}>Collector Binder</Text>
          <Text style={styles.itemQuantity}>Qty: 1</Text>
        </View>
        <Text style={styles.itemPrice}>$35</Text>
      </View>

      <View style={styles.cartSummary}>
        <Text style={styles.subtotalLabel}>Subtotal</Text>
        <Text style={styles.subtotalValue}>$35.00</Text>
      </View>

      <TouchableOpacity
        style={styles.proceedToCheckoutButton}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.proceedToCheckoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  cartBody: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  cartItem: {
    backgroundColor: palette.panel,
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  productThumbnail: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#e4e8f0',
    marginRight: 14,
  },
  cartItemDetails: {
    flex: 1,
  },
  productName: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  itemQuantity: {
    color: palette.secondaryText,
    fontSize: 14,
    fontWeight: '500',
  },
  itemPrice: {
    color: palette.accent,
    fontSize: 18,
    fontWeight: '700',
  },
  cartSummary: {
    backgroundColor: palette.panel,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  subtotalLabel: {
    color: palette.secondaryText,
    fontSize: 15,
    fontWeight: '600',
  },
  subtotalValue: {
    color: palette.darkText,
    fontSize: 17,
    fontWeight: '700',
  },
  proceedToCheckoutButton: {
    backgroundColor: palette.accent,
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  proceedToCheckoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
});
