import { ReactNode } from "react";
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MobileNavLink } from "../MobileNavLink";
import { MobileNavDropdownTrigger } from "../MobileNavDropdownTrigger";

export const MobileNavMenuItem = ({
  children,
  href,
  dropdownChildren
}: {
  children: ReactNode;
  href: string;
  dropdownChildren?: Array<Record<string, any>>;
}) => {
  if (!dropdownChildren) {
    return (
      <MobileNavLink href={href}>{children}</MobileNavLink>
    )
  } else {
    return (
      <NavigationMenuItem>
        <Collapsible className="flex flex-col items-center data-[state=open]:gap-4">
          <MobileNavDropdownTrigger>{children}</MobileNavDropdownTrigger>
          <CollapsibleContent className="flex flex-col items-center gap-6 data-[state=open]:py-6 data-[state=open]:px-8 rounded-md bg-hojden-beige-light">
            {
              dropdownChildren.map((childPage: Record<string, any>) => {
                return (
                  <MobileNavLink key={childPage.id} href={childPage.slug}>{childPage.content.title}</MobileNavLink>
                )
              })
            }
          </CollapsibleContent>
        </Collapsible>
      </NavigationMenuItem>
    )
  }
};