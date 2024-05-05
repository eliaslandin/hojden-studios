"use client"

import { cn } from "@/lib/utils";
import { LocaleSelectButton } from "./LocaleSeletButton";

export const LocaleSelectOverlay = ({
  className
}: {
  className?: string;
}) => {

  return (
    <div className={cn("flex gap-2 absolute top-4 right-10 bg-hojden-beige border rounded-md border-hojden-green", className)}>
      <LocaleSelectButton localeValue="sv">SV</LocaleSelectButton>
      <LocaleSelectButton localeValue="en">ENG</LocaleSelectButton>
    </div>
  );
};
