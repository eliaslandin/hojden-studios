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
import { ChevronDown } from "lucide-react";
import { Separator } from "../ui/separator";

export const Header = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <header className="hidden md:block">
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
              <Separator className="h-10 bg-hojden-green" orientation="vertical"/>
              <NavigationMenuItem>
                <NavItem href="/kalender">Kalender</NavItem>
              </NavigationMenuItem>
              <Separator className="h-10 bg-hojden-green" orientation="vertical"/>
              <NavigationMenuItem>
                <NavItem href="/hojden-sessions">höjden sessions</NavItem>
              </NavigationMenuItem>
              <Separator className="h-10 bg-hojden-green" orientation="vertical"/>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-hojden-lavender duration-200 [&_svg]:data-[state=open]:rotate-180">
                    <div className="flex items-center gap-1">
                      <ChevronDown className="h-4 w-4 text-hojden-green" />
                      <p>Medlemskap</p>
                    </div>
                  </DropdownMenuTrigger>
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
              <Separator className="h-10 bg-hojden-green" orientation="vertical"/>
              <NavigationMenuItem>
                <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-hojden-lavender duration-200 [&_svg]:data-[state=open]:rotate-180">
                    <div className="flex items-center gap-1">
                      <ChevronDown className="h-4 w-4 text-hojden-green" />
                      <p>Om höjden</p>
                    </div>
                  </DropdownMenuTrigger>
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
              <Separator className="h-10 bg-hojden-green" orientation="vertical"/>
              <NavigationMenuItem>
                <NavItem href="/newsletter">Nyhetsbrev</NavItem>
              </NavigationMenuItem>
              <Separator className="h-10 bg-hojden-green" orientation="vertical"/>
              <NavigationMenuItem>
                <NavItem href="/supportmedlem" className="border-0">Supportmedlem</NavItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
  );
};