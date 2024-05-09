"use client";

import Image from "next/image";
import { NavItem } from "./NavItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import { useLocale } from "next-intl";

const content = {
  en: {
    Aktuellt: "Current",
    Kalender: "Calendar",
    Medlemskap: "Membership",
    Bli_medlem: "Become a member",
    Vara_lokaler: "Photos and specifications of our spaces",
    Var_studio: "The shared studio",
    Om_hojden: "About höjden",
    Verksamhet: "Our work",
    Styrelsen: "The board",
    Kontakt_och_hitta_hit: "Contact us",
    Nyhetsbrev: "Newsletter",
    Supportmedlem: "Support Members",
  },
  sv: {
    Aktuellt: "Aktuellt",
    Kalender: "Kalender",
    Medlemskap: "Medlemskap",
    Bli_medlem: "Bli_medlem",
    Vara_lokaler: "Bilder och specifikationer av lokaler",
    Var_studio: "Vår_studio",
    Om_hojden: "Om höjden",
    Verksamhet: "Verksamhet",
    Styrelsen: "Styrelsen",
    Kontakt_och_hitta_hit: "Kontakt och hitta hit",
    Nyhetsbrev: "Nyhetsbrev",
    Supportmedlem: "Supportmedlem",
  },
};

export const Header = ({ className }: { className?: string }) => {
  const locale = useLocale();

  const t = content[locale as "sv" | "en"];

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
            <NavigationMenuItem>
              <NavItem href="/">{t["Aktuellt"]}</NavItem>
            </NavigationMenuItem>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItem>
              <NavItem href="/kalender">{t["Kalender"]}</NavItem>
            </NavigationMenuItem>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItem>
              <NavItem href="/hojden-sessions">höjden sessions</NavItem>
            </NavigationMenuItem>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItem>
              <NavItem href="/drift">drift</NavItem>
            </NavigationMenuItem>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-hojden-lavender duration-200 [&_svg]:data-[state=open]:rotate-180">
                  <div className="flex items-center gap-1">
                    <ChevronDown className="h-4 w-4 text-hojden-green" />
                    <p>{t["Medlemskap"]}</p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="w-full">
                    <DropDownLink href="/bli-medlem">
                      {t["Bli_medlem"]}
                    </DropDownLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <DropDownLink href="/lokaler">
                      {t["Vara_lokaler"]}{" "}
                    </DropDownLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <DropDownLink href="/studio">
                      {t["Var_studio"]}
                    </DropDownLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-hojden-lavender duration-200 [&_svg]:data-[state=open]:rotate-180">
                  <div className="flex items-center gap-1">
                    <ChevronDown className="h-4 w-4 text-hojden-green" />
                    <p>{t["Om_hojden"]} </p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <DropDownLink href="/om-hoejden">
                      {t["Verksamhet"]}
                    </DropDownLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <DropDownLink href="/styrelsen">
                      {t["Styrelsen"]}
                    </DropDownLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <DropDownLink href="/medlemmar">
                      {t["Kontakt_och_hitta_hit"]}
                    </DropDownLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItem>
              <NavItem href="/newsletter">{t["Nyhetsbrev"]}</NavItem>
            </NavigationMenuItem>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItem>
              <NavItem href="/supportmedlem" className="border-0">
                {t["Supportmedlem"]}
              </NavItem>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
