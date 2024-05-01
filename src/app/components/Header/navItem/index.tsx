import Image from "next/image";
import { cn } from "@/lib/utils"
import Link from "next/link";

export const NavItem = ({
  className,
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className={cn("border-r border-hojden-green", className)}>
      <Link href={href} className="block px-7 py-3 text-lg">{children}</Link>
    </li>
  );
};
