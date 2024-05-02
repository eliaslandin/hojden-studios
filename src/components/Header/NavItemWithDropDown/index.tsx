import Image from "next/image";
import { cn } from "@/lib/utils"
import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink,
  navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

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
    <NavigationMenuItem>
      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), className, "hover:bg-transparent hover:text-hojden-lavender border-r border-hojden-green rounded-none")}>
        <Link href={href} className="block px-7 py-3 text-lg">{children}</Link>                
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};