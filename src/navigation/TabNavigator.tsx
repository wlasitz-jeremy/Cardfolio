import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from '../screens/Home';
import CollectionsScreen from '../screens/Collections';
import CardfolioScreen from '../screens/Cardfolio';
import CommunityScreen from '../screens/Community';
import BlogScreen from '../screens/Blog';

const Tab = createBottomTabNavigator();

const tabIcons: Record<string, string> = {
  Home: 'H',
  Collections: 'C',
  Cardfolio: 'F',
  Community: 'U',
  Blog: 'B',
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#f5f6fa',
          borderTopWidth: 0,
          elevation: 0,
          height: 78,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: '#0f172a',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '700',
          letterSpacing: 0.3,
          textTransform: 'uppercase',
        },
        tabBarIcon: ({ color, focused }) => (
          <View style={[styles.tabIconContainer, focused && styles.tabIconActive]}>
            <Text
              style={[
                styles.tabIcon,
                { color: focused ? '#ffffff' : color },
              ]}
            >
              {tabIcons[route.name] ?? '•'}
            </Text>
          </View>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Collections" component={CollectionsScreen} />
      <Tab.Screen name="Cardfolio" component={CardfolioScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconActive: {
    backgroundColor: '#3d4052',
  },
  tabIcon: {
    fontSize: 14,
    fontWeight: '800',
  },
});
