import { ChangeEvent, useCallback } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  onReset: () => void;
  searchTerm: string;
}

function AdvocateSearch({ onSearch, onReset, searchTerm }: SearchProps) {
  // TODO: debounce the search call when search is added on the backend
  // for this assignment due to a low number of advocates, it is not necessary
  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }, [onSearch]);

  return (
    <div className="flex gap-4">
      <div className="relative">
        <input 
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleSearch}
          value={searchTerm}
          placeholder="Search advocates..."
        />
        <svg 
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
      <button 
        onClick={onReset}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        Reset
      </button>
    </div>
  );
} 

export default AdvocateSearch;