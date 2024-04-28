import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import CustomButton from './CustomButton';

type Props = {
  title: string;
  subtitle: string;
  buttonText?: string;
  route?: string;
};

function NoTodosScreen({
  title, subtitle, buttonText, route,
}: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Text className="text-3xl font-bold mb-4 text-gray-800">{title}</Text>
      <Text className="text-lg mb-8 text-gray-600">{subtitle}</Text>
      {!buttonText || !route ? null : (
        <CustomButton
          title={buttonText}
          handlePress={() => router.push(route)}
          containerStyles=" px-6 py-3 rounded-md"
        />
      )}
    </SafeAreaView>
  );
}

NoTodosScreen.defaultProps = {
  buttonText: '',
  route: '',
};

export default NoTodosScreen;
