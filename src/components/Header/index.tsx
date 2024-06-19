"use client"

import Image from "next/image";
import { NavItem } from "./NavItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DropDownLink } from "./DropDownLink";
import { ChevronDown } from "lucide-react";
import { Separator } from "../ui/separator";
import { Link } from "@/navigation";
import { content } from "@/lib/i18n/dictionary";
import { SupportedLocale } from "@/types";

const NavigationMenuItemSized = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <NavigationMenuItem className="w-max">{children}</NavigationMenuItem>;
};

export const Header = ({ 
  className, 
  locale,
  pages
} : 
{ 
  className?: string,
  locale: SupportedLocale,
  pages: Record<string, any>
}) => {
  const t = content[(locale as "sv" | "en") || "en"].header;
  
  return (
    <header className="hidden md:block">
      <div className="flex flex-col items-center container gap-1 py-3">
        <div>
          <Link href="/">
            <Image
              alt="Höjden studios logga"
              src="/hojden_webblogga.jpg"
              width={800}
              height={119}
              className="w-max-full"
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="text-lg gap-4">
            <NavigationMenuItemSized>
              <NavItem href="/">{t["Aktuellt"]}</NavItem>
            </NavigationMenuItemSized>
            {
              pages.map((page: Record<string, any> ) => {
                if (page.children) {
                  return (
                    <>
                      <Separator
                        className="h-10 bg-hojden-green"
                        orientation="vertical"
                      />
                      <NavigationMenuItemSized>
                        <DropdownMenu modal={false}>
                          <DropdownMenuTrigger className="hover:text-hojden-lavender duration-200 [&_svg]:data-[state=open]:rotate-180">
                            <div className="flex items-center gap-1">
                              <ChevronDown className="h-4 w-4 text-hojden-green" />
                              <p>{page.content.title}</p>
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {
                              page.children?.map((childPage: Record<string, any>) => {
                                return (
                                  <DropdownMenuItem className="w-full">
                                    <DropDownLink href={childPage.slug}>
                                      {childPage.content.title}
                                    </DropDownLink>
                                  </DropdownMenuItem>
                                )
                              })
                            }
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </NavigationMenuItemSized>
                    </>
                  ) 
                } else {
                  return (
                    <>
                      <Separator
                        className="h-10 bg-hojden-green"
                        orientation="vertical"
                      />
                      <NavigationMenuItemSized>
                        <NavItem href={page.slug}>{page.content.title}</NavItem>
                      </NavigationMenuItemSized>
                    </>
                  )
                }
              })
            }
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
