import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const palette = {
  background: '#f4f5f9',
  panel: '#ffffff',
  darkText: '#1f2937',
  secondaryText: '#586578',
  accent: '#3d4052',
  softAccent: '#eef2ff',
  border: '#edf1f7',
};

export default function CartScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.pageTitle}>Your Cart</Text>

      <View style={styles.itemCard}>
        <View style={styles.thumb} />
        <View style={styles.details}>
          <Text style={styles.name}>Collector Binder</Text>
          <Text style={styles.meta}>Qty: 1</Text>
        </View>
        <Text style={styles.price}>$35</Text>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryLabel}>Subtotal</Text>
        <Text style={styles.summaryValue}>$35.00</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton} activeOpacity={0.9}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  itemCard: {
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
  thumb: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#e4e8f0',
    marginRight: 14,
  },
  details: {
    flex: 1,
  },
  name: {
    color: palette.darkText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  meta: {
    color: palette.secondaryText,
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    color: palette.accent,
    fontSize: 18,
    fontWeight: '700',
  },
  summaryBox: {
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
  summaryLabel: {
    color: palette.secondaryText,
    fontSize: 15,
    fontWeight: '600',
  },
  summaryValue: {
    color: palette.darkText,
    fontSize: 17,
    fontWeight: '700',
  },
  checkoutButton: {
    backgroundColor: palette.accent,
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  checkoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
});
