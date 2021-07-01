const Product = ({ name, price }) => {
  return (
    <p>
      {name}: {price.formatted_with_symbol}
    </p>
  );
};

export default Product;
