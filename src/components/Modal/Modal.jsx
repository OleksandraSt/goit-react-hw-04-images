import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalContent, ModalBackdrop } from './Modal.styled';
import { createPortal } from 'react-dom';

const addModal = document.querySelector('#modal-root');
export default class Modal extends Component {
  static propTypes = {
    large: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { large, alt } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalBackdrop>
          <ModalContent src={large} alt={alt} width="600" />
        </ModalBackdrop>
      </ModalBackdrop>,
      addModal
    );
  }
};
