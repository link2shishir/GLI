import { Container as MUIContainer } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Container from "./Container";
import footer_logo from "../assets/systemAssests/footer.png";

const Footer = () => {
  return (
    <footer>
      <MUIContainer maxWidth="md">
        <div className="text-center">
          <h2 className="font-weight-lighter">
            To Get Latest News & Further Update
          </h2>
          <h3>Subscribe Our Newsletter</h3>
          <Button variant="contained" className="my-3" color="primary">
            Subscribe
          </Button>
        </div>
      </MUIContainer>
      <Container>
        <Row className="mt-5">
          <Col md="3" className="footer_logo">
            <Image src={footer_logo} alt="GlobalLearning" />
          </Col>
          <Col md="2">
            <ListGroup variant="flush" className="mt-3">
              <ListGroup.Item>
                <h5>Community</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <small> Create Account</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small> Preter A Friend</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small> Get Coupon Code</small>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="2">
            <ListGroup variant="flush" className="mt-3">
              <ListGroup.Item>
                <h5>Support</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <small> Terms & Policy</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Copyright Issue</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small> Get Help</small>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="2">
            <ListGroup variant="flush" className="mt-3">
              <ListGroup.Item>
                <h5>Join Us</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <small> Become Teacher</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small> Become Student</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Partnership</small>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="3">
            <ListGroup variant="flush" className="mt-3">
              <ListGroup.Item>
                <h5>Social sites</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="social_btn"
                >
                  <i class="fab fa-facebook-f"></i> Facebook
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="social_btn"
                >
                  <i class="fab fa-instagram"></i> Instagram
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <div class="clearfix">
          <span class="float-left">
            <small>Copy &copy; 2020 Global Learning Infoprenoure </small>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
