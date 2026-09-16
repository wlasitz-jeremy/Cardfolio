import { ReactNode } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const cardfolioLogoAsset = require('../../assets/Screenshot 2026-07-24 081326.png');

type NavHeaderProps = {
  navigation: any;
  title?: string;
  children?: ReactNode;
};

export default function NavHeader({ navigation, title, children }: NavHeaderProps) {
  return (
    <View style={styles.navHeader}>
      <HamburgerMenu navigation={navigation} inline />
      {children ? (
        <View style={styles.middleSlot}>{children}</View>
      ) : title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <Image source={cardfolioLogoAsset} style={styles.cardfolioLogo} />
      )}
      <TouchableOpacity
        accessibilityLabel="Open location"
        onPress={() => navigation.getParent?.()?.navigate('Location')}
        style={styles.locationButton}
      >
        <SymbolView accessibilityElementsHidden name={{ ios: 'mappin.and.ellipse', android: 'location_on', web: 'location_on' }} tintColor={palette.darkText} size={60} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navHeader: {
    paddingHorizontal: 25,
    paddingTop: 68,
    paddingBottom: 20,
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  middleSlot: {
    flex: 1,
    marginLeft: 14,
  },
  title: {
    flex: 1,
    marginLeft: 14,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
  },
  cardfolioLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 14,
    marginRight: 'auto',
  },
  locationButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
