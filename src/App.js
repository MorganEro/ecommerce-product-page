import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import './App.css';
import CartModal from './components/Cart/CartModal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cartArray, setCartArray] = useState([]);
  const totalCartQuantity = cartArray.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="App d-flex flex column justify-content-center align-items-center">
      <Container>
        <header>
          <Navigation
            handleShow={handleShow}
            totalCartQuantity={totalCartQuantity}
          />
          <CartModal
            show={show}
            handleClose={handleClose}
            cartArray={cartArray}
            totalCartQuantity={totalCartQuantity}
            setCartArray={setCartArray}
          />
        </header>

        <section id="main">
          <Products setCartArray={setCartArray} />
        </section>
      </Container>
    </div>
  );
}

export default App;
