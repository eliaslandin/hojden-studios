import { cn } from "@/lib/utils";

export const TwoColumnLayout = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:justify-center gap-2", className)}>{children}</div>
  );
};
