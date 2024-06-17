import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import Image from "next/image";

export const HojdenImage = ({
  className,
  href,
  alt,
  src
}: {
  className?: string;
  href?: string;
  alt: string;
  src: string;
}) => {
  return href ?
    (
      <Link href={href} className={cn("flex relative justify-center pb-4 max-w-full", className)}>
        <Image
          src={src}
          width={1200}
          height={0}
          alt={alt}
          className="object-contain"
        />
      </Link>
    )
  : (
    <div className={cn("flex relative justify-center pb-4 max-w-full", className)}>
        <Image
          src={src}
          width={1200}
          height={0}
          alt={alt}
          className="object-contain"
        />
      </div>
    )
};
