import React from 'react';
import { Modal } from 'react-bootstrap';
import CarouselComponent from './CarouselComponent';
import iconNextLightbox from '../../assets/images/icon-next.svg';
import iconPreviousLightbox from '../../assets/images/icon-previous.svg';
import './Lightbox.css';

const nextIcon = (
  <div className="icon-arrow">
    <img
      className="icon-arrow-svg"
      src={iconNextLightbox}
      alt="Next Slide"
    />
  </div>
);

const prevIcon = (
  <div className="icon-arrow">
    <img
      className="icon-arrow-svg"
      src={iconPreviousLightbox}
      alt="Previous Slide"
    />
  </div>
);

function Lightbox({
  show,
  onHide,
  product,
  index,
  handleSelect,
  handleImageClick,
  handleThumbnailClick,
}) {
  return (
    <Modal
      className="lightbox-modal d-none d-lg-block"
      show={show}
      onHide={onHide}
      size="md"
      centered
      dialogClassName="lightbox-modal__dialog">
      <Modal.Header
        className="lightbox-modal__header border-0 px-0"
        closeButton
        closeVariant="white"
      />
      <Modal.Body className="lightbox-modal__body p-0 ">
        <CarouselComponent
          id="Lightbox-Carousel"
          product={product}
          index={index}
          handleSelect={handleSelect}
          handleImageClick={handleImageClick}
          handleThumbnailClick={handleThumbnailClick}
          nextIcon={nextIcon}
          prevIcon={prevIcon}
        />
      </Modal.Body>
    </Modal>
  );
}

export default Lightbox;
