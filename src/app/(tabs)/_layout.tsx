import {
  View, Text, Image, ImageSourcePropType,
} from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '@/constants';
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '@/context/GlobalProvider';
import { SCREENS } from '@/interfaces';

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

enum StatusBarStyleEnum {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto',
  INVERTED = 'inverted',
}

function TabsLayout() {
  const { activeTab, changeActiveTab } = useGlobalContext();

  return (
    <>
      <StatusBar
        style={activeTab === 0 ? StatusBarStyleEnum.LIGHT : StatusBarStyleEnum.DARK}
        backgroundColor={activeTab === 0 ? '#161622' : '#FFFFFF'}
      />
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
          listeners={{
            tabPress: () => {
              changeActiveTab(SCREENS.HOME);
            },
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
          listeners={{
            tabPress: () => {
              changeActiveTab(SCREENS.COMPLETED);
            },
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
          listeners={{
            tabPress: () => {
              changeActiveTab(SCREENS.PENDING);
            },
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;
