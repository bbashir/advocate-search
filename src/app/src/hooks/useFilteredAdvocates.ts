import { useState, useEffect } from "react";
import { Advocate } from "../types/Advocate";

export function useFilteredAdvocates(searchTerm?: string) {
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        setLoading(true);
        const url = new URL("/api/advocates", window.location.origin);
        if (searchTerm) {
          url.searchParams.set("search", searchTerm);
        }

        await fetch(url)
          .then((response) => response.json())
          .then((jsonResponse) => {
            setFilteredAdvocates(jsonResponse);
          });        

        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAdvocates();
  }, [searchTerm]);

  return { filteredAdvocates, loading, error };
} 