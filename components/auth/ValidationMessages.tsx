'use client';

import { FormValue, formContext } from '@/contexts/FormContext';

import { ReactNode, useContext } from 'react';

interface ValidationMessagesProps {
  children: ReactNode;
  name: string;
}

const ValidationMessages = ({ children, name }: ValidationMessagesProps) => {
  const { isEmpty, isValid } = useContext(formContext) as FormValue;

  if (!isValid || !isEmpty) return null;

  return <>{!isValid[name] && !isEmpty[name] && <div>{children}</div>}</>;
};

export default ValidationMessages;
