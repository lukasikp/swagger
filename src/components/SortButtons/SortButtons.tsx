import { useEffect, useState } from "react";

type sortTypes = "ascending" | "descending";

const ACTIVE_COLOR = "rgb(59 130 246 / 0.5)";

interface SortButtonInterface {
  ascCallback: () => void;
  descCallback: () => void;
}

export const SortButtons = ({
  ascCallback,
  descCallback,
}: SortButtonInterface) => {
  const [sortState, setSortState] = useState<sortTypes>("ascending");
  return (
    <div className="flex justify-end">
      <p className="px-2">Sort</p>

      <svg
        data-testid="sort-ascending"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-2 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke={sortState === "ascending" ? ACTIVE_COLOR : "currentColor"}
        strokeWidth={2}
        onClick={() => {
          setSortState("ascending");
          ascCallback();
        }}
      >
        <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
      <svg
        data-testid="sort-des"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-2 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke={sortState === "descending" ? ACTIVE_COLOR : "currentColor"}
        strokeWidth={2}
        onClick={() => {
          setSortState("descending");
          descCallback();
        }}
      >
        <path d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
      </svg>
    </div>
  );
};
