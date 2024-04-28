import React, { useMemo } from 'react';
import { TodoList } from '@/components';
import { STATUS } from '@/interfaces';
import NoTodosScreen from '@/components/NoTodosScreen';
import { useGlobalContext } from '@/context/GlobalProvider';

function Completed() {
  const { todos: allTodos, handleDelete, handleToggle } = useGlobalContext();

  const todos = useMemo(
    () => allTodos.filter((todo) => todo.status === STATUS.COMPLETED),
    [allTodos],
  );

  return (
    <>
      {todos.length ? (
        <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
      ) : (
        <NoTodosScreen
          title="No Todos Found"
          subtitle="Have you completed all your tasks?"
          buttonText="Check it out!"
          route="/home"
        />
      )}
    </>
  );
}

export default Completed;
