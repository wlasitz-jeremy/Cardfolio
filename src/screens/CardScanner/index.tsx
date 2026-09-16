import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { palette } from '../../theme/colors';

const cardfolioLogoAsset = 'https://www.figma.com/api/mcp/asset/05b6ea3a-5fa8-46b2-bdc9-3d115e7629c8.png';
const scannerAsset = 'https://www.figma.com/api/mcp/asset/b7e934f3-c5ef-4269-8709-32781c6bf053.png';
const markerPinAsset = 'https://www.figma.com/api/mcp/asset/04fba0de-307e-4a3f-b094-161cf1c68d4e.svg';
const scanControlAsset = 'https://www.figma.com/api/mcp/asset/ba5a6e7b-b38d-4bde-b144-56457320ee16.svg';

export default function CardScannerScreen({ navigation }: any) {
  return (
    <View style={styles.scannerScreen}>
      <View style={styles.scannerHeader}>
        <HamburgerMenu navigation={navigation} inline />
        <Image source={{ uri: cardfolioLogoAsset }} style={styles.cardfolioLogo} />
        <TouchableOpacity
          accessibilityLabel="Open location"
          onPress={() => navigation.getParent?.()?.navigate('Location')}
          style={styles.locationButton}
        >
          <SvgUri accessibilityElementsHidden uri={markerPinAsset} width={60} height={60} />
        </TouchableOpacity>
      </View>

      <View style={styles.scannerViewport}>
        <Image source={{ uri: scannerAsset }} style={styles.scannerImage} resizeMode="cover" />
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Start scanning"
          style={styles.scanControl}
        >
          <SvgUri accessibilityElementsHidden uri={scanControlAsset} width={63} height={63} />
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
