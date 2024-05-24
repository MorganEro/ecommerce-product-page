import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';
import './Cart.css';

const CartButtons = ({ setCartArray, product }) => {
  const [productQuantitiesObject, setProductQuantitiesObject] = useState({});

  const handleMinusClick = () => {
    setProductQuantitiesObject(prevQuantities => ({
      ...prevQuantities,
      [product.id]: Math.max(prevQuantities[product.id] - 1, 0),
    }));
  };

  const handlePlusClick = () => {
    setProductQuantitiesObject(prevQuantities => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  };

  const handleAddToCartClick = () => {
    const quantity = productQuantitiesObject[product.id] || 0;
    const newItem = { ...product, quantity };

    setCartArray(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, newItem];
      }
    });
    setProductQuantitiesObject(prevQuantity => {
      const newQuantity = { ...prevQuantity };
      delete newQuantity[product.id];
      return newQuantity;
    });
  };

  return (
    <>
      <Col
        role="form"
        className="cart-quantity-column px-0"
        xs={12}
        lg={5}>
        <ButtonGroup
          size="lg"
          aria-label="Add to cart"
          id="Cart-Buttons--Quantity"
          className="w-100 align-content-center">
          <Button
            className="ps-4"
            onClick={handleMinusClick}>
            <img
              src={iconMinus}
              alt="minus"
              height="4"
              width="12"
            />
          </Button>
          <Button
            className="quantity__total fw-bold"
            disabled>
            {productQuantitiesObject[product.id] || 0}
          </Button>
          <Button
            className="d-flex align-items-center pe-4"
            onClick={handlePlusClick}>
            <img
              className="ms-auto"
              src={iconPlus}
              alt="plus"
              height="12"
              width="12"
            />
          </Button>
        </ButtonGroup>
      </Col>
      <Col
        xs={12}
        lg={6}
        className="cart-submit-column px-0 flex-grow-1">
        <Button
          id="Cart-Buttons--AddCart"
          className="d-flex w-100 justify-content-center align-items-center border-0 fw-bold fs-6 py-3"
          onClick={handleAddToCartClick}>
          <svg
            className="me-3"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Cart icon</title>
            <path
              className="cart-icon"
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          Add to Cart
        </Button>
      </Col>
    </>
  );
};

export default CartButtons;
