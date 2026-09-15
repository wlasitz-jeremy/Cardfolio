import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';
import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';

export default function ContactUsScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <InlineScreenHeader navigation={navigation} title="Contact Us" />

      <View style={styles.formCard}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="email-address" />

        <Text style={styles.label}>Message</Text>
        <TextInput style={[styles.input, styles.textArea]} placeholder="" multiline numberOfLines={5} />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
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
  textArea: {
    height: 110,
    paddingTop: 12,
    textAlignVertical: 'top',
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
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
