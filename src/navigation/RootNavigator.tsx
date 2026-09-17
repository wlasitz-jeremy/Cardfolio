import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '../context/ThemeContext';
import { navigationThemes } from '../theme/colors';
import AuthNavigator from './AuthNavigator';
import CardInfoNavigator from './CardInfoNavigator';
import StoreNavigator from './StoreNavigator';
import SearchScreen from '../screens/Search';
import LocationScreen from '../screens/Location';
import NotificationsScreen from '../screens/Notifications';
import SettingsScreen from '../screens/Settings';
import ContactUsScreen from '../screens/ContactUs';
import UniverseScreen from '../screens/Universe';
import CardScannerScreen from '../screens/CardScanner';
import ProfileScreen from '../screens/Profile';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { mode } = useTheme();

  return (
    <NavigationContainer theme={navigationThemes[mode]}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="Universe" component={UniverseScreen} />
        <Stack.Screen name="CardScanner" component={CardScannerScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CardInfoFlow" component={CardInfoNavigator} />
        <Stack.Screen name="StoreFlow" component={StoreNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
