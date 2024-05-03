import { cn } from "@/lib/utils";

export const PageContent = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <main className={cn("flex container min-h-screen flex-col pt-8", className)}>{children}</main>
  );
};
