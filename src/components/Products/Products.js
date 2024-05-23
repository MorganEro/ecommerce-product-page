import React, { useState } from 'react';
import CarouselComponent from './CarouselComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PRODUCT_LIST } from './ProductList';
import CartButtons from '../Cart/CartButtons';
import Lightbox from './Lightbox';
import iconNext from '../../assets/images/icon-next.svg';
import iconPrevious from '../../assets/images/icon-previous.svg';
import './Products.css';

const Products = ({ setCartArray }) => {
  const products = PRODUCT_LIST;
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextIcon = (
    <div className="icon-arrow d-lg-none">
      <img
        className="icon-arrow-svg"
        src={iconNext}
        alt="Next Slide"
      />
    </div>
  );

  const prevIcon = (
    <div className="icon-arrow d-lg-none">
      <img
        className="icon-arrow-svg "
        src={iconPrevious}
        alt="Previous Slide"
      />
    </div>
  );

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleThumbnailClick = index => {
    setIndex(index);
  };

  return (
    <Row className="px-xl-5">
      <Col
        className="product-images pb-3"
        sm={12}
        lg={6}>
        <CarouselComponent
          products={products}
          index={index}
          handleSelect={handleSelect}
          handleImageClick={setSelectedImage}
          handleThumbnailClick={handleThumbnailClick}
          nextIcon={nextIcon}
          prevIcon={prevIcon}
        />
        {selectedImage && (
          <Lightbox
            show={!!selectedImage}
            onHide={() => setSelectedImage(null)}
            products={products}
            index={index}
            handleSelect={handleSelect}
            handleImageClick={setSelectedImage}
            handleThumbnailClick={handleThumbnailClick}
          />
        )}
      </Col>
      <Col
        className="product-details d-lg-flex flex-column justify-content-center "
        sm={12}
        lg={6}>
        <div className="details d-flex flex-column gap-2 gap-lg-4">
          <small className="details__company fw-bold">SNEAKER COMPANY</small>
          <h1 className="details__name fw-bold">{products[index].name}</h1>
          <p className="details__description">{products[index].description}</p>
          <Row className="details__price d-flex fw-bold ps-lg-3 pe-3 align-items-center mb-3">
            <Col
              xs={4}
              className="d-flex align-items-center">
              <p className="details__price--actual fs-2 px-0 my-0">
                ${products[index].price.toFixed(2)}
              </p>
              <p className="details__price--discount ms-3 px-2 rounded my-0">
                50%
              </p>
            </Col>
            <Col
              xs={3}
              lg={12}
              className="details__price--previous ms-auto pe-0 text-end d-lg-flex align-items-center justify-content-lg-start">
              <s> ${products[index].price * 2}.00</s>
            </Col>
          </Row>
        </div>
        <Row className="cart-buttons gap-3 px-3 pt-lg-3">
          <CartButtons
            setCartArray={setCartArray}
            product={products[index]}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default Products;
