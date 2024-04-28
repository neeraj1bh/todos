import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '@/components';
import { useGlobalContext } from '@/context/GlobalProvider';

function Create() {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useGlobalContext();

  return (
    <SafeAreaView className="flex h-full items-center justify-center p-4 pt-10 bg-white">
      <Text className="text-2xl font-pbold uppercase tracking-wide     mb-4">
        Lets get productive...
      </Text>
      <View className="flex-row mb-4">
        <TextInput
          className="flex-1 border border-gray-400 h-14 rounded px-4 py-2"
          placeholder="Enter your todo"
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />
      </View>
      <CustomButton
        title="ADD"
        handlePress={() => {
          addTodo(todoText);
          setTodoText('');
        }}
        containerStyles="px-7 py-4"
      />
    </SafeAreaView>
  );
}

export default Create;
