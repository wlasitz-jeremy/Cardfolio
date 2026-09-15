import { useState } from 'react';
import {
  Image,
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

const imgCheckCircle =
  'https://www.figma.com/api/mcp/asset/814a1674-79c7-46ed-82d8-eb5cac768286.svg';

const palette = {
  background: '#f4f4f8',
  darkText: '#1e293b',
  secondaryText: '#424b57',
  accent: '#4a475c',
  inputStroke: '#1e293b',
  white: '#ffffff',
  muted: '#767677',
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
              {rememberMe ? (
                <Image
                  source={{ uri: imgCheckCircle }}
                  resizeMode="contain"
                  style={styles.checkmarkIcon}
                />
              ) : null}
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
    fontFamily: 'Oswald',
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
    fontFamily: 'Oswald',
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
    backgroundColor: '#f4f4f8',
  },
  checkmarkIcon: {
    width: 18,
    height: 18,
  },
  rememberText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: 'Oswald',
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.secondaryText,
    fontFamily: 'Oswald',
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
    fontFamily: 'Oswald',
  },
  signupText: {
    marginTop: 32,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
    fontFamily: 'Oswald',
  },
  signupLink: {
    color: palette.muted,
  },
});
