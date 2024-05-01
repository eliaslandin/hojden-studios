import Image from "next/image";
import { cn } from "@/lib/utils"
import Link from "next/link";
import { NavigationMenuLink, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";

export const DropDrownLink = ({
  className,
  children,
  href
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), className, "hover:bg-transparent hover:text-hojden-lavender px-0 py-6 border-b border-hojden-green rounded-none")}>
      <Link href={href} className="block text-lg">{children}</Link>
    </NavigationMenuLink>
  );
};