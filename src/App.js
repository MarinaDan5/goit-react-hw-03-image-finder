import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        {/* <ImageGalleryItem /> */}
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}

export default App;
