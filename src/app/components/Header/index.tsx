import Image from "next/image";
import { NavItem } from "./NavItem";

export const Header = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <header>
        <div className="flex flex-col items-center column gap-4 py-4">
          <div>
            <Image
              alt="Höjden studios logga"
              src="/hojden_webblogga.webp"
              width={800}
              height={119}
              className="w-max-full"
            />
          </div>
          <div>
            <nav>
              <ul className="flex flex-row flex-wrap">
                <NavItem href="/">Aktuellt</NavItem>
                <NavItem href="/">Kalender</NavItem>
                <NavItem href="/">höjden sessions</NavItem>
                <NavItem href="/">Medlemskap</NavItem>
                <NavItem href="/">Om höjden</NavItem>
                <NavItem href="/">Nyhetsbrev</NavItem>
                <NavItem href="/" className="border-r-0">Supportmedlem</NavItem>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
};
