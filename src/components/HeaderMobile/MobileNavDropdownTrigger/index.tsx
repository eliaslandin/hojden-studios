import { ReactNode } from "react";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const MobileNavDropdownTrigger = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <CollapsibleTrigger className="[&_svg]:data-[state=open]:rotate-180">
      <div className="flex items-center gap-2">
        <ChevronDown className="h-5 w-5 text-hojden-green" />
        <p>{children}</p>
      </div>
    </CollapsibleTrigger>
  )
};