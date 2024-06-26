import { cn } from "@/lib/utils"
import { Link } from "@/navigation";
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
    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "w-max hover:bg-transparent hover:text-hojden-lavender border-none", className)}>
      <Link href={href} className="text-lg font-light">{children}</Link>                
    </NavigationMenuLink>
  );
};