import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import SearchBar from './Searchbar/Searchbar';
import pixabayApi from './api/api';
import Button from './Button';
import { Request, ErrorMessage } from './ImageGallery/ImageGallery.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    total: 0,
    status: 'idle',
  };

  handleFormSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query ||
          prevState.page !== this.state.page) {
      this.setState({ isLoading: true, error: null });
      console.log('new request');
      pixabayApi
        .fetchImages(this.state.query, this.state.page)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
              total: images.total,
              status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, query, images, error, status, total, page } = this.state;
    const totalPages = Math.ceil(total / 12);
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {!query && <Request>Enter a request</Request>}
        {error && <ErrorMessage> {error.message}</ErrorMessage>}
        {status === 'resolved' && <ImageGallery images={images} />}
        {status === 'resolved' && total === 0 && (
          <ErrorMessage>Nothing Found</ErrorMessage>
        )}
        {images.length > 0 && page < totalPages && <Button onClick={this.loadMore} />}
      </>
    );
  }
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
