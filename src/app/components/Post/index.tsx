import { cn } from "@/lib/utils";

export const Post = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={cn("w-full max-w-2xl", className)}>{children}</h2>
  );
};
