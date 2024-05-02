import { cn } from "@/lib/utils";

export const ColumnFlexOne = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex-1", className)}>{children}</div>
  );
};
