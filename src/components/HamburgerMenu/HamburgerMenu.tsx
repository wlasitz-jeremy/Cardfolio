import { useState } from 'react';
import {
  Bell,
  BookOpen,
  Compass,
  House,
  MapPin,
  Search,
  Settings,
  ShoppingBag,
  UserRound,
  X,
} from 'lucide-react-native';
import { SvgUri } from 'react-native-svg';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type HamburgerMenuProps = {
  navigation: any;
  inline?: boolean;
};

type MenuItem = {
  label: string;
  icon: typeof House;
  action: () => void;
};

export default function HamburgerMenu({ navigation, inline = false }: HamburgerMenuProps) {
  const [visible, setVisible] = useState(false);
  const findRootNavigation = () => {
    let current = navigation;
    let parent = current.getParent?.();

    while (parent) {
      current = parent;
      if (current.getState?.().routeNames?.includes('MainApp')) {
        return current;
      }
      parent = current.getParent?.();
    }

    return current;
  };

  const rootNavigation = findRootNavigation();

  const close = () => setVisible(false);
  const goToTab = (screen: string) => {
    close();
    rootNavigation.navigate('MainApp', { screen });
  };
  const goToRoot = (screen: string) => {
    close();
    rootNavigation.navigate(screen);
  };

  const items: MenuItem[] = [
    { label: 'Home', icon: House, action: () => goToTab('Home') },
    { label: 'Collections', icon: BookOpen, action: () => goToTab('Collections') },
    { label: 'My Cardfolio', icon: UserRound, action: () => goToTab('Cardfolio') },
    { label: 'Community', icon: Compass, action: () => goToTab('Community') },
    { label: 'Search', icon: Search, action: () => goToRoot('Search') },
    { label: 'Store', icon: ShoppingBag, action: () => goToRoot('StoreFlow') },
    { label: 'Notifications', icon: Bell, action: () => goToRoot('Notifications') },
    { label: 'Location', icon: MapPin, action: () => goToRoot('Location') },
    { label: 'Explore', icon: Compass, action: () => goToRoot('Explore') },
    { label: 'Profile', icon: UserRound, action: () => goToRoot('Profile') },
    { label: 'Settings', icon: Settings, action: () => goToRoot('Settings') },
  ];

  return (
    <>
      <TouchableOpacity
        accessibilityLabel="Open navigation menu"
        accessibilityRole="button"
        onPress={() => setVisible(true)}
        style={[styles.trigger, inline && styles.inlineTrigger]}
      >
        <SvgUri
          accessibilityLabel="Menu"
          uri="https://www.figma.com/api/mcp/asset/7fb0d750-a384-4e67-b90e-58c48eae3ac0.svg"
          width={40}
          height={40}
        />
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade" onRequestClose={close}>
        <View style={styles.modalRoot}>
          <Pressable accessibilityLabel="Close navigation menu" onPress={close} style={styles.backdrop} />
          <SafeAreaView style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <View>
                <Text style={styles.brand}>CardFolio</Text>
                <Text style={styles.subtitle}>Your collection, your story</Text>
              </View>
              <TouchableOpacity accessibilityLabel="Close menu" onPress={close} style={styles.closeButton}>
                <X size={24} color={palette.darkText} />
              </TouchableOpacity>
            </View>

            <View style={styles.menuList}>
              {items.map(({ label, icon: Icon, action }) => (
                <TouchableOpacity key={label} onPress={action} style={styles.menuItem}>
                  <Icon size={22} color={palette.darkText} strokeWidth={1.8} />
                  <Text style={styles.menuLabel}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.drawerFooter}>
              <Text style={styles.footerText}>Collect the moments worth keeping.</Text>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    top: 78,
    left: 25,
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: palette.darkText,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: -5, height: 5 },
  },
  inlineTrigger: {
    position: 'relative',
    top: 0,
    left: 0,
    marginBottom: 0,
    alignSelf: 'flex-start',
  },
  modalRoot: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 20,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(17, 19, 21, 0.42)',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '82%',
    zIndex: 2,
    elevation: 20,
    paddingHorizontal: 24,
    backgroundColor: palette.background,
    borderRightWidth: 1,
    borderRightColor: palette.darkText,
  },
  drawerHeader: {
    paddingTop: 18,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe3ea',
  },
  brand: {
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: palette.secondaryText,
    fontFamily: fontFamilies.body,
    fontSize: 13,
    marginTop: 4,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
  },
  menuList: {
    paddingTop: 18,
    gap: 6,
  },
  menuItem: {
    minHeight: 52,
    paddingHorizontal: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
  },
  menuLabel: {
    color: palette.darkText,
    fontFamily: fontFamilies.heading,
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 14,
  },
  drawerFooter: {
    marginTop: 'auto',
    paddingBottom: 20,
  },
  footerText: {
    color: palette.secondaryText,
    fontFamily: fontFamilies.body,
    fontSize: 12,
  },
});
