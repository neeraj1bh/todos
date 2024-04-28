import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import loadData from '@/utils/todoUtils';
import { useIsFocused } from '@react-navigation/native';
import { TodoList } from '@/components';

function Pending() {
  const [todos, setTodos] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadTodos = async () => {
      if (isFocused) {
        try {
          const filteredTodos = await loadData('pending');
          setTodos(filteredTodos);
        } catch (error) {
          Alert.alert('Error', error.message);
        }
      }
    };

    loadTodos();
  }, [isFocused]);

  return <TodoList todos={todos} />;
}

export default Pending;
