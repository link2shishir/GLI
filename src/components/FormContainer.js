import Navbar from "./Navbar";
import { Image, Container, Row, Col, Jumbotron } from "react-bootstrap";
import Element from "../assets/systemAssests/element.png";
import Undrawmobile from "../assets/systemAssests/undrawmobile.png";

const FormContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col md="5">
              <div className="form_section">{children}</div>
            </Col>
            <Col md="7" className="text-center">
              <Image
                src={Undrawmobile}
                alt="Undrawmobile"
                fluid
                className="Undrawmobile"
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Image src={Element} alt="Element" fluid />
    </>
  );
};

export default FormContainer;
