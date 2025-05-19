interface AdvocateFilterProps {
  value: string;
  onRemove: () => void;
}

export function AdvocateFilter({ value, onRemove }: AdvocateFilterProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">
      <span>
        Filtering by: <span className="font-medium text-blue-800">{value}</span>
      </span>
      <button
        onClick={onRemove}
        className="text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Remove filter"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
} 