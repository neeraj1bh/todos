import { TodoList, CustomButton } from '@/components';
import { useGlobalContext } from '@/context/GlobalProvider';
import NoTodosScreen from '@/components/NoTodosScreen';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home() {
  const {
    todos, handleDelete, handleToggle, addTodo,
  } = useGlobalContext();
  const [todoText, setTodoText] = useState('');

  return (
    <>
      <SafeAreaView className="flex justify-center p-4 pt-10 bg-primary ">
        <View className="flex-row mb-4 ">
          <TextInput
            className="flex-1 border border-gray-400 h-14 rounded px-4 py-2 text-white placeholder:"
            placeholder="Enter your todo"
            placeholderTextColor="#fff"
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
      {todos.length ? (
        <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
      ) : (
        <NoTodosScreen
          title="No Todos Found"
          subtitle="Lets get productive by creating some todos!"
        />
      )}
    </>
  );
}

export default Home;
