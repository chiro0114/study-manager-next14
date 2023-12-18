import React from 'react';
import Profile from './Profile';
import WithAuthProvider from '@/provider/WithAuthProvider';

const ProfilePage = () => {
  return (
    <WithAuthProvider isWithAuth>
      <Profile />
    </WithAuthProvider>
  );
};

export default ProfilePage;
