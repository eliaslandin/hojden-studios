import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export const Pagination = ({
  goToPage,
  previous,
  next,
  goToLastPage,
  hasMore,
  page,
  className,
}) => {
  return (
    <div className={cn("flex h-4 justify-between", className)}>
      <ChevronsLeft
        className={cn("w-4 cursor-pointer", page === 0 && "opacity-20")}
        onClick={() => goToPage(0)}
      />
      <ChevronLeft
        className={cn("w-4 cursor-pointer", page === 0 && "opacity-20")}
        onClick={previous}
      />
      <ChevronRight
        className={cn("w-4 cursor-pointer", !hasMore && "opacity-20")}
        onClick={next}
      />
      <ChevronsRight
        className={cn("w-4 cursor-pointer", !hasMore && "opacity-20")}
        onClick={() => goToLastPage()}
      />
    </div>
  );
};
