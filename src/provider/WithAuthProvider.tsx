'use client';

import useAuthUser from '@/hooks/auth/useAuthUser';
import useUserAuthGuard from '@/hooks/auth/useUserAuthGuard';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  isWithAuth?: true | undefined;
};

const WithAuthProvider: React.FC<Props> = ({ children, isWithAuth }) => {
  const [isReadyUserAuth, setIsReadyUserAuth] = useState(false);
  useAuthUser(setIsReadyUserAuth);
  useUserAuthGuard(isWithAuth, isReadyUserAuth);
  return <>{children}</>;
};

export default WithAuthProvider;
