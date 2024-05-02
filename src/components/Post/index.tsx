import { cn } from "@/lib/utils";

export const Post = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("w-full pb-8", className)}>{children}</div>
  );
};
