import { Col, Card } from "react-bootstrap";
import Link from "next/link";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.permalink}`}>
      <Col className="mt-4">
        <Card className={styles.card}>
          <Card.Img variant="top" src={product.assets[0].url} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price.formatted_with_symbol}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
};

export default Product;
