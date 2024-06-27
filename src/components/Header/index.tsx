"use client"

import Image from "next/image";
import { NavItem } from "./NavItem";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@/navigation";
import { content } from "@/lib/i18n/dictionary";
import { SupportedLocale } from "@/types";
import { NavMenuItem } from "./NavMenuItem";

export const Header = ({
  locale,
  pages
} : 
{
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
              <NavItem href="/">{t["Aktuellt"]}</NavItem>
              {
                pages.map((page: Record<string, any> ) => {
                  return (
                    <NavMenuItem key={page.id} href={page.slug} withSeperator={true} dropdownChildren={page.children}>
                      {page.content.title}
                    </NavMenuItem>
                  )
                })
              }
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
