import { cn } from "@/lib/utils"
import { Link } from "@/navigation";
import { 
  NavigationMenuLink,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const NavDropdownLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <DropdownMenuItem className="w-full">
      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-hojden-green hover:text-hojden-lavender px-0 py-6 bg-transparent w-full justify-start")}>
        <Link href={href} className="block text-lg font-light w-full pl-2">{children}</Link>
      </NavigationMenuLink>
    </DropdownMenuItem>
  );
};