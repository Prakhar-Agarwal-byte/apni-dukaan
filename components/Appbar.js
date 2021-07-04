import { Navbar, Nav, Badge } from "react-bootstrap";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";
import { useCart } from "../context/cart.js";

const Appbar = () => {
  const { cart } = useCart();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link href="/">
        <a>
          <div className="d-flex align-items-center">
            <StorefrontIcon className="text-white mr-2" />
            <Navbar.Brand>Apni Dukaan</Navbar.Brand>
          </div>
        </a>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/cart">
            <a>
              <div className="d-flex align-items-center">
                <ShoppingCartIcon className="text-white" />
                <Badge variant="danger">
                  {cart ? cart.total_unique_items : null}
                </Badge>
                <span className="text-white ml-2">Cart</span>
              </div>
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Appbar;
