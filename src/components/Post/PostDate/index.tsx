import { cn } from "@/lib/utils";

export const PostDate = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex pb-2", className)}>
      <p className="text-base font-normal text-hojden-orange">{children}</p>
    </div>
  );
};
