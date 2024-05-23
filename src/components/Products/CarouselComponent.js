import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import './CarouselComponent.css';

function CarouselComponent({
  products,
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
        className="carousel"
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        nextIcon={nextIcon}
        prevIcon={prevIcon}>
        {products.map(product => (
          <Carousel.Item key={product.id}>
            <Image
              className="carousel-image d-block"
              src={product.image}
              alt={product.name}
              onClick={() => {
                if (window.matchMedia('(min-width: 992px)').matches) {
                  handleImageClick(product.image);
                }
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Row className="thumbnails d-none d-lg-flex ">
        {products.slice(0, 4).map((product, idx) => (
          <Col
            key={idx}
            className="carousel-thumbnail pe-0">
            <div
              id="Thumbnail-Image"
              className={`thumbnail-image rounded-4 ${
                idx === index ? 'active-thumbnail' : ''
              }`}
              onClick={() => handleThumbnailClick(idx)}
              style={{
                backgroundImage: `url(${product.imageThumbnail})`,
                cursor: 'pointer',
                width: '100%',
              }}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CarouselComponent;
