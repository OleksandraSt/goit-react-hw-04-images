import PropTypes from 'prop-types';
import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export class SearchBar extends Component {
    state = {
      query: '',
    };
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };
  
    handleQueryChange = e => {
      this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
    };
    handleSubmit = e => {
      e.preventDefault();
      if (this.state.query.trim() === '') {
        alert('Please enter a request');
      }
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
    };
  
    render() {
      return (
        <SearchHeader>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchButton type="submit">
              <BiSearch size="2em"/>
            </SearchButton>
  
            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
              value={this.state.query}
              onChange={this.handleQueryChange}
            />
          </SearchForm>
        </SearchHeader>
      );
    }
  }
  
  export default SearchBar;