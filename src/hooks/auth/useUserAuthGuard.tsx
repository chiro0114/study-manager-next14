'use client';

import { useUserAuthStore } from '@/store/userAuthStore';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useUserAuthGuard = (isWithAuth: true | undefined, isReadyUserAuth: boolean) => {
  const userAuth = useUserAuthStore((state) => state.userAuth);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isReadyUserAuth) return;

    if ((pathname === '/signin' || pathname === '/signup') && userAuth) {
      router.push('/');
    }

    if (!userAuth && isWithAuth) {
      router.push('/signup');
    }
  }, [isReadyUserAuth, userAuth]);
};

export default useUserAuthGuard;
