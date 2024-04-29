import { Todo } from '@/interfaces';
import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  onToggle: (key: string) => void;
  onDelete: (key: string) => void;
};

function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <SafeAreaView className="p-4 bg-white flex-1 w-full">
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => onToggle(item.key)}
            onDelete={() => onDelete(item.key)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default TodoList;
