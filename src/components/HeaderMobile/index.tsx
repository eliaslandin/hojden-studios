"use client"

import Image from "next/image";
import { Link } from "@/navigation";
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
import { LocaleSelectOverlay } from "../LocaleSelectOverlay";

export const HeaderMobile = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <header className="flex flex-col top-0 w-full md:hidden container">
      <Link href="/" className="self-center">
        <Image
          alt="Höjden studios logga"
          src="/hojden_webblogga.jpg"
          width={800}
          height={0}
          className="w-max-full py-4"
        />
      </Link>
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
        <DialogContent className="w-full max-w-none h-full overflow-scroll justify-center items-start bg-hojden-beige text-2xl font-normal border-0">
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="flex-col gap-4 pt-10">
              
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/" className="block">Aktuellt</Link>
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/kalender" className="block">Kalender</Link>                
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/hojden-sessions" className="block">höjden sessions</Link>                
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Collapsible className="flex flex-col items-center">
                    <CollapsibleTrigger className="[&_svg]:data-[state=open]:rotate-180">
                      <div className="flex items-center gap-2">
                        <ChevronDown className="h-5 w-5 text-hojden-green" />
                        <p>Medlemmar</p>
                      </div>
                    </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-center">

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/bli-medlem" className="block pt-4">Bli medlem</Link>                
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/lokaler" className="block pt-4">Våra lokaler</Link>                
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/studio" className="block pt-4">Vår studio</Link>                
                      </DialogClose>
                    </NavigationMenuLink>

                  </CollapsibleContent>
                </Collapsible>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Collapsible className="flex flex-col items-center">
                    <CollapsibleTrigger className="[&_svg]:data-[state=open]:rotate-180">
                      <div className="flex items-center gap-2">
                        <ChevronDown className="h-5 w-5 text-hojden-green" />
                        <p>Om höjden</p>
                      </div>
                    </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-center">

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/om-hojden" className="block pt-4">Verksamhet</Link>                
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/styrelsen" className="block pt-4">Styrelsen</Link>                
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/kontakt" className="block pt-4">Kontakt och hitta hit</Link>                
                      </DialogClose>
                    </NavigationMenuLink>

                  </CollapsibleContent>
                </Collapsible>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/newsletter" className="block">Nyhetsbrev</Link>                
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/supportmedlem" className="block">Supportmedlem</Link>                
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
          <DialogFooter className="self-end relative pb-20">
            <DialogClose asChild>
            <LocaleSelectOverlay />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};