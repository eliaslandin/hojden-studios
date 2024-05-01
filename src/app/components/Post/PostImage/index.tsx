import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const PostImage = ({
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
      <Link href={href} className={cn("flex relative justify-center py-4 max-w-full max-h-[40rem]", className)}>
        <Image
          src={src}
          width={672}
          height={0}
          alt={alt}
          className="object-contain"
        />
      </Link>
    )
  : (
    <div className={cn("flex relative justify-center py-4 max-w-full max-h-[40rem]", className)}>
        <Image
          src={src}
          width={672}
          height={0}
          alt={alt}
          className="object-contain"
        />
      </div>
    )
};
