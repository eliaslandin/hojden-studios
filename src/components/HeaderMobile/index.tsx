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
import { SupportedLocale } from "@/types";

export const HeaderMobile = ({ 
  className,
  locale,
  pages
}: { 
  className?: string,
  locale: SupportedLocale,
  pages: Record<string, any>
}) => {
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

              {
                pages.map((page: Record<string, any>) => {
                  if (page.children) {
                    return (
                      <NavigationMenuItem>
                        <Collapsible className="flex flex-col items-center data-[state=open]:gap-4">
                          <CollapsibleTrigger className="[&_svg]:data-[state=open]:rotate-180">
                            <div className="flex items-center gap-2">
                              <ChevronDown className="h-5 w-5 text-hojden-green" />
                              <p>{page.content.title}</p>
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="flex flex-col items-center gap-6 data-[state=open]:py-6 data-[state=open]:px-8 rounded-md bg-hojden-beige-light">
                            {
                              page.children.map((childPage: Record<string, any>) => {
                                return (
                                  <NavigationMenuLink>
                                    <DialogClose asChild>
                                      <Link href={childPage.slug}>
                                        {childPage.content.title}
                                      </Link>
                                    </DialogClose>
                                  </NavigationMenuLink>
                                )
                              })
                            }

                          </CollapsibleContent>
                        </Collapsible>
                      </NavigationMenuItem>
                    )
                  } else {
                    return (
                      <NavigationMenuItem>
                        <NavigationMenuLink>
                          <DialogClose asChild>
                            <Link href={page.slug} className="block">
                              {page.content.title}
                            </Link>
                          </DialogClose>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  }
                })
              }

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
