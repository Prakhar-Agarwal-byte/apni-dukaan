import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "../components/Appbar";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
