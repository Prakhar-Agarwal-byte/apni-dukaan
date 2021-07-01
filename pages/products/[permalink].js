import commerce from "../../lib/commerce";

export default function ProductPage({ product }) {
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
    </>
  );
}

export const getStaticPaths = async () => {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
};
