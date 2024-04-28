import AsyncStorage from '@react-native-async-storage/async-storage';

const loadData = async (status?: string) => {
  try {
    const storedTodos = await AsyncStorage.getItem('@todos');
    if (storedTodos !== null) {
      const parsedTodos = JSON.parse(storedTodos);
      if (status === 'pending') {
        return parsedTodos.filter((todo) => todo.status === 'pending');
      }
      if (status === 'completed') {
        return parsedTodos.filter((todo) => todo.status === 'done');
      }
      return parsedTodos;
    }
    return [];
  } catch (error) {
    throw new Error('Failed to load data');
  }
};

export default loadData;
