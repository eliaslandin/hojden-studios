import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

export const ParagraphLink = ({
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
  <Link className={cn("underline", className)} href={href} target={target}>{children}</Link>
  );
};
