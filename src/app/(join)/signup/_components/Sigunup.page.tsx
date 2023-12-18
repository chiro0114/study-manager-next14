import React from 'react';
import Signup from './Signup';
import WithAuthProvider from '@/provider/WithAuthProvider';

const SignupPage = () => {
  return (
    <WithAuthProvider>
      <Signup />
    </WithAuthProvider>
  );
};

export default SignupPage;
