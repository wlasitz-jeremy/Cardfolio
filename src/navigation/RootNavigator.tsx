import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import CardInfoNavigator from './CardInfoNavigator';
import StoreNavigator from './StoreNavigator';
import SearchScreen from '../screens/Search';
import LocationScreen from '../screens/Location';
import NotificationsScreen from '../screens/Notifications';
import ContactUsScreen from '../screens/ContactUs';
import UniverseScreen from '../screens/Universe';
import CardScannerScreen from '../screens/CardScanner';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="Universe" component={UniverseScreen} />
        <Stack.Screen name="CardScanner" component={CardScannerScreen} />
        <Stack.Screen name="CardInfoFlow" component={CardInfoNavigator} />
        <Stack.Screen name="StoreFlow" component={StoreNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
