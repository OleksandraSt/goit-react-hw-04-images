import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal';
import { Picture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState (false);
  
    const toggleModal = () => {
      setShowModal(prevShowModal => !prevShowModal);
      };

      return (
        <li key={id} onClick={toggleModal}>
          <Picture src={webformatURL} alt={tags} width="300" />
          {showModal && (
            <Modal large={largeImageURL} alt={tags} onClose={toggleModal} />
          )}
        </li>
      );
    };
  
  
    ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  export default ImageGalleryItem;
