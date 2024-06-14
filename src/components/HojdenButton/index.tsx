import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export const HojdenButton = ({
  className,
  children,
  href,
  target
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
  target?: string;
}) => {
  return (
    <Button className={cn("font-bold flex justify-center items-center max-w-fit text-hojden-peach text-base bg-hojden-navy rounded-full py-1 px-7 hover:bg-hojden-peach hover:text-hojden-navy duration-200 ease-out", className)} asChild>
      <Link href={href} target={target}>{children}</Link>
    </Button>
  );
};
