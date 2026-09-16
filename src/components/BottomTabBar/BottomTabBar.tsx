import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { palette } from '../../theme/colors';

const homeIconAsset = 'https://www.figma.com/api/mcp/asset/cb8466f7-1d75-4550-93a2-f41b2855ddbf.svg';
const scannerIconAsset = 'https://www.figma.com/api/mcp/asset/d2b932f4-ac7d-4f3b-b8ef-b51010c3df12.svg';
const searchIconAsset = 'https://www.figma.com/api/mcp/asset/6a6f4590-85fa-469c-8fab-5f1525e47d43.svg';
const collectionsIconAsset = 'https://www.figma.com/api/mcp/asset/65e9a564-e597-4d89-85ed-d8e47c2eb535.svg';

type BottomTabBarProps = {
  navigation: any;
  activeTab?: 'Home' | 'Collections' | 'Cardfolio' | 'Community' | 'Blog';
};

export default function BottomTabBar({ navigation, activeTab }: BottomTabBarProps) {
  const isNestedFlow = navigation.getState?.().type !== 'tab';
  const navigateToTab = (route: string) => {
    if (isNestedFlow) {
      const parentNavigation = navigation.getParent?.();
      if (parentNavigation?.navigate) {
        parentNavigation.navigate('MainApp', { screen: route });
      } else {
        navigation.navigate('MainApp', { screen: route });
      }
      return;
    }

    navigation.navigate(route);
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        accessibilityLabel="Home"
        accessibilityRole="tab"
        accessibilityState={{ selected: activeTab === 'Home' }}
        onPress={() => navigateToTab('Home')}
        style={styles.navButton}
      >
        <SvgUri accessibilityElementsHidden uri={homeIconAsset} width={30} height={30} />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel="Card Scanner"
        accessibilityRole="tab"
        onPress={() => {
          if (isNestedFlow) {
            navigation.getParent?.()?.navigate('CardScanner');
          } else {
            navigation.navigate('CardScanner');
          }
        }}
        style={styles.navButton}
      >
        <SvgUri accessibilityElementsHidden uri={scannerIconAsset} width={30} height={30} />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel="Search"
        accessibilityRole="tab"
        onPress={() => (isNestedFlow ? navigation.getParent?.()?.navigate('Search') : navigation.navigate('Search'))}
        style={styles.navButton}
      >
        <SvgUri accessibilityElementsHidden uri={searchIconAsset} width={30} height={30} />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel="Collections"
        accessibilityRole="tab"
        accessibilityState={{ selected: activeTab === 'Collections' }}
        onPress={() => navigateToTab('Collections')}
        style={styles.navButton}
      >
        <SvgUri accessibilityElementsHidden uri={collectionsIconAsset} width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    left: 25,
    right: 25,
    bottom: 52,
    height: 80,
    borderWidth: 1.5,
    borderColor: palette.darkText,
    borderRadius: 12,
    backgroundColor: '#e2e1f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: palette.darkText,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
  },
  navButton: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
