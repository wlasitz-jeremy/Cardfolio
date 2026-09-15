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
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.logo}>CardFolio</Text>

        <Text style={styles.label}>Email or Username</Text>
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

        <View style={styles.metaRow}>
          <Pressable
            accessibilityLabel="Remember me"
            accessibilityHint="Toggles remembering your account on this device"
            accessibilityRole="checkbox"
            accessibilityState={{ checked: rememberMe }}
            onPress={() => setRememberMe((value) => !value)}
            style={({ pressed }) => [styles.checkboxWrapper, pressed && styles.checkboxPressed]}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe ? <Text style={styles.checkmark}>✓</Text> : null}
            </View>
            <Text style={styles.rememberText}>Remember Me</Text>
          </Pressable>

          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.9}
          onPress={() => navigation.replace('MainApp')}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          activeOpacity={0.75}
          onPress={() => navigation.navigate('CreateAccount')}
          style={styles.signupButton}
        >
          <Text style={styles.signupText}>
            Don&apos;t have an account?{' '}
            <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  container: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 42,
    paddingTop: 106,
    alignItems: 'center',
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
    marginTop: 8,
    fontFamily: fontFamilies.heading,
  },
  input: {
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
  metaRow: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkboxPressed: {
    opacity: 0.7,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#1e293b',
    borderRadius: 4,
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
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
  rememberText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.secondaryText,
    fontFamily: fontFamilies.heading,
  },
  loginButton: {
    width: 280,
    height: 60,
    backgroundColor: palette.accent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginText: {
    color: palette.background,
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 0.64,
    lineHeight: 32,
    fontFamily: fontFamilies.heading,
  },
  signupButton: {
    alignSelf: 'center',
  },
  signupText: {
    marginTop: 32,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
  },
  signupLink: {
    color: palette.muted,
  },
});
