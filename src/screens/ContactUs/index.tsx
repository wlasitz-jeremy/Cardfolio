import { StyleSheet, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import NavHeader from '../../components/NavHeader/NavHeader';
import FormField from '../../components/FormField/FormField';
import PrimaryButton from '../../components/Button/PrimaryButton';

export default function ContactUsScreen({ navigation }: any) {
  return (
    <View style={styles.contactScreen}>
      <NavHeader navigation={navigation} title="Contact Us" centerTitle />

      <View style={styles.contactBody}>
      <View style={styles.contactForm}>
        <FormField label="Name" />
        <FormField label="Email" keyboardType="email-address" />
        <FormField label="Message" multiline numberOfLines={5} style={styles.messageInput} />
      </View>

      <PrimaryButton label="Send" style={styles.sendButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  contactBody: {
    flex: 1,
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
  contactForm: {
    backgroundColor: palette.panel,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#edf1f7',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
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
    height: 52,
    paddingHorizontal: 12,
    color: palette.darkText,
  },
  messageInput: {
    height: 110,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: palette.accent,
    borderRadius: 16,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
