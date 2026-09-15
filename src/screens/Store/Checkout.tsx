import { StyleSheet, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';
import FormField from '../../components/FormField/FormField';
import PrimaryButton from '../../components/Button/PrimaryButton';

export default function CheckoutScreen({ navigation }: any) {
  return (
    <View style={styles.checkoutScreen}>
      <InlineScreenHeader navigation={navigation} title="Checkout" />

      <View style={styles.checkoutForm}>
        <FormField label="Cardholder Name" />
        <FormField label="Card Number" keyboardType="numeric" />
        <FormField label="Shipping Address" />
      </View>

      <PrimaryButton label="Place Order" style={styles.placeOrderButton} onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  checkoutScreen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.darkText,
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  checkoutForm: {
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
  placeOrderButton: {
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
