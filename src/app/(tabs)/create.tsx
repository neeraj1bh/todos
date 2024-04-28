import React, { useState } from 'react';
import {
  View, Text, TextInput, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { CustomButton } from '@/components';

function Create() {
  const [todoText, setTodoText] = useState('');

  const addTodo = async () => {
    if (todoText.trim() !== '') {
      try {
        const newTodo = { text: todoText, status: 'pending' };
        const storedTodos = await AsyncStorage.getItem('@todos');
        let todos = [];

        if (storedTodos !== null) {
          todos = JSON.parse(storedTodos);
        }

        todos.push(newTodo);
        await AsyncStorage.setItem('@todos', JSON.stringify(todos));
        setTodoText('');
      } catch (error) {
        Alert.alert('Error', 'Error saving data');
      }
      router.push('home');
    } else {
      Alert.alert('Error', 'Please enter a todo');
    }
  };

  return (
    <SafeAreaView className="flex h-full items-center justify-center p-4 pt-10 bg-white">
      <Text className="text-2xl font-bold mb-4">Todo App</Text>
      <View className="flex-row mb-4">
        <TextInput
          className="flex-1 border border-gray-400 rounded px-4 py-2 mr-2"
          placeholder="Enter your todo"
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />

        <CustomButton title="ADD" handlePress={addTodo} containerStyles="px-4 py-2" />
      </View>
    </SafeAreaView>
  );
}

export default Create;
