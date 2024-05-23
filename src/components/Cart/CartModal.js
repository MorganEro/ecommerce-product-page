import React from 'react';
import DeleteIcon from '../../assets/images/icon-delete.svg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Cart.css';

const CartModal = ({
  show,
  handleClose,
  totalCartQuantity,
  cartArray,
  setCartArray,
}) => {
  const handleDelete = e => {
    const id = parseInt(e.target.closest('button').id);
    const updatedCartArray = cartArray.filter(product => product.id !== id);
    setCartArray(updatedCartArray);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-styling"
      aria-labelledby="Cart-contents-modal">
      <Modal.Header closeButton>
        <Modal.Title
          id="Cart-contents-modal"
          className="fs-6">
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {totalCartQuantity === 0 ? (
          <div className="empty d-flex align-items-center justify-content-center fw-bold ">
            {' '}
            Your cart is empty
          </div>
        ) : (
          <Container>
            {cartArray.map(cartProduct => (
              <Row
                key={cartProduct.id}
                className="align-items-center">
                <Col
                  xs={2}
                  className="ps-1 pe-0">
                  <Image
                    rounded
                    src={cartProduct.imageThumbnail}
                    alt="product"
                  />
                </Col>
                <Col
                  xs={9}
                  className="cart-text px-0">
                  <div className="ps-3 d-flex flex-column">
                    <p className="mb-1 mt-2">{cartProduct.name}</p>
                    <p className="mb-2">
                      $ {cartProduct.price.toFixed(2)} x {cartProduct.quantity}
                      <span className="cart-text__total fw-bold ps-2">
                        ${(cartProduct.price * cartProduct.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </Col>
                <Col
                  xs={1}
                  className="px-0">
                  <button
                    id={cartProduct.id}
                    className="delete-button bg-transparent border-0 p-0"
                    onClick={handleDelete}>
                    <img
                      src={DeleteIcon}
                      alt="Delete Icon"
                    />
                  </button>
                </Col>
              </Row>
            ))}

            <Row>
              <Col
                xs={12}
                className="d-grid pt-3 px-1">
                <Button
                  id="Checkout-Button"
                  className="p-3 fs-6 fw-bold"
                  size="lg">
                  Checkout
                </Button>
              </Col>
            </Row>
          </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
