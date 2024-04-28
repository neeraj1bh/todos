import { STATUS, Todo } from '@/interfaces';
import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { Alert } from 'react-native';
import loadData from '@/utils/todoUtils';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

type GlobalContextType = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  addTodo: (todoText: string) => void;
  handleToggle: (key: string) => void;
  handleDelete: (key: string) => void;
};

const GlobalContext = createContext({} as GlobalContextType);
export const useGlobalContext = () => useContext(GlobalContext);

type GlobalProviderProps = {
  children: React.ReactNode;
};

function GlobalProvider({ children }: GlobalProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadTodos = async () => {
      try {
        const filteredTodos = await loadData();
        setTodos(filteredTodos);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };

    loadTodos();
    setLoading(false);
  }, []);

  const addTodo = async (todoText: string) => {
    if (todoText.trim() !== '') {
      try {
        const newTodo = { text: todoText, status: STATUS.PENDING, key: uuidv4() };

        const updatedTodos = [...todos, newTodo];

        await AsyncStorage.setItem('@todos', JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
      } catch (error) {
        Alert.alert('Error', 'Error saving data');
      }
      router.push('home');
    } else {
      Alert.alert('Error', 'Please enter a todo');
    }
  };

  const onChange = async (newTodos: Todo[]) => {
    await AsyncStorage.setItem('@todos', JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const handleDelete = (key: string) => {
    const newTodos = todos.filter((todo) => todo.key !== key);
    onChange(newTodos);
  };

  const handleToggle = (key: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.key === key) {
        return {
          ...todo,
          status: todo.status === STATUS.PENDING ? STATUS.COMPLETED : STATUS.PENDING,
        };
      }
      return todo;
    });

    onChange(newTodos);
  };

  const value = useMemo(
    () => ({
      todos,
      setTodos,
      loading,
      setLoading,
      addTodo,
      handleToggle,
      handleDelete,
    }),
    [todos, setTodos, loading, setLoading, addTodo, handleToggle, handleDelete],
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
