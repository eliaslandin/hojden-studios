"use client";
import { Pagination } from "@/components/Pagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useVenueAPI<T>({
  path,
  defaultValue,
  limit = 20,
  admin = false,
  orderBy = "updatedAt",
  direction = "asc",
  search,
}: {
  path: string;
  defaultValue?: any;
  limit?: number;
  admin?: boolean;
  orderBy?: string;
  direction?: "asc" | "desc";
  search?: Record<string, string>;
}) {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;

  const endpoint = admin
    ? `/api/v1/${SITE_KEY}/backend/${path}`
    : `/api/v1/${SITE_KEY}/public/${path}`;

  const searchParams = search ? new URLSearchParams(search).toString() : "";
  // @ts-ignore
  const { data, isLoading }: { data: T; isLoading: boolean } = useQuery({
    queryKey: [endpoint, page, limit, orderBy, searchParams],
    queryFn: async ({ queryKey }) => {
      // TODO: hack for search atm
      if (
        path === "search" &&
        search?.query?.length &&
        search.query.length < 3
      ) {
        return [];
      }

      const response = await fetch(
        `${queryKey[0]}?page=${page}&limit=${limit}&orderBy=${orderBy}&dir=${direction}&${searchParams}`,
      );

      const data = await response.json();

      setCount(data.count ?? 0);

      return data.records;
    },
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (page >= Math.floor(count / limit)) {
      setHasMore(false);
      return;
    }

    setHasMore(true);
  }, [count, page, limit]);

  const goToPage = (page: number) => {
    setPage(page);
  };

  const next = () => setPage(Math.min(page + 1, Math.floor(count / limit)));
  const previous = () => setPage(Math.max(0, page - 1));
  const goToLastPage = () => setPage(Math.floor(count / limit));

  return {
    data,
    page,
    isLoading,
    hasMore,
    goToPage,
    goToLastPage,
    next,
    previous,
    Pagination: (props) =>
      Pagination({
        goToPage,
        previous,
        next,
        goToLastPage,
        hasMore,
        page,
        ...props,
      }),
  };
}
