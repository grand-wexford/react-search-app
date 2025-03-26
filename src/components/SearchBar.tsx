import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (string?: string) => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, setSearchQuery }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => { setSearchQuery(e.target.value); return setSearch(e.target.value) }}
        placeholder="Найти статью..."
      />
      <button type="submit">Поиск</button>
    </form>
  );
};

export default SearchBar;