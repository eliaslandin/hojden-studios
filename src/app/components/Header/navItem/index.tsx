import Image from "next/image";

export const Header = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <header>
        <div className="flex flex-col items-center column gap-6">
          <div>
            <Image
              alt="Höjden studios logga"
              src="/hojden_webblogga.webp"
              height={200}
              width={700}
            />
          </div>
          <div>
            <nav>
              <ul className="flex flex-row">
                <li>
                  <a href="/" className="border-r border-hojden-green px-8 py-4">Aktuellt</a>
                </li>
                <li>
                  <a href="/" className="">Kalender</a>
                </li>
                <li>
                  <a href="/" className="">Höjden sessions</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
};
