import { StyleSheet, Text, View } from 'react-native';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type InlineScreenHeaderProps = {
  navigation: any;
  title: string;
};

export default function InlineScreenHeader({ navigation, title }: InlineScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <HamburgerMenu navigation={navigation} inline />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    gap: 14,
  },
  title: {
    flex: 1,
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
  },
});
