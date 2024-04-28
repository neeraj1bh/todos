import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

enum STATUS {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

type Props = {
  todos: { status: STATUS; text: string }[];
};

function TodoList({ todos }: Props) {
  return (
    <SafeAreaView className="p-4 bg-white flex-1">
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View className="border border-gray-400 rounded px-4 py-2 mb-2">
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default TodoList;
