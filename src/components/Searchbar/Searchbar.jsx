import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState ('');
   
   const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
   };
  
    const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {
        alert('Please enter a request');
      }
      onSubmit(query);
      setQuery('');
    };
  
      return (
        <SearchHeader>
          <SearchForm onSubmit={handleSubmit}>
            <SearchButton type="submit">
              <BiSearch size="2em"/>
            </SearchButton>
  
            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
              value={query}
              onChange={handleQueryChange}
            />
          </SearchForm>
        </SearchHeader>
      );
    };

  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
  export default SearchBar;