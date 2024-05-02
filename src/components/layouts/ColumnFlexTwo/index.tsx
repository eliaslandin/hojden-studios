import { cn } from "@/lib/utils";

export const ColumnFlexTwo = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex-[2]", className)}>{children}</div>
  );
};
