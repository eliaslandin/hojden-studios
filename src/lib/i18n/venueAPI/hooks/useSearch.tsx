"use client";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import useVenueAPI from "./useVenueAPI";
import StateContext, {
  emptyContext,
  useDispatch,
} from "@/lib/providers/Search";

export default function useSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce<string>(query, 500);
  const { setResults } = useDispatch();

  const { data: results, isLoading } = useVenueAPI<StateContext>({
    path: "search",
    search: {
      query: debouncedQuery,
    },
  });

  const resultsToSet =
    // @ts-ignore
    !results || results.issues || results.length === 0
      ? emptyContext
      : (results as StateContext);

  resultsToSet.isActive = query?.length >= 2;

  setResults(resultsToSet);

  return { setQuery, query, results: resultsToSet, isLoading };
}
