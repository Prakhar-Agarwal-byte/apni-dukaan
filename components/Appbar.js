import { Navbar, Nav } from "react-bootstrap";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";

const Appbar = () => {
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
          <Link href="/user-profile">
            <a>
              <div className="d-flex align-items-center mr-2">
                <AccountCircleIcon className="text-white" />
                <span className="text-white ml-2">User Profile</span>
              </div>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <div className="d-flex align-items-center">
                <ShoppingCartIcon className="text-white" />
                <span className="text-white ml-2"> Cart</span>
              </div>
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Appbar;
