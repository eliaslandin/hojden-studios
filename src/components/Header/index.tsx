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
import { content } from "@/lib/i18n/dictionary";

const NavigationMenuItemSized = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <NavigationMenuItem className="w-max">{children}</NavigationMenuItem>;
};

export const Header = ({ className }: { className?: string }) => {
  const locale = useLocale();
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
            <NavigationMenuItemSized>
              <NavItem href="/">{t["Aktuellt"]}</NavItem>
            </NavigationMenuItemSized>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItemSized>
              <NavItem href="/kalender">{t["Kalender"]}</NavItem>
            </NavigationMenuItemSized>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItemSized>
              <NavItem href="/hojden-sessions">höjden sessions</NavItem>
            </NavigationMenuItemSized>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItemSized>
              <NavItem href="/drift">drift</NavItem>
            </NavigationMenuItemSized>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItemSized>
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
            </NavigationMenuItemSized>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItemSized>
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
            </NavigationMenuItemSized>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItemSized>
              <NavItem href="/newsletter">{t["Nyhetsbrev"]}</NavItem>
            </NavigationMenuItemSized>
            <Separator
              className="h-10 bg-hojden-green"
              orientation="vertical"
            />
            <NavigationMenuItemSized>
              <NavItem href="/supportmedlem" className="border-0">
                {t["Supportmedlem"]}
              </NavItem>
            </NavigationMenuItemSized>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
