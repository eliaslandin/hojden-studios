import { cn } from "@/lib/utils";

export const Heading1 = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1 className={cn("font-bold text-3xl pb-4", className)}>{children}</h1>
  );
};
