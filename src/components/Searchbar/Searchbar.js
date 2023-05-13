import { Component } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchForm: '',
  };

  hendleSerchFormChange = e => {
    this.setState({ searchForm: e.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = e => {
    e.preventDefault();

    if (this.state.searchForm.trim() === '') {
      // toast('Please enter, what exactly you want to find?');

      alert('Please enter, what exactly you want to find?');
      return;
    }
    this.props.onSubmit(this.state.searchForm);
    this.setState({ searchForm: '' });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.hendleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchForm}
            onChange={this.hendleSerchFormChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
