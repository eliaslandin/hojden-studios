import { ReactNode } from "react";
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DialogClose } from "@/components/ui/dialog";
import { Link } from "@/navigation";

export const MobileNavLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink>
        <DialogClose asChild>
          <Link href={href} className="block">
            {children}
          </Link>
        </DialogClose>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
};