import React from 'react';
import List from './List';
import WithAuthProvider from '@/provider/WithAuthProvider';

const ListPage = () => {
  return (
    <WithAuthProvider isWithAuth>
      <List />
    </WithAuthProvider>
  );
};

export default ListPage;
