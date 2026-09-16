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
  const [termsAccepted, setTermsAccepted] = useState(true);

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

          <Text style={styles.fieldLabel}>Email Address</Text>
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

          <View style={styles.ageRow}>
            <Text style={styles.ageLabel}>Age</Text>
            <View style={styles.dateOfBirthFields}>
              <TextInput
                accessibilityLabel="Age day"
                style={styles.dateOfBirthInput}
                keyboardType="number-pad"
                maxLength={2}
                placeholder="dd"
                placeholderTextColor={palette.secondaryText}
              />
              <TextInput
                accessibilityLabel="Age month"
                style={styles.dateOfBirthInput}
                keyboardType="number-pad"
                maxLength={2}
                placeholder="mm"
                placeholderTextColor={palette.secondaryText}
              />
              <TextInput
                accessibilityLabel="Age year"
                style={styles.dateOfBirthInput}
                keyboardType="number-pad"
                maxLength={4}
                placeholder="yyyy"
                placeholderTextColor={palette.secondaryText}
              />
            </View>
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
              <View style={[styles.accountCheckbox, rememberMe ? styles.checkedCheckbox : styles.uncheckedCheckbox]}>
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
              <View style={[styles.accountCheckbox, termsAccepted ? styles.checkedCheckbox : styles.uncheckedCheckbox]}>
                {termsAccepted ? <Text style={styles.accountCheckboxMark}>✓</Text> : null}
              </View>
              <Text style={styles.accountOptionText}>Terms &amp; Conditions</Text>
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
  ageRow: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 18,
  },
  ageLabel: {
    width: 70,
    color: palette.darkText,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: fontFamilies.heading,
  },
  dateOfBirthLabel: {
    color: palette.darkText,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fontFamilies.heading,
  },
  dateOfBirthFields: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateOfBirthInput: {
    width: 72,
    height: 38,
    borderWidth: 2,
    borderColor: palette.secondaryText,
    borderRadius: 5,
    backgroundColor: palette.white,
    paddingHorizontal: 10,
    fontSize: 16,
    color: palette.darkText,
    textAlign: 'center',
    fontFamily: fontFamilies.heading,
  },
  accountOptions: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 4,
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
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uncheckedCheckbox: {
    borderWidth: 1.5,
    borderColor: palette.darkText,
    borderRadius: 4,
  },
  checkedCheckbox: {
    backgroundColor: palette.accent,
    borderWidth: 1.5,
    borderColor: palette.accent,
    borderRadius: 4,
  },
  accountCheckboxMark: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
  },
  accountOptionText: {
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
    alignSelf: 'center',
    backgroundColor: palette.accent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
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
