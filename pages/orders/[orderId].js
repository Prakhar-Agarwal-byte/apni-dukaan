import { useRouter } from "next/router";
import { Alert, Container } from "react-bootstrap";

const ThanksPage = () => {
  const router = useRouter();
  const { orderId } = router.query;
  return (
    <Container className="mt-4">
      <h1
        style={{ textAlign: "center", wordWrap: "break-word" }}
      >{`Order ID: ${orderId}`}</h1>
      <Alert variant="success">Your order was placed successfully!</Alert>
    </Container>
  );
};

export default ThanksPage;
