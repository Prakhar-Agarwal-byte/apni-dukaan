import commerce from "../../lib/commerce";

import ProductList from "../../components/ProductList";

const ProductsPage = ({ products }) => {
  return (
    <>
      <h1>Products</h1>
      <ProductList products={products} />
    </>
  );
};

export const getStaticProps = async () => {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
