import {
  SafeAreaView,
  ScrollView,
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

type CreateAccountScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

const palette = {
  background: '#f4f5f9',
  darkText: '#1f2937',
  secondaryText: '#586578',
  accent: '#3d4052',
  inputStroke: '#1f2937',
  white: '#ffffff',
  muted: '#6b7280',
};

export default function CreateAccountScreen({ navigation }: CreateAccountScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>

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

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.9}
            onPress={() => navigation.replace('MainApp')}
          >
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.footerLink} onPress={() => navigation.navigate('Login')}>
              Log In
            </Text>
          </Text>
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
    paddingTop: 70,
    paddingBottom: 40,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    lineHeight: 46,
    letterSpacing: 0.6,
    color: palette.darkText,
    marginBottom: 24,
    textAlign: 'center',
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
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 58,
    borderWidth: 2,
    borderColor: palette.inputStroke,
    borderRadius: 10,
    backgroundColor: palette.white,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 18,
    color: palette.darkText,
  },
  primaryButton: {
    width: '100%',
    height: 58,
    backgroundColor: palette.accent,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  footerText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
    color: palette.darkText,
  },
  footerLink: {
    color: palette.muted,
  },
});
