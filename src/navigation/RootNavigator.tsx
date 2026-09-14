import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

export default function RootNavigator() {
  const isLoggedIn = false; // replace with real auth later

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
