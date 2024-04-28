import React from 'react';
import { TodoList } from '@/components';
import { useGlobalContext } from '@/context/GlobalProvider';
import NoTodosScreen from '@/components/NoTodosScreen';

function Home() {
  const { todos, handleDelete, handleToggle } = useGlobalContext();

  return (
    <>
      {todos.length ? (
        <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
      ) : (
        <NoTodosScreen
          title="No Todos Found"
          subtitle="Have you completed all your tasks?"
          buttonText="Create Todo"
          route="/create"
        />
      )}
    </>
  );
}

export default Home;
