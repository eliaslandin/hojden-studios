"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export const HeaderMobile = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <header className="sticky top-0 w-full sm:hidden container">
      <Image
        alt="Höjden studios logga"
        src="/hojden_webblogga.jpg"
        width={800}
        height={0}
        className="w-max-full py-4"
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="bg-hojden-beige rounded-full p-2 h-12 w-12 border-hojden-green"
          >
            <Menu className="h-8 w-8 text-hojden-green" />
            <span className="sr-only">Öppna navigationsmeny</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full h-full justify-center items-start bg-hojden-beige text-xl">
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="flex-col gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link href="/" className="block font-light">Aktuellt</Link>                
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link href="/kalender" className="block font-light">Kalender</Link>                
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link href="/daglig-traening" className="block font-light">höjden sessions</Link>                
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <Collapsible className="flex flex-col items-center gap-4">
                    <CollapsibleTrigger className="[&_svg]:data-[state=open]:rotate-180">
                      <div className="flex items-center gap-2">
                        <ChevronDown className="h-4 w-4 text-hojden-green" />
                        <p>Medlemmar</p>
                      </div>
                    </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-center gap-4">
                    <NavigationMenuLink>
                      <Link href="/bli-medlem" className="block font-light">Bli medlem</Link>                
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <Link href="/lokaler-och-bilder" className="block font-light">Våra lokaler</Link>                
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <Link href="/hyra-dansstudio" className="block font-light">Vår studio</Link>                
                    </NavigationMenuLink>
                  </CollapsibleContent>
                </Collapsible>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <DialogFooter className="self-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};