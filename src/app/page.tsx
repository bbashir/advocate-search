"use client";

import { useCallback, useState } from "react";
import { AdvocatesTable } from "./src/components/AdvocatesTable";
import AdvocateSearch from "./src/components/AdvocateSearch";
import { AdvocateFilter } from "./src/components/AdvocateFilter";
import { useFilteredAdvocates } from "./src/hooks/useFilteredAdvocates";

export default function Home() {
  const [activeSpecialty, setActiveSpecialty] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { filteredAdvocates, loading, error } = useFilteredAdvocates(searchTerm);
  
  const handleSearch = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);  
  }, []);

  const handleSpecialtyClick = useCallback((specialty: string) => {
    setActiveSpecialty(activeSpecialty === specialty ? null : specialty);
    setSearchTerm(specialty);
  }, [activeSpecialty]);

  const handleReset = useCallback(() => {
    setActiveSpecialty(null);
    setSearchTerm("");      
  }, []);

  return (
    <main className="m-8">
      <h1 className="text-2xl font-bold">Solace Advocates</h1>
      <div className="flex flex-row gap-4 mb-4 justify-end items-center">
        {activeSpecialty && ( 
          <AdvocateFilter
            value={activeSpecialty}
            onRemove={handleReset}
          />
        )}
        <AdvocateSearch onSearch={handleSearch} onReset={handleReset} searchTerm={searchTerm} />
      </div>
      <AdvocatesTable
        advocates={filteredAdvocates}
        onSpecialtyClick={handleSpecialtyClick}
      />
    </main>
  );
}
