import Cartlist from "../components/Cartlist";
import { useCart } from "../context/cart";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

const cart = () => {
  const { cart } = useCart();
  if (cart && cart.total_items !== 0) {
    return (
      <>
        <Container className="mt-4">
          <Row xs={1}>
            <Cartlist />
            <Col className="mt-2">
              <Card>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <b>Subtotal: </b>
                    <span>
                      {cart.subtotal
                        ? cart.subtotal.formatted_with_symbol
                        : null}
                    </span>
                  </div>
                  <Link href="/checkout">
                    <a>
                      <Button variant="success">Checkout</Button>
                    </a>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <h1>Your Cart is Empty!</h1>
      </div>
    );
  }
};

export default cart;
