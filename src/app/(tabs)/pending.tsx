import React, { useMemo } from 'react';
import { TodoList } from '@/components';
import { STATUS } from '@/interfaces';
import NoTodosScreen from '@/components/NoTodosScreen';
import { useGlobalContext } from '@/context/GlobalProvider';

function Pending() {
  const { todos: allTodos, handleDelete, handleToggle } = useGlobalContext();

  const todos = useMemo(
    () => allTodos.filter((todo) => todo.status === STATUS.PENDING),
    [allTodos],
  );

  return (
    <>
      {todos.length ? (
        <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
      ) : (
        <NoTodosScreen
          title="No Todos Found"
          subtitle="You have completed all your tasks!"
          buttonText="Create Todo"
          route="/create"
        />
      )}
    </>
  );
}

export default Pending;
