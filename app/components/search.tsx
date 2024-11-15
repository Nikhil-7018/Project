'use client'; // Ensure this is a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` instead of `next/router`

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?q=${query}`); // Navigate programmatically
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search"
      />
      <button className="text-red-900 " type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
