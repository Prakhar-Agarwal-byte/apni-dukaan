import Link from "next/link";

import Product from "./Product";

const ProductList = ({ products }) => {
  if (!products) return null;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
