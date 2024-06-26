import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const NavDropdownItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DropdownMenuTrigger className="w-max hover:text-hojden-lavender duration-200 [&_svg]:data-[state=open]:rotate-180">
      <div className="flex items-center gap-1">
        <ChevronDown className="h-4 w-4 text-hojden-green" />
        <p>{children}</p>
      </div>
    </DropdownMenuTrigger>
  );
};