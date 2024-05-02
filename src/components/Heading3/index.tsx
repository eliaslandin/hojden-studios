import { cn } from "@/lib/utils";

export const Heading3 = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("font-normal", className)}>{children}</h3>
  );
};
