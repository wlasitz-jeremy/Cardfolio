import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type WelcomeStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<WelcomeStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.welcomeSafeArea}>
      <View style={styles.welcomeScreen}>
        <View style={styles.welcomeArtwork} accessibilityElementsHidden>
          <View style={[styles.cardShape, styles.cardBack]}>
            <View style={styles.cardStripe} />
            <View style={styles.cardDot} />
          </View>
          <View style={[styles.cardShape, styles.cardMiddle]}>
            <View style={styles.cardStripe} />
            <View style={styles.cardDot} />
          </View>
          <View style={[styles.cardShape, styles.cardFront]}>
            <View style={styles.frontLine} />
            <Image style={styles.cardfolioLogo} source={require('../../assets/cardfolio-logo.png')}/>
            <View style={styles.frontLine} />
          </View>
        </View>

        <View style={styles.welcomeCopy}>
          <Text style={styles.welcomeKicker}>Your collection, your story</Text>
          <Text style={styles.welcomeTitle}>
            Welcome to{`\n`}CardFolio
          </Text>
          <Text style={styles.welcomeDescription}>
            Discover, organize, and celebrate the cards that mean the most to you.
          </Text>
        </View>

        <View style={styles.welcomeActions}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Create a CardFolio account"
            onPress={() => navigation.navigate('CreateAccount')}
            style={({ pressed }) => [styles.createAccountButton, pressed && styles.pressed]}>
            <Text style={styles.createAccountButtonText}>I Don't Have an Account - Sign Up</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Log in to CardFolio"
            onPress={() => navigation.navigate('Login')}
            style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}
          >
            <Text style={styles.loginButtonText}>I Already Have an Account - Log In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcomeSafeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  welcomeScreen: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 22,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  logoMark: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.accent,
    transform: [{ rotate: '8deg' }],
  },
  logoMarkInner: {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: palette.white,
    borderRadius: 4,
    transform: [{ rotate: '-8deg' }],
  },
  welcomeArtwork: {
    height: 260,
    marginTop: 42,
    marginBottom: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardShape: {
    position: 'absolute',
    width: 148,
    height: 204,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: palette.accent,
  },
  cardBack: {
    backgroundColor: palette.lavender,
    transform: [{ rotate: '-17deg' }, { translateX: -48 }, { translateY: 12 }],
  },
  cardMiddle: {
    backgroundColor: palette.lavenderDark,
    transform: [{ rotate: '15deg' }, { translateX: 46 }, { translateY: 8 }],
  },
  cardFront: {
    backgroundColor: palette.accent,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    transform: [{ rotate: '-3deg' }],
    shadowColor: '#1e293b',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  cardStripe: {
    width: 86,
    height: 9,
    borderRadius: 5,
    backgroundColor: palette.accent,
    marginTop: 24,
    alignSelf: 'center',
  },
  cardDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: palette.white,
    opacity: 0.7,
    alignSelf: 'center',
    marginTop: 52,
  },
  frontGlyph: {
    color: palette.white,
    fontSize: 64,
    lineHeight: 76,
    fontWeight: '300',
  },
  frontLine: {
    width: '54%',
    height: 5,
    borderRadius: 3,
    backgroundColor: palette.lavender,
    opacity: 0.75,
  },
  welcomeCopy: {
    alignItems: 'center',
  },
  welcomeKicker: {
    color: palette.accent,
    fontFamily: fontFamilies.heading,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  welcomeTitle: {
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
    fontSize: 44,
    fontWeight: '700',
    lineHeight: 46,
    textAlign: 'center',
  },
  welcomeDescription: {
    color: palette.secondaryText,
    fontFamily: fontFamilies.heading,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 16,
    maxWidth: 310,
    textAlign: 'center',
  },
  welcomeActions: {
    gap: 12,
    marginTop: 28,
  },
  createAccountButton: {
    minHeight: 58,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: palette.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccountButtonText: {
    color: palette.white,
    fontFamily: fontFamilies.heading,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },
  primaryButtonArrow: {
    color: palette.white,
    fontSize: 24,
    lineHeight: 24,
    marginLeft: 12,
    marginTop: -2,
  },
  loginButton: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: palette.accent,
    backgroundColor: 'transparent',
  },
  loginButtonText: {
    color: palette.accent,
    fontFamily: fontFamilies.heading,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  pressed: {
    opacity: 0.78,
  },
  footer: {
    color: '#767677',
    fontFamily: fontFamilies.heading,
    fontSize: 12,
    marginTop: 'auto',
    textAlign: 'center',
  },
  cardfolioLogo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 20,
  },
});
