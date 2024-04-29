import React from 'react';
import Checkbox from 'expo-checkbox';
import { STATUS, Todo } from '@/interfaces';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoItem({ todo: { text, status }, onToggle, onDelete }: TodoItemProps) {
  return (
    <View className="flex flex-row items-start w-full justify-between py-2">
      <View
        onTouchEnd={onToggle}
        className="flex border flex-row min-h-[48px] border-gray-400 rounded-xl py-2 px-4 w-[270px] items-start"
      >
        <Checkbox className="mr-2" value={status === STATUS.COMPLETED} />
        <Text
          className={`font-psemibold w-[210px] text-lg ${status === STATUS.COMPLETED ? 'line-through' : ''}`}
        >
          {text}
        </Text>
      </View>
      <CustomButton title="Delete" handlePress={onDelete} containerStyles="px-5 h-12" />
    </View>
  );
}

export default TodoItem;
