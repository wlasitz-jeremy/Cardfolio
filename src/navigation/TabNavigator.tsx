import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { ComponentType } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from '../screens/Home';
import CollectionsScreen from '../screens/CollectionsDecksExplore';
import CardfolioScreen from '../screens/Cardfolio';
import CommunityScreen from '../screens/Community';
import BlogScreen from '../screens/Blog';

type TabParamList = {
  Home: undefined;
  Collections: undefined;
  Cardfolio: undefined;
  Community: undefined;
  Blog: undefined;
};

type TabDefinition = {
  name: keyof TabParamList;
  component: ComponentType;
  icon: string;
};

const tabs: TabDefinition[] = [
  { name: 'Home', component: HomeScreen, icon: 'H' },
  { name: 'Collections', component: CollectionsScreen, icon: 'C' },
  { name: 'Cardfolio', component: CardfolioScreen, icon: 'F' },
  { name: 'Community', component: CommunityScreen, icon: 'U' },
  { name: 'Blog', component: BlogScreen, icon: 'B' },
];

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: { display: 'none' },
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
              {tabs.find((tab) => tab.name === route.name)?.icon ?? '•'}
            </Text>
          </View>
        ),
      })}
    >
      {tabs.map(({ name, component }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
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
