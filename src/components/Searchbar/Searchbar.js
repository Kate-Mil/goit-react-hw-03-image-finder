import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export default function Searchbar({ onSubmit }) {
  return (
    <SearchBar>
      <SearchForm>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
}
