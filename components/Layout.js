import { useCart } from "../context/cart";
import { useEffect } from "react";
import commerce from "../lib/commerce";

const Layout = ({ children }) => {
  const { setCart } = useCart();

  useEffect(async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }, []);

  return <> {children}</>;
};

export default Layout;
