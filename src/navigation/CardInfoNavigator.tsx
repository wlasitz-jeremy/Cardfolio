import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardInfoScreen from '../screens/CardInfo';

const Stack = createNativeStackNavigator();

export default function CardInfoNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CardInfo" component={CardInfoScreen} />
    </Stack.Navigator>
  );
}
