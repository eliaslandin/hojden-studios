import { cn } from "@/lib/utils";

export const PostDate = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex justify-end", className)}>
      <p className="text-xl font-bold text-hojden-orange">{children}</p>
    </div>
  );
};
