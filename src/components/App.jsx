import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import Button from './Button/Button';
import { Container } from './App.styled';

class App extends Component {
  state = {
    searchForm: '',
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery />
        <Button />
      </Container>
    );
  }
}

export default App;
