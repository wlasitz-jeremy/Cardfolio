import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
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
  ForgotPassword: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <SafeAreaView style={styles.loginSafeArea}>
      <View style={styles.loginScreen}>
        <Text style={styles.loginLogo}>CardFolio</Text>

        <Text style={styles.fieldLabel}>Email or Username</Text>
        <TextInput
          style={styles.loginInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder=""
          placeholderTextColor={palette.secondaryText}
        />

        <Text style={styles.fieldLabel}>Password</Text>
        <TextInput
          style={styles.loginInput}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          placeholderTextColor={palette.secondaryText}
        />

        <View style={styles.loginOptions}>
          <Pressable
            accessibilityLabel="Remember me"
            accessibilityHint="Toggles remembering your account on this device"
            accessibilityRole="checkbox"
            accessibilityState={{ checked: rememberMe }}
            onPress={() => setRememberMe((value) => !value)}
            style={({ pressed }) => [styles.rememberMeControl, pressed && styles.rememberMePressed]}
          >
            <View style={[styles.rememberMeCheckbox, rememberMe && styles.checkedCheckbox]}>
              {rememberMe ? <Text style={styles.checkboxMark}>✓</Text> : null}
            </View>
            <Text style={styles.rememberMeLabel}>Remember Me</Text>
          </Pressable>

          <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
        </View>

        <TouchableOpacity
          style={styles.submitLoginButton}
          activeOpacity={0.9}
          onPress={() => navigation.replace('MainApp')}
        >
          <Text style={styles.submitLoginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          activeOpacity={0.75}
          onPress={() => navigation.navigate('CreateAccount')}
          style={styles.createAccountLink}
        >
          <Text style={styles.signupPrompt}>
            Don&apos;t have an account?{' '}
            <Text style={styles.signupAction}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginSafeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  loginScreen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 42,
    paddingTop: 106,
    alignItems: 'center',
  },
  loginLogo: {
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
    marginTop: 8,
    fontFamily: fontFamilies.heading,
  },
  loginInput: {
    width: 300,
    height: 60,
    borderWidth: 2,
    borderColor: palette.inputStroke,
    borderRadius: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
    fontSize: 18,
    color: palette.darkText,
  },
  loginOptions: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 20,
  },
  rememberMeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rememberMePressed: {
    opacity: 0.7,
  },
  rememberMeCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#1e293b',
    borderRadius: 4,
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  checkboxMark: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
  },
  rememberMeLabel: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.secondaryText,
    fontFamily: fontFamilies.heading,
  },
  submitLoginButton: {
    width: 280,
    height: 60,
    backgroundColor: palette.accent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  submitLoginText: {
    color: palette.background,
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 0.64,
    lineHeight: 32,
    fontFamily: fontFamilies.heading,
  },
  createAccountLink: {
    alignSelf: 'center',
  },
  signupPrompt: {
    marginTop: 32,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
  },
  signupAction: {
    color: palette.muted,
  },
});
