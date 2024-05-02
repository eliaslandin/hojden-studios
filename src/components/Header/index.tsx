"use client"

import Image from "next/image";
import { NavItem } from "./NavItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { DropDrownTrigger } from "./DropDownTrigger";
import { DropDrownLink } from "./DropDownLink";

export const Header = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <header>
        <div className="flex flex-col items-center container gap-1 py-3">
          <div>
            <Image
              alt="Höjden studios logga"
              src="/hojden_webblogga.jpg"
              width={800}
              height={119}
              className="w-max-full"
            />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavItem href="/">Aktuellt</NavItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavItem href="/kalender">Kalender</NavItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavItem href="/daglig-traening">höjden sessions</NavItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropDrownTrigger>Medlemskap</DropDrownTrigger>
                <NavigationMenuContent className="text-hojden-green px-4">
                  <ul>
                    <li>
                      <DropDrownLink href="/lokaler-och-bilder">Bilder och specifikationer av lokaler</DropDrownLink>
                    </li>
                    <li>
                      <DropDrownLink href="/hyra-dansstudio">Vår studio</DropDrownLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropDrownTrigger>Om höjden</DropDrownTrigger>
                <NavigationMenuContent className="text-hojden-green px-4">
                  <ul>
                    <DropDrownLink href="/om-hoejden">Verksamhet</DropDrownLink>
                    <DropDrownLink href="/medlemmar">Kontakt och hitta hit</DropDrownLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavItem href="/newsletter">Nyhetsbrev</NavItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavItem href="/supportmedlem" className="border-0">Supportmedlem</NavItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
  );
};