'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilRootProviderProps {
  children: ReactNode;
}

const RecoilRootProvider = ({ children }: RecoilRootProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
