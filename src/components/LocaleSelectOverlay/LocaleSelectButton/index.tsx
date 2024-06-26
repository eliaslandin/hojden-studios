"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { usePathname } from "@/navigation";

export const LocaleSelectButton = ({
  className,
  children,
  localeValue,
}: {
  className?: string;
  children: ReactNode;
  localeValue: string;
}) => {
  const pathname = usePathname();

  const handleClick = () => {
    if (localeValue === "en") {
      window.location.href = `//en.${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || "localhost:3000"}${pathname}`;
    } else {
      window.location.href = `//${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || "localhost:3000"}${pathname}`;
    }
  };

  return (
    <Button variant="ghost" onClick={() => handleClick()}>
      {children}
    </Button>
  );
};
