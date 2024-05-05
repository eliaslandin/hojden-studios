"use client"

import { Button } from "@/components/ui/button";
import {useParams} from 'next/navigation';
import { ReactNode } from 'react';
import {useRouter, usePathname} from '@/navigation';

export const LocaleSelectButton = ({
  className,
  children,
  localeValue
}: {
  className?: string;
  children: ReactNode;
  localeValue: string;
}) => {
  const pathname = usePathname();
  

  const handleClick = () => {
    if (localeValue === "en") {
      window.location.href = `http://en.localhost:3000${pathname}`
    } else {
      window.location.href = `http://localhost:3000${pathname}`
    }
  }

  return (
    <Button variant="ghost" onClick={() => handleClick()}>
      {children}
    </Button>
  );
};
