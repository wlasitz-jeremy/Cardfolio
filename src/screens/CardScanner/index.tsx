import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { palette } from '../../theme/colors';

const cardfolioLogoAsset = require('../../assets/Screenshot 2026-07-24 081326.png');
const scannerAsset = require('../../assets/Screenshot 2026-07-24 081337.png');
export default function CardScannerScreen({ navigation }: any) {
  return (
    <View style={styles.scannerScreen}>
      <View style={styles.scannerHeader}>
        <HamburgerMenu navigation={navigation} inline />
        <Image source={cardfolioLogoAsset} style={styles.cardfolioLogo} />
        <TouchableOpacity
          accessibilityLabel="Open location"
          onPress={() => navigation.getParent?.()?.navigate('Location')}
          style={styles.locationButton}
        >
          <SymbolView accessibilityElementsHidden name={{ ios: 'mappin.and.ellipse', android: 'location_on', web: 'location_on' }} tintColor={palette.darkText} size={60} />
        </TouchableOpacity>
      </View>

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
  scannerHeader: {
    height: 145,
    paddingHorizontal: 25,
    paddingTop: 38,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardfolioLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 14,
    marginRight: 'auto',
    marginTop: 0,
  },
  locationButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
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
