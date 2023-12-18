import React from 'react';
import Diary from './Diary';
import WithAuthProvider from '@/provider/WithAuthProvider';

const DiaryPage = () => {
  return (
    <WithAuthProvider isWithAuth>
      <Diary />
    </WithAuthProvider>
  );
};

export default DiaryPage;
