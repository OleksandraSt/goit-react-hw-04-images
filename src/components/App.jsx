import { useState,useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import SearchBar from './Searchbar/Searchbar';
import pixabayApi from './api/api';
import Button from './Button';
import { Request, ErrorMessage } from './ImageGallery/ImageGallery.styled';

export const App = () =>  {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('idle');


 const handleFormSubmit = query => {
  setQuery(query);
  setImages([]);
  setPage(1);
  setStatus('idle');
  setTotal(0)
  };

  useEffect(() => {
    if (query) {
      getQuery();
    }
      async function getQuery() {
        try {
          setIsLoading(true);
        const images = await pixabayApi.fetchImages(query, page);
        if (!images.hits.length) {
          setIsLoading(false);
          setStatus('resolved')
           return alert('Nothing Found');
        }
        setImages(prevState => [...prevState, ...images.hits]);
        setStatus('resolved');
        setIsLoading(false);
        setTotal(images.total)
        return;
      }
      catch (error) {
        setError(error.message);
      }
    }

  }, [query, page]);

  
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

    const totalPages = Math.ceil(total / 12);

    return (
      <>
        <SearchBar onSubmit={handleFormSubmit} />
        {isLoading && <Loader />}
        {!query && <Request>Enter a request</Request>}
        {error && <ErrorMessage> {error.message}</ErrorMessage>}
        {status === 'resolved' && <ImageGallery images={images} />}
        {status === 'resolved' && total === 0 && (
          <ErrorMessage>Nothing Found</ErrorMessage>
        )}
        {images.length > 0 && page < totalPages && <Button onClick={loadMore} />}
      </>
    );
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
