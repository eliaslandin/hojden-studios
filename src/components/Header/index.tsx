"use client"

import Image from "next/image";
import { NavItem } from "./NavItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { DropDownLink } from "./DropDownLink";

export const Header = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <header className="hidden sm:block">
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
            <NavigationMenuList className="text-lg gap-4">
              <NavigationMenuItem>
                <NavItem href="/">Aktuellt</NavItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavItem href="/kalender">Kalender</NavItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavItem href="/hojden-sessions">höjden sessions</NavItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger>Medlemskap</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="w-full">
                      <DropDownLink href="/bli-medlem">Bli medlem</DropDownLink>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <DropDownLink href="/lokaler">Våra lokaler</DropDownLink>                      
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <DropDownLink href="/studio">Vår studio</DropDownLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger>Om höjden</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                    <DropDownLink href="/om-hoejden">Verksamhet</DropDownLink>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <DropDownLink href="/styrelsen">Styrelsen</DropDownLink>                    
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <DropDownLink href="/medlemmar">Kontakt och hitta hit</DropDownLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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