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
    <SafeAreaView style={styles.createAccountSafeArea}>
      <ScrollView
        contentContainerStyle={styles.createAccountScroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.createAccountScreen}>
          <Text style={styles.createAccountLogo}>Cardfolio</Text>

          <Text style={styles.fieldLabel}>Full Name</Text>
          <TextInput
            style={styles.accountInput}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.fieldLabel}>Email</Text>
          <TextInput
            style={styles.accountInput}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.fieldLabel}>Password</Text>
          <TextInput
            style={styles.accountInput}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.fieldLabel}>Confirm Password</Text>
          <TextInput
            style={styles.accountInput}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=""
            placeholderTextColor={palette.secondaryText}
          />

          <Text style={styles.dateOfBirthLabel}>Date of Birth</Text>
          <View style={styles.dateOfBirthFields}>
            <TextInput
              accessibilityLabel="Birth day"
              style={styles.dateOfBirthInput}
              keyboardType="number-pad"
              maxLength={2}
              placeholder="Day"
              placeholderTextColor={palette.secondaryText}
            />
            <TextInput
              accessibilityLabel="Birth month"
              style={styles.dateOfBirthInput}
              keyboardType="number-pad"
              maxLength={2}
              placeholder="Month"
              placeholderTextColor={palette.secondaryText}
            />
            <TextInput
              accessibilityLabel="Birth year"
              style={styles.dateOfBirthInput}
              keyboardType="number-pad"
              maxLength={4}
              placeholder="Year"
              placeholderTextColor={palette.secondaryText}
            />
          </View>

          <View style={styles.accountOptions}>
            <Pressable
              accessibilityLabel="Remember me"
              accessibilityHint="Toggles remembering your account on this device"
              accessibilityRole="checkbox"
              accessibilityState={{ checked: rememberMe }}
              onPress={() => setRememberMe((value) => !value)}
              style={({ pressed }) => [styles.accountOptionRow, pressed && styles.accountOptionPressed]}
            >
              <View style={[styles.accountCheckbox, rememberMe && styles.checkedAccountCheckbox]}>
                {rememberMe ? <Text style={styles.accountCheckboxMark}>✓</Text> : null}
              </View>
              <Text style={styles.accountOptionText}>Remember Me</Text>
            </Pressable>

            <Pressable
              accessibilityLabel="Agree to Terms and Conditions"
              accessibilityHint="Toggles acceptance of the Terms and Conditions"
              accessibilityRole="checkbox"
              accessibilityState={{ checked: termsAccepted }}
              onPress={() => setTermsAccepted((value) => !value)}
              style={({ pressed }) => [styles.accountOptionRow, pressed && styles.accountOptionPressed]}
            >
              <View style={[styles.accountCheckbox, termsAccepted && styles.checkedAccountCheckbox]}>
                {termsAccepted ? <Text style={styles.accountCheckboxMark}>✓</Text> : null}
              </View>
              <Text style={styles.accountOptionText}>
                I agree to the <Text style={styles.termsAction}>Terms and Conditions</Text>
              </Text>
            </Pressable>

          </View>

          <TouchableOpacity
            style={styles.createAccountSubmitButton}
            activeOpacity={0.9}
            onPress={() => navigation.replace('MainApp')}
          >
            <Text style={styles.createAccountSubmitText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Login')}
            style={styles.loginFooterButton}
          >
            <Text style={styles.loginFooterText}>
              Already have an account?{' '}
              <Text style={styles.loginFooterAction}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  createAccountSafeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  createAccountScroll: {
    flexGrow: 1,
  },
  createAccountScreen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 42,
    paddingTop: 74,
    paddingBottom: 40,
  },
  createAccountLogo: {
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 64,
    letterSpacing: 1.28,
    color: palette.darkText,
    marginBottom: 40,
    fontFamily: fontFamilies.heading,
  },
  fieldLabel: {
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
  accountInput: {
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
  dateOfBirthFields: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateOfBirthInput: {
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
  accountOptions: {
    width: 300,
    gap: 14,
    marginTop: 4,
  },
  accountOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 24,
  },
  accountOptionPressed: {
    opacity: 0.7,
  },
  accountCheckbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: palette.darkText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedAccountCheckbox: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  accountCheckboxMark: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
  },
  accountOptionText: {
    flex: 1,
    color: palette.darkText,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    fontFamily: fontFamilies.heading,
  },
  termsAction: {
    color: palette.muted,
  },
  createAccountSubmitButton: {
    width: 280,
    height: 60,
    backgroundColor: palette.accent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountSubmitText: {
    color: palette.background,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.64,
    lineHeight: 32,
    fontFamily: fontFamilies.heading,
  },
  loginFooterButton: {
    alignSelf: 'center',
  },
  loginFooterText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
  },
  loginFooterAction: {
    color: palette.muted,
  },
});
