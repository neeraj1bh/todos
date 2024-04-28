import {
  View, Text, Image, ImageSourcePropType,
} from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '@/constants';

type Props = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

function TabIcon({
  icon, color, name, focused,
}: Props) {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color }}>
        {name}
      </Text>
    </View>
  );
}

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'All',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} name="All" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="completed"
        options={{
          title: 'Completed',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.completed} name="Completed" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pending"
        options={{
          title: 'Pending',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.pending} name="Pending" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.plus} name="Create" focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
