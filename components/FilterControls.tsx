import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, SortAsc } from "lucide-react";
import React from "react";

interface FilterControlsProps {
  filterCategory: string;
  setFilterCategory: (value: string) => void;
  currentSort: string;
  setCurrentSort: (value: string) => void;
  categories: string[];
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  filterCategory,
  setFilterCategory,
  currentSort,
  setCurrentSort,
  categories,
}) => (
  <div className="flex gap-2 sm:ml-2">
    <Select value={filterCategory} onValueChange={setFilterCategory}>
      <SelectTrigger className="w-[140px] min-w-[120px]">
        <Filter className="h-4 w-4 mr-2" />
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category === "all" ? "All Categories" : category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select value={currentSort} onValueChange={setCurrentSort}>
      <SelectTrigger className="w-[140px] min-w-[120px]">
        <SortAsc className="h-4 w-4 mr-2" />
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="relevance">Relevance</SelectItem>
        <SelectItem value="title-asc">Title A-Z</SelectItem>
        <SelectItem value="title-desc">Title Z-A</SelectItem>
        <SelectItem value="author-asc">Author A-Z</SelectItem>
        <SelectItem value="author-desc">Author Z-A</SelectItem>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="rating-desc">Highest Rated</SelectItem>
      </SelectContent>
    </Select>
  </div>
); 