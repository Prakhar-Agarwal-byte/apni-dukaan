import commerce from "../lib/commerce";
import Link from "next/link";

import ProductList from "../components/ProductList";
import Appbar from "../components/Appbar";

const HomePage = ({ merchant, categories, products }) => {
  return (
    <>
      <Appbar />
    </>
  );
};

export const getStaticProps = async () => {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
};

export default HomePage;
