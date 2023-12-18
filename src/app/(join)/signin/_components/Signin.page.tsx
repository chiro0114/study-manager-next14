import React from 'react';
import Signin from './Signin';
import WithAuthProvider from '@/provider/WithAuthProvider';

const SigninPage = () => {
  return (
    <WithAuthProvider>
      <Signin />
    </WithAuthProvider>
  );
};

export default SigninPage;
