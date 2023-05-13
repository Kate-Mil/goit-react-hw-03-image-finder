import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import Button from './Button/Button';
import { Container } from './App.styled';

const API_KEY = '34900883-94108098f0e7f8bd03a1699df';
const BASE_URL = 'https://pixabay.com/api/';
const ADD_API_REQUEST = 'image_type=photo&orientation=horizontal';

class App extends Component {
  state = {
    query: '',
    pictures: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchTerm = prevState.query;
    const nextSearchTerm = this.state.query;
    if (prevSearchTerm !== nextSearchTerm) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?q=${nextSearchTerm}&page=1&key=${API_KEY}&${ADD_API_REQUEST}&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`There is no pictures correspond to ${nextSearchTerm}`)
          );
        })
        .then(data => {
          if (data.hits.length === 0) {
            return alert(
              `There is no pictures correspond to ${nextSearchTerm}`
            );
          }
          this.setState({ pictures: data.hits });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  formSubmitHandler = searchForm => {
    this.setState({ query: searchForm });
  };

  render() {
    const { error, loading, pictures, query } = this.state;
    return (
      <>
        {/* <ToastContainer /> */}
        <Container>
          <Searchbar onSubmit={this.formSubmitHandler} />
          {error && <h1>error.message</h1>}
          {loading && <div>Loading...</div>}
          {pictures && <ImageGallery data={pictures} text={query} />}
          <Button />
        </Container>
      </>
    );
  }
}

export default App;
