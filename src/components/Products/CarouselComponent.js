import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import './CarouselComponent.css';

function CarouselComponent({
  id,
  product,
  index,
  handleSelect,
  handleImageClick,
  handleThumbnailClick,
  nextIcon,
  prevIcon,
}) {
  return (
    <>
      <Carousel
        id={id}
        className="carousel px-0"
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        nextIcon={nextIcon}
        prevIcon={prevIcon}>
        {product.images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <Image
              className="carousel-image d-block"
              src={img}
              alt={product.name}
              onClick={() => {
                if (window.matchMedia('(min-width: 992px)').matches) {
                  handleImageClick(img);
                }
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Row className="thumbnails d-none d-lg-flex justify-content-between">
        {product.imageThumbnails.slice(0, 4).map((thumbnail, idx) => (
          <Col
            key={idx}
            className={`carousel-thumbnail thumbnail-image rounded-4 px-0 ${
              idx === index ? 'active-thumbnail' : ''
            }`}
            onClick={() => handleThumbnailClick(idx)}
            style={{
              backgroundImage: `url(${thumbnail})`,
              cursor: 'pointer',
              width: '100%',
            }}
          />
        ))}
      </Row>
    </>
  );
}

export default CarouselComponent;
