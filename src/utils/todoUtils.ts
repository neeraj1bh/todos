import { STATUS } from '@/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loadData = async (status?: STATUS) => {
  try {
    const storedTodos = await AsyncStorage.getItem('@todos');
    if (storedTodos !== null) {
      const parsedTodos = JSON.parse(storedTodos);
      if (status === STATUS.PENDING) {
        return parsedTodos.filter((todo) => todo.status === STATUS.PENDING);
      }
      if (status === STATUS.COMPLETED) {
        return parsedTodos.filter((todo) => todo.status === STATUS.COMPLETED);
      }
      return parsedTodos;
    }
    return [];
  } catch (error) {
    throw new Error('Failed to load data');
  }
};

export default loadData;
