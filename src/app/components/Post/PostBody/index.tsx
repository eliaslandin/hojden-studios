import { cn } from "@/lib/utils";

export const PostBody = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("pb-4 text-base sm:text-lg", className)}>
      {children}
    </p>
  );
};
