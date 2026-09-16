import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { palette } from '../../theme/colors';

const scannerAsset = require('../../assets/Screenshot 2026-07-24 081337.png');
export default function CardScannerScreen({ navigation }: any) {
  return (
    <View style={styles.scannerScreen}>
      <NavHeader navigation={navigation} />

      <View style={styles.scannerViewport}>
        <Image source={scannerAsset} style={styles.scannerImage} resizeMode="cover" />
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Start scanning"
          style={styles.scanControl}
        >
          <SymbolView accessibilityElementsHidden name={{ ios: 'viewfinder', android: 'center_focus_strong', web: 'center_focus_strong' }} tintColor={palette.darkText} size={63} />
        </TouchableOpacity>
      </View>

      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  scannerScreen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  scannerViewport: {
    width: '100%',
    height: 520,
    position: 'relative',
  },
  scannerImage: {
    width: '100%',
    height: '100%',
  },
  scanControl: {
    position: 'absolute',
    width: 63,
    height: 63,
    left: '50%',
    bottom: -14,
    marginLeft: -31.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
