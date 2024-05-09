"use client"

import { Button } from "@/components/ui/button";
import { ReactNode } from 'react';
import {usePathname} from '@/navigation';

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
      window.location.href = `en.hojden-studios.vercel.app${pathname}`
    } else {
      window.location.href = `hojden-studios.vercel.app${pathname}`
    }
  }

  return (
    <Button variant="ghost" onClick={() => handleClick()}>
      {children}
    </Button>
  );
};
