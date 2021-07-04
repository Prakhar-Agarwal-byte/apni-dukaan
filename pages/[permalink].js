import commerce from "../lib/commerce.js";
import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import parse from "html-react-parser";
import { useCart } from "../context/cart.js";
import { ToastContainer, toast } from "react-toastify";

export default function ProductPage({ product }) {
  const quantityRef = useRef();
  const { setCart } = useCart();
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);

  const addToCart = async () => {
    setAddBtnDisabled(true);
    const quantity = parseFloat(quantityRef.current.value);
    if (!Number.isInteger(quantity) || quantity <= 0) {
      toast.error("🦄 Error: The product could not be added to your cart!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const response = await commerce.cart.add(product.id, quantity);
      console.log(response);
      setCart(response.cart);
      toast.success("🦄 The product was successfully added to your cart!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setAddBtnDisabled(false);
  };

  return (
    <Container className="mt-4">
      <ToastContainer />
      <Row xs={1} md={2}>
        <Col>
          <Image
            src={product.assets[0].url}
            alt={product.name}
            height={product.assets[0].image_dimensions.height}
            width={product.assets[0].image_dimensions.width}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <h2 className="mt-3">{product.name}</h2>
            <h5 className="mt-3">{product.price.formatted_with_symbol}</h5>
            <div
              className="mt-3"
              style={{ backgroundColor: "#e0e0dc", width: "fit-content" }}
            >
              {`SKU: ${product.sku}`}
            </div>
            <div className="d-flex align-items-center mt-3">
              <Form.Control
                className="mr-3"
                type="text"
                placeholder="Quantity"
                style={{ width: "150px" }}
                ref={quantityRef}
              />
              <Button
                variant="primary"
                onClick={addToCart}
                disabled={addBtnDisabled}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row xs={1} className="mt-3">
        <Col>
          <h4>About Product</h4>
          {parse(product.description)}
        </Col>
      </Row>
    </Container>
  );
}

export const getStaticPaths = async () => {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
};
