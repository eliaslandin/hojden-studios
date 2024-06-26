"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import { Menu } from "lucide-react";
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
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LocaleSelectOverlay } from "../LocaleSelectOverlay";
import { content } from "@/lib/i18n/dictionary";
import { SupportedLocale } from "@/types";
import { MobileNavLink } from "./MobileNavLink";
import { MobileNavMenuItem } from "./MobileNavMenuItem";
import { useEffect } from "react";

export const HeaderMobile = ({ 
  locale,
  pages
}: {
  locale: SupportedLocale,
  pages: Record<string, any>
}) => {
  const t = content[(locale as "sv" | "en") || "en"].header;

  const noBodyScroll = (open) => {
    if (open) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }

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
      <Dialog onOpenChange={(open) => noBodyScroll(open)}>
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
              <MobileNavLink href="/">{t["Aktuellt"]}</MobileNavLink>
              {
                pages.map((page: Record<string, any>) => {
                  return (
                    <MobileNavMenuItem key={page.id} href={page.slug} dropdownChildren={page.children}>{page.content.title}</MobileNavMenuItem>
                  )
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
