import { BookOpen, Camera, House, Search } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { palette } from '../../theme/colors';

type BottomTabBarProps = {
  navigation: any;
  activeTab?: 'Home' | 'Collections' | 'Cardfolio' | 'Community' | 'Blog';
};

export default function BottomTabBar({ navigation, activeTab }: BottomTabBarProps) {
  const iconColor = palette.darkText;
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
        <House size={30} color={iconColor} strokeWidth={1.8} />
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
        <Camera size={30} color={iconColor} strokeWidth={1.8} />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel="Search"
        accessibilityRole="tab"
        onPress={() => (isNestedFlow ? navigation.getParent?.()?.navigate('Search') : navigation.navigate('Search'))}
        style={styles.navButton}
      >
        <Search size={31} color={iconColor} strokeWidth={1.8} />
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel="Collections"
        accessibilityRole="tab"
        accessibilityState={{ selected: activeTab === 'Collections' }}
        onPress={() => navigateToTab('Collections')}
        style={styles.navButton}
      >
        <BookOpen size={30} color={iconColor} strokeWidth={1.8} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    left: 28,
    right: 28,
    bottom: 20,
    height: 84,
    borderWidth: 1.5,
    borderColor: palette.darkText,
    borderRadius: 16,
    backgroundColor: '#e3e1f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: palette.darkText,
    shadowOpacity: 0.22,
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
