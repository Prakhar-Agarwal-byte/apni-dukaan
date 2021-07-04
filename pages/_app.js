import Appbar from "../components/Appbar";
import { CartProvider } from "../context/cart.js";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Layout>
          <Appbar />
          <Component {...pageProps} />;
        </Layout>
      </CartProvider>
    </>
  );
}

export default MyApp;
