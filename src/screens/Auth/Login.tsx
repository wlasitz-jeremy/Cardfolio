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

type RootStackParamList = {
  Auth: undefined;
  MainApp: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const palette = {
  background: '#f4f5f9',
  darkText: '#1f2937',
  secondaryText: '#586578',
  accent: '#3d4052',
  inputStroke: '#1f2937',
  white: '#ffffff',
  muted: '#6b7280',
  softPanel: '#eef2ff',
};

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
            accessibilityRole="checkbox"
            accessibilityState={{ checked: rememberMe }}
            onPress={() => setRememberMe((value) => !value)}
            style={styles.checkboxWrapper}
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
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don&apos;t have an account?{' '}
          <Text style={styles.signupLink} onPress={() => navigation.navigate('CreateAccount')}>
            Sign Up
          </Text>
        </Text>
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
    paddingTop: 100,
    alignItems: 'center',
  },
  logo: {
    fontSize: 58,
    fontWeight: '800',
    lineHeight: 60,
    letterSpacing: 1.2,
    color: palette.darkText,
    marginBottom: 36,
  },
  label: {
    width: '100%',
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: 0.4,
    color: palette.darkText,
    marginBottom: 12,
    marginTop: 8,
  },
  input: {
    width: '100%',
    height: 58,
    borderWidth: 2,
    borderColor: palette.inputStroke,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
    fontSize: 18,
    color: palette.darkText,
  },
  metaRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 22,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#1f2937',
    borderRadius: 5,
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: palette.softPanel,
  },
  checkmark: {
    color: palette.darkText,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 14,
  },
  rememberText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.secondaryText,
  },
  loginButton: {
    width: '100%',
    height: 58,
    backgroundColor: palette.accent,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  signupText: {
    marginTop: 30,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
  },
  signupLink: {
    color: palette.muted,
  },
});
