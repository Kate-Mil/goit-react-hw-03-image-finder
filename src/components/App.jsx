import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Container } from './App.styled';
import NewsApiService from '../services/NewsApiService';

class App extends Component {
  state = {
    query: '',
    pictures: null,
    isLoading: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchTerm = prevState.query;
    const nextSearchTerm = this.state.query;
    if (prevSearchTerm !== nextSearchTerm) {
      this.setState({ status: 'isLoading' });
      const newsApiService = new NewsApiService();
      newsApiService
        .fetchImage(nextSearchTerm)
        .then(data => {
          if (data.hits.length === 0) {
            return alert(
              `There is no pictures correspond to ${nextSearchTerm}`
            );
          }
          this.setState({ pictures: data.hits, status: 'sucsess' });
        })
        .catch(error => this.setState({ error, status: 'error' }));
    }
  }

  formSubmitHandler = searchForm => {
    this.setState({ query: searchForm });
  };

  render() {
    const { error, pictures, query, status } = this.state;
    if (status === 'isLoading') {
      return <div>Loading...</div>;
    }

    if (status === 'error') {
      return <h1>{error.message}</h1>;
    }

    return (
      <>
        {/* <ToastContainer /> */}
        <Container>
          <Searchbar onSubmit={this.formSubmitHandler} />
          {pictures && <ImageGallery data={pictures} text={query} />}
          {pictures && <Button />}
        </Container>
      </>
    );
  }
}

export default App;
