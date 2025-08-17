import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function SearchBox() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      window.location.hash = `#/search?q=${encodeURIComponent(query)}`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search articles"
        className="w-44 md:w-64 h-9"
      />
      <Button 
        onClick={handleSearch}
        variant="outline"
        size="sm"
        className="h-9"
      >
        Search
      </Button>
    </div>
  );
}