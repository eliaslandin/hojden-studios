"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LocaleSelectOverlay } from "../LocaleSelectOverlay";
import { content } from "@/lib/i18n/dictionary";
import { useLocale } from "next-intl";

export const HeaderMobile = ({ className }: { className?: string }) => {
  const locale = useLocale();
  const t = content[(locale as "sv" | "en") || "en"].header;

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
        <DialogContent className="w-full max-w-none h-full overflow-scroll justify-center items-start bg-hojden-beige text-2xl font-normal border-0 text-center">
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="flex-col gap-6 pt-10">
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/" className="block">
                      {t["Aktuellt"]}
                    </Link>
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/kalender" className="block">
                      {t["Kalender"]}
                    </Link>
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/hojden-sessions" className="block">
                      höjden sessions
                    </Link>
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Collapsible className="flex flex-col items-center">
                  <CollapsibleTrigger className="[&_svg]:data-[state=open]:rotate-180">
                    <div className="flex items-center gap-2">
                      <ChevronDown className="h-5 w-5 text-hojden-green" />
                      <p>{t["Medlemskap"]}</p>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-center">
                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/bli-medlem" className="block pt-4">
                          {t["Bli_medlem"]}
                        </Link>
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/lokaler" className="block pt-4">
                          {t["Vara_lokaler"]}
                        </Link>
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/studio" className="block pt-4">
                          {t["Var_studio"]}
                        </Link>
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
                      <p>{t["Om_hojden"]}</p>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col items-center">
                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/om-hojden" className="block pt-4">
                          {t["Verksamhet"]}
                        </Link>
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/styrelsen" className="block pt-4">
                          {t["Styrelsen"]}
                        </Link>
                      </DialogClose>
                    </NavigationMenuLink>

                    <NavigationMenuLink>
                      <DialogClose asChild>
                        <Link href="/kontakt" className="block pt-4">
                          {t["Kontakt_och_hitta_hit"]}
                        </Link>
                      </DialogClose>
                    </NavigationMenuLink>
                  </CollapsibleContent>
                </Collapsible>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/newsletter" className="block">
                      {t["Nyhetsbrev"]}
                    </Link>
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <DialogClose asChild>
                    <Link href="/supportmedlem" className="block">
                      {t["Supportmedlem"]}
                    </Link>
                  </DialogClose>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <DialogFooter className="self-end relative pb-20">
            <DialogClose asChild>
              <LocaleSelectOverlay className="right-1/2 translate-x-1/2" />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};
