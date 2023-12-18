import React from 'react';
import Todo from './Todo';
import WithAuthProvider from '@/provider/WithAuthProvider';

const TodoPage = () => {
  return (
    <WithAuthProvider isWithAuth>
      <Todo />
    </WithAuthProvider>
  );
};

export default TodoPage;
