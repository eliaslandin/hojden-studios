import { cn } from "@/lib/utils";

export const Heading2 = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={cn("text-xl font-normal pb-2 text-hojden-orange", className)}>{children}</h2>
  );
};