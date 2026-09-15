import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

export default function CheckoutScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <Text style={styles.pageTitle}>Checkout</Text>

      <View style={styles.formCard}>
        <Text style={styles.label}>Cardholder Name</Text>
        <TextInput style={styles.input} placeholder="" />

        <Text style={styles.label}>Card Number</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="numeric" />

        <Text style={styles.label}>Shipping Address</Text>
        <TextInput style={styles.input} placeholder="" />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Place Order</Text>
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
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  formCard: {
    backgroundColor: palette.panel,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#edf1f7',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 1,
  },
  label: {
    color: palette.darkText,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 52,
    marginBottom: 10,
    color: palette.darkText,
  },
  button: {
    backgroundColor: palette.accent,
    borderRadius: 16,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
