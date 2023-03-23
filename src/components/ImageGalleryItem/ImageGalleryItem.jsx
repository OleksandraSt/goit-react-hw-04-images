import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal';
import { Picture } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
    state = {
      showModal: false,
    };
  
    static propTypes = {
      id: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    };
  
    toggleModal = () => {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
      }));
    };
  
    render() {
      const { id, webformatURL, tags, largeImageURL } = this.props;
      const { showModal } = this.state;
  
      return (
        <li key={id} onClick={this.toggleModal}>
          <Picture src={webformatURL} alt={tags} width="300" />
          {showModal && (
            <Modal large={largeImageURL} alt={tags} onClose={this.toggleModal} />
          )}
        </li>
      );
    }
  }
  
  export default ImageGalleryItem;
