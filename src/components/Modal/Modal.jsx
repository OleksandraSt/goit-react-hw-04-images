import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ModalContent, ModalBackdrop } from './Modal.styled';
import { createPortal } from 'react-dom';

const addModal = document.querySelector('#modal-root');
export const Modal = ({ large, alt, onClose }) => {
 
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
});

const handleBackdropClick = e => {
  if (e.target === e.currentTarget) {
    onClose();
  }};

    return createPortal(
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalBackdrop>
          <ModalContent src={large} alt={alt} width="600" />
        </ModalBackdrop>
      </ModalBackdrop>,
      addModal
    );
};

Modal.propTypes = {
  large: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;