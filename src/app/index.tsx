import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components';

function Welcome() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Improve your
              {' '}
              {'\n'}
              Prouductivity with
              {' '}
              <Text className="text-secondary-200">Todos App!</Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Start organizing your tasks and boosting your productivity with Todos App.
          </Text>
          <CustomButton
            title="Get Started"
            handlePress={() => router.push('/home')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

export default Welcome;
