"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { 
  NavigationMenuLink,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

export const NavItem = ({
  className,
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-transparent hover:text-hojden-lavender border-r py-6 border-hojden-green rounded-none", className)}>
      <Link href={href} className="block px-3 text-lg font-light">{children}</Link>                
    </NavigationMenuLink>
  );
};