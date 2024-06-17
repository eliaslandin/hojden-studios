import { cn } from "@/lib/utils"
import { Link } from "@/navigation";
import { NavigationMenuLink, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";

export const DropDownLink = ({
  className,
  children,
  href
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), className, "text-hojden-green hover:text-hojden-lavender px-0 py-6 bg-transparent w-full justify-start")}>
      <Link href={href} className="block text-lg font-light w-full pl-2">{children}</Link>
    </NavigationMenuLink>
  );
};