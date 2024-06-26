import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavDropdownLink } from "../NavDropdownLink";
import { NavDropdownItem } from "../NavDropdownItem";
import { NavItem } from "../NavItem";

export const NavMenuItem = ({
  children,
  href,
  withSeperator,
  dropdownChildren
}: {
  children: ReactNode;
  href: string;
  withSeperator?: boolean;
  dropdownChildren?: Array<Record<string, any>>;
}) => {
  if (!dropdownChildren) {
    return (
      <>
        { withSeperator && <Separator className="h-10 bg-hojden-green" orientation="vertical" /> }

        <NavItem href={href}>{children}</NavItem>
      </>
    )
  } else {
    return (
      <>
        { withSeperator && <Separator className="h-10 bg-hojden-green" orientation="vertical" /> }

        <DropdownMenu modal={false}>
          <NavDropdownItem>{children}</NavDropdownItem>
          <DropdownMenuContent>
            {
              dropdownChildren.map((childPage: Record<string, any>) => {
                return (
                  <NavDropdownLink key={childPage.id} href={childPage.slug}>{childPage.content.title}</NavDropdownLink>
                )
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  }
};