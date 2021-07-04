import { Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useCart } from "../context/cart";
import commerce from "../lib/commerce";
import { useState } from "react";

const Cartitem = ({ cartitem }) => {
  const { setCart } = useCart();
  const [removeBtnDisabled, setremoveBtnDisabled] = useState(false);

  const removeItem = async () => {
    setremoveBtnDisabled(true);
    const { cart } = await commerce.cart.remove(cartitem.id);
    setCart(cart);
    setremoveBtnDisabled(false);
  };

  return (
    <Col className="mt-2">
      <Card>
        <div className="d-flex align-items-center justify-content-around">
          <div>
            <Image
              src={cartitem.media.source}
              alt={cartitem.name}
              height="200px"
              width="200px"
            />
          </div>

          <div className="d-flex flex-column">
            <h4>{cartitem.name}</h4>
            {`${cartitem.quantity} x ${cartitem.price.formatted_with_symbol}`}
          </div>
          <Button
            variant="danger"
            onClick={removeItem}
            disabled={removeBtnDisabled}
          >
            X
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default Cartitem;
