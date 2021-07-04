import Cartitem from "./Cartitem";
import { useCart } from "../context/cart";

const Cartlist = () => {
  const { cart } = useCart();
  return (
    <>
      {cart.line_items.map((cartitem) => (
        <Cartitem key={cartitem.id} cartitem={cartitem} />
      ))}
    </>
  );
};

export default Cartlist;
