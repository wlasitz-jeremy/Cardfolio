import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type RootStackParamList = {
  Auth: undefined;
  MainApp: undefined;
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
};

type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export default function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <SafeAreaView style={styles.forgotPasswordSafeArea}>
      <View style={styles.forgotPasswordScreen}>
        <Text style={styles.forgotPasswordLogo}>CardFolio</Text>
        <Text style={styles.instructions}>
          Enter your username and email address and we&apos;ll send you a link to reset your password.
        </Text>

        <Text style={styles.fieldLabel}>Username</Text>
        <TextInput
          style={styles.forgotPasswordInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          placeholderTextColor={palette.secondaryText}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.fieldLabel}>Email Address</Text>
        <TextInput
          style={styles.forgotPasswordInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder=""
          placeholderTextColor={palette.secondaryText}
          value={email}
          onChangeText={setEmail}
        />

        {submitted ? (
          <Text style={styles.confirmationText}>
            If that account exists, a reset link has been sent to your email.
          </Text>
        ) : null}

        <TouchableOpacity
          style={[styles.submitButton, (!username || !email) && styles.submitButtonDisabled]}
          activeOpacity={0.9}
          disabled={!username || !email}
          onPress={() => setSubmitted(true)}
        >
          <Text style={styles.submitButtonText}>SEND RESET LINK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          activeOpacity={0.75}
          onPress={() => navigation.navigate('Login')}
          style={styles.backToLoginLink}
        >
          <Text style={styles.backToLoginText}>Back to Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forgotPasswordSafeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  forgotPasswordScreen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 42,
    paddingTop: 106,
    alignItems: 'center',
  },
  forgotPasswordLogo: {
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 64,
    letterSpacing: 1.28,
    color: palette.darkText,
    marginBottom: 24,
    fontFamily: fontFamilies.heading,
  },
  instructions: {
    width: 300,
    fontSize: 14,
    lineHeight: 20,
    color: palette.secondaryText,
    marginBottom: 24,
    fontFamily: fontFamilies.body,
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
    marginTop: 8,
    fontFamily: fontFamilies.heading,
  },
  forgotPasswordInput: {
    width: 300,
    height: 60,
    borderWidth: 2,
    borderColor: palette.inputStroke,
    borderRadius: 0,
    backgroundColor: palette.white,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
    fontSize: 18,
    color: palette.darkText,
  },
  confirmationText: {
    width: 300,
    color: palette.accent,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
    fontFamily: fontFamilies.body,
  },
  submitButton: {
    width: 280,
    height: 60,
    backgroundColor: palette.accent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: palette.background,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.44,
    fontFamily: fontFamilies.heading,
  },
  backToLoginLink: {
    alignSelf: 'center',
  },
  backToLoginText: {
    marginTop: 32,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.muted,
    fontFamily: fontFamilies.heading,
  },
});
