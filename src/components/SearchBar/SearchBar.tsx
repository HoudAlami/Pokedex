import React from 'react';
import './Searchbar.scss';

type SearchBarProps = {
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({ inputValue, handleChange }: SearchBarProps) {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBar__input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Recheche ton guerrier !!!"
      />
    </div>
  );
}

export default SearchBar;
