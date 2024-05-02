import { cn } from "@/lib/utils"
import { NavigationMenuTrigger, } from "@/components/ui/navigation-menu";

export const DropDrownTrigger = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <NavigationMenuTrigger className={cn("hover:bg-transparent hover:text-hojden-lavender border-r border-hojden-green rounded-none px-6 py-6 text-lg font-light", className)}>{children}</NavigationMenuTrigger>
  );
};