import { Camera, ScanLine } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import InlineScreenHeader from '../../components/InlineScreenHeader/InlineScreenHeader';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

export default function CardScannerScreen({ navigation }: any) {
  return (
    <View style={styles.scannerScreen}>
      <View style={styles.scannerHeader}>
        <InlineScreenHeader navigation={navigation} title="Card Scanner" />
      </View>

      <View style={styles.scanViewport}>
        <View style={styles.scanFrameTopLeft} />
        <View style={styles.scanFrameTopRight} />
        <View style={styles.scanFrameBottomLeft} />
        <View style={styles.scanFrameBottomRight} />
        <ScanLine size={42} color={palette.white} strokeWidth={1.5} />
        <Text style={styles.scanInstruction}>Place a card inside the frame</Text>
      </View>

      <Text style={styles.scannerDescription}>
        Scan a card to add it to your collection and view its details.
      </Text>

      <TouchableOpacity accessibilityRole="button" style={styles.startScanButton}>
        <Camera size={22} color={palette.white} strokeWidth={1.8} />
        <Text style={styles.startScanButtonText}>START SCANNING</Text>
      </TouchableOpacity>

      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  scannerScreen: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 38,
  },
  scannerHeader: {
    marginBottom: 18,
    marginHorizontal: 28, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    minHeight: 60, 
    marginTop: 20
  },
  scanViewport: {
    height: 440,
    marginTop: 22,
    borderRadius: 22,
    backgroundColor: '#20242b',
    borderWidth: 1,
    borderColor: '#414754',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanFrameTopLeft: {
    position: 'absolute',
    top: 22,
    left: 22,
    width: 42,
    height: 42,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: palette.lavender,
  },
  scanFrameTopRight: {
    position: 'absolute',
    top: 22,
    right: 22,
    width: 42,
    height: 42,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: palette.lavender,
  },
  scanFrameBottomLeft: {
    position: 'absolute',
    bottom: 22,
    left: 22,
    width: 42,
    height: 42,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: palette.lavender,
  },
  scanFrameBottomRight: {
    position: 'absolute',
    bottom: 22,
    right: 22,
    width: 42,
    height: 42,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: palette.lavender,
  },
  scanInstruction: {
    color: palette.white,
    fontFamily: fontFamilies.heading,
    fontSize: 16,
    marginTop: 18,
  },
  scannerDescription: {
    color: palette.secondaryText,
    fontFamily: fontFamilies.body,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 18,
    textAlign: 'center',
  },
  startScanButton: {
    height: 56,
    marginTop: 22,
    borderRadius: 14,
    backgroundColor: palette.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  startScanButtonText: {
    color: palette.white,
    fontFamily: fontFamilies.heading,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});
