import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Container } from './App.styled';
import * as ImageService from '../services/image-api';

class App extends Component {
  state = {
    query: '',
    page: 1,
    pictures: [],
    isLoading: false,
    error: false,
    totalPictures: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: 'true', error: '' });
        const data = await ImageService.fetchImage(query, page);

        const pictures = data.hits.map(
          ({ id, webformatURL, tags, largeImageURL }) => {
            return {
              id,
              webformatURL,
              tags,
              largeImageURL,
            };
          }
        );

        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...pictures],
            totalPictures: data.totalHits,
          };
        });
      } catch (error) {
        this.setState({ error: 'Something went wrong' });
      } finally {
        this.setState({ isLoading: 'false' });
      }
    }
  }

  formSubmitHandler = searchForm => {
    this.setState({
      query: searchForm,
      pictures: [],
      page: 1,
      totalPictures: 0,
    });
  };

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { pictures, error, totalPictures, isLoading } = this.state;

    const showButton = pictures.length !== totalPictures && isLoading;

    return (
      <>
        {/* <ToastContainer /> */}
        <Container>
          <Searchbar onSubmit={this.formSubmitHandler} />
          {pictures.length > 0 && <ImageGallery data={pictures} />}
          {error && <p>{error}</p>}
          {showButton && <Button onClick={this.incrementPage} />}
        </Container>
      </>
    );
  }
}

export default App;
