import Appbar from "../components/Appbar";
import { CartProvider } from "../context/cart.js";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Appbar />
        <Component {...pageProps} />;
      </CartProvider>
    </>
  );
}

export default MyApp;
