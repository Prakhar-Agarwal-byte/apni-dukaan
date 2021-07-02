import { Navbar, Nav } from "react-bootstrap";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";

const Appbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link href="/">
        <div className="d-flex align-items-center">
          <StorefrontIcon className="text-white mr-2" />
          <Navbar.Brand>Apni Dukaan</Navbar.Brand>
        </div>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/user-profile">
            <div className="d-flex align-items-center mr-2">
              <AccountCircleIcon className="text-white" />
              <Nav.Link>User Profile</Nav.Link>
            </div>
          </Link>
          <Link href="/cart">
            <div className="d-flex align-items-center">
              <ShoppingCartIcon className="text-white" />
              <Nav.Link>Cart</Nav.Link>
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Appbar;
