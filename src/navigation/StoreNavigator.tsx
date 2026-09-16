import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StoreScreen from '../screens/Store';
import CartScreen from '../screens/Store/Cart';
import CheckoutScreen from '../screens/Store/Checkout';
import ThanksScreen from '../screens/Store/Thanks';

const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Store" component={StoreScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Thanks" component={ThanksScreen} />
    </Stack.Navigator>
  );
}
