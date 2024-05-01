
export const Heading2 = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={cn("text-xl text-hojden-orange pt-4", className)}>{children}</h2>
  );
};
