import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type RootStackParamList = {
  Auth: undefined;
  MainApp: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type CreateAccountScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

export default function CreateAccountScreen({ navigation }: CreateAccountScreenProps) {
  const [rememberMe, setRememberMe] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Cardfolio</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.dateOfBirthLabel}>Date of Birth</Text>
          <View style={styles.dateRow}>
            <TextInput
              accessibilityLabel="Birth day"
              style={styles.dateInput}
              keyboardType="number-pad"
              maxLength={2}
              placeholder="Day"
              placeholderTextColor={palette.secondaryText}
            />
            <TextInput
              accessibilityLabel="Birth month"
              style={styles.dateInput}
              keyboardType="number-pad"
              maxLength={2}
              placeholder="Month"
              placeholderTextColor={palette.secondaryText}
            />
            <TextInput
              accessibilityLabel="Birth year"
              style={styles.dateInput}
              keyboardType="number-pad"
              maxLength={4}
              placeholder="Year"
              placeholderTextColor={palette.secondaryText}
            />
          </View>

          <View style={styles.options}>
            <Pressable
              accessibilityLabel="Remember me"
              accessibilityHint="Toggles remembering your account on this device"
              accessibilityRole="checkbox"
              accessibilityState={{ checked: rememberMe }}
              onPress={() => setRememberMe((value) => !value)}
              style={({ pressed }) => [styles.optionRow, pressed && styles.optionPressed]}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe ? <Text style={styles.checkmark}>✓</Text> : null}
              </View>
              <Text style={styles.optionText}>Remember Me</Text>
            </Pressable>

            <Pressable
              accessibilityLabel="Agree to Terms and Conditions"
              accessibilityHint="Toggles acceptance of the Terms and Conditions"
              accessibilityRole="checkbox"
              accessibilityState={{ checked: termsAccepted }}
              onPress={() => setTermsAccepted((value) => !value)}
              style={({ pressed }) => [styles.optionRow, pressed && styles.optionPressed]}
            >
              <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}>
                {termsAccepted ? <Text style={styles.checkmark}>✓</Text> : null}
              </View>
              <Text style={styles.optionText}>
                I agree to the <Text style={styles.termsLink}>Terms and Conditions</Text>
              </Text>
            </Pressable>

          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.9}
            onPress={() => navigation.replace('MainApp')}
          >
            <Text style={styles.primaryButtonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Login')}
            style={styles.footerButton}
          >
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.footerLink}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 42,
    paddingTop: 74,
    paddingBottom: 40,
  },
  logo: {
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 64,
    letterSpacing: 1.28,
    color: palette.darkText,
    marginBottom: 40,
    fontFamily: fontFamilies.heading,
  },
  label: {
    width: '100%',
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: 0.48,
    color: palette.darkText,
    marginBottom: 12,
    marginTop: 10,
    fontFamily: fontFamilies.heading,
  },
  input: {
    width: 300,
    height: 60,
    borderWidth: 2,
    borderColor: palette.inputStroke,
    borderRadius: 0,
    backgroundColor: palette.white,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 18,
    color: palette.darkText,
  },
  dateOfBirthLabel: {
    width: 300,
    marginTop: 2,
    marginBottom: 10,
    color: palette.darkText,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fontFamilies.heading,
  },
  dateRow: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateInput: {
    width: 92,
    height: 54,
    borderWidth: 2,
    borderColor: palette.inputStroke,
    backgroundColor: palette.white,
    paddingHorizontal: 10,
    fontSize: 16,
    color: palette.darkText,
    textAlign: 'center',
    fontFamily: fontFamilies.heading,
  },
  options: {
    width: 300,
    gap: 14,
    marginTop: 4,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 24,
  },
  optionPressed: {
    opacity: 0.7,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: palette.darkText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  checkmark: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
  },
  optionText: {
    flex: 1,
    color: palette.darkText,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    fontFamily: fontFamilies.heading,
  },
  termsLink: {
    color: palette.muted,
  },
  primaryButton: {
    width: 280,
    height: 60,
    backgroundColor: palette.accent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: palette.background,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.64,
    lineHeight: 32,
    fontFamily: fontFamilies.heading,
  },
  footerButton: {
    alignSelf: 'center',
  },
  footerText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
  },
  footerLink: {
    color: palette.muted,
  },
});
