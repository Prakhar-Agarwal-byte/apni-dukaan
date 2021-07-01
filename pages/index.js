import commerce from "../lib/commerce";
import Link from "next/link";

import ProductList from "../components/ProductList";

const HomePage = ({ merchant, categories, products }) => {
  return (
    <>
      <h1>{merchant.business_name}</h1>
      <h3>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </h3>

      <ProductList products={products} />
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
