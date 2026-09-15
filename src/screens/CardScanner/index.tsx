import { Camera, ScanLine } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

export default function CardScannerScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerSpacing}>
        <InlineScreenHeader navigation={navigation} title="Card Scanner" />
      </View>

      <View style={styles.scannerFrame}>
        <View style={styles.cornerTopLeft} />
        <View style={styles.cornerTopRight} />
        <View style={styles.cornerBottomLeft} />
        <View style={styles.cornerBottomRight} />
        <ScanLine size={42} color={palette.white} strokeWidth={1.5} />
        <Text style={styles.scanHint}>Place a card inside the frame</Text>
      </View>

      <Text style={styles.description}>
        Scan a card to add it to your collection and view its details.
      </Text>

      <TouchableOpacity accessibilityRole="button" style={styles.scanButton}>
        <Camera size={22} color={palette.white} strokeWidth={1.8} />
        <Text style={styles.scanButtonText}>START SCANNING</Text>
      </TouchableOpacity>

      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 38,
  },
  headerSpacing: {
    marginBottom: 18,
    marginHorizontal: 28, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    minHeight: 60, 
    marginTop: 20
  },
  scannerFrame: {
    height: 440,
    marginTop: 22,
    borderRadius: 22,
    backgroundColor: '#20242b',
    borderWidth: 1,
    borderColor: '#414754',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 22,
    left: 22,
    width: 42,
    height: 42,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: palette.lavender,
  },
  cornerTopRight: {
    position: 'absolute',
    top: 22,
    right: 22,
    width: 42,
    height: 42,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: palette.lavender,
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 22,
    left: 22,
    width: 42,
    height: 42,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: palette.lavender,
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 22,
    right: 22,
    width: 42,
    height: 42,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: palette.lavender,
  },
  scanHint: {
    color: palette.white,
    fontFamily: fontFamilies.heading,
    fontSize: 16,
    marginTop: 18,
  },
  description: {
    color: palette.secondaryText,
    fontFamily: fontFamilies.body,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 18,
    textAlign: 'center',
  },
  scanButton: {
    height: 56,
    marginTop: 22,
    borderRadius: 14,
    backgroundColor: palette.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  scanButtonText: {
    color: palette.white,
    fontFamily: fontFamilies.heading,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});
