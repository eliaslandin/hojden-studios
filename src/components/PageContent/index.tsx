import { cn } from "@/lib/utils";

export const PageContent = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <main className={cn("flex container flex-col pt-4 pb-16", className)}>{children}</main>
  );
};
