import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import CollectionsScreen from '../screens/Collections';
import CardfolioScreen from '../screens/Cardfolio';
import CommunityScreen from '../screens/Community';
import BlogScreen from '../screens/Blog';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Collections" component={CollectionsScreen} />
      <Tab.Screen name="Cardfolio" component={CardfolioScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
    </Tab.Navigator>
  );
}
