import { cn } from "@/lib/utils";
import Image from "next/image";

export const HeaderImage = ({
  className,
  alt,
  src
}: {
  className?: string;
  alt: string;
  src: string;
}) => {

  return (
    <div className={cn("flex relative justify-center pb-6 max-w-full", className)}>
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
