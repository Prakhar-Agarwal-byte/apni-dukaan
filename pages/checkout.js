import { Container, Form, Button } from "react-bootstrap";
import commerce from "../lib/commerce";
import { useEffect, useState, useRef } from "react";
import { useCart } from "../context/cart";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const { cart, setCart } = useCart();
  const [token, setToken] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const cardRef = useRef();

  const router = useRouter();

  useEffect(async () => {
    if (cart) {
      const checkoutToken = await commerce.checkout.generateTokenFrom(
        "cart",
        cart.id
      );
      setToken(checkoutToken);
    }
  }, [cart]);

  const handlePurchase = async () => {
    const order = await commerce.checkout.capture(token.id, {
      customer: {
        firstname: nameRef.current.value,
        email: emailRef.current.value,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "01",
          expiry_year: "2023",
          cvc: "123",
          postal_zip_code: "94103",
        },
      },
    });
    commerce.cart.empty();
    setCart(null);
    router.push("/orders/[orderId]", `/orders/${order.id}`);
  };

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            ref={nameRef}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter card number (it will not be charged))"
            ref={cardRef}
          />
        </Form.Group>
        <Button type="submit" variant="success" onClick={handlePurchase}>
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
