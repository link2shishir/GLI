import { useEffect } from "react";
import Container from "../components/Container";
import SimilarCourses from "../components/Course";
import { Row, Col, Image, Jumbotron, Card, ListGroup } from "react-bootstrap";
import { Button } from "@material-ui/core/";
import { LinkContainer } from "react-router-bootstrap";
import ComponentWrapper from "../utils/ComponentWrapper";
import { Link } from "react-router-dom";
import course_overview from "../assets/systemAssests/course_overview.png";
import course from "../assets/systemAssests/course.jpg";

import { useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "COURSESCOMPONENTMOUNT" });
    return () => {
      dispatch({ type: "COURSESCOMPONENTUNMOUNT" });
    };
  }, [dispatch]);

  const cartSection = () => {
    return (
      <div className="my-5">
        <h2>Cart</h2>
        <Row>
          <Col md="8">
            <Card className="mt-4">
              <Row>
                <Col md="5">
                  <Link to="course_overview">
                    <Card.Img
                      variant="top"
                      src={course}
                      style={{
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "0px",
                      }}
                    />
                  </Link>
                </Col>
                <Col md="7">
                  <Card.Body>
                    <Row>
                      <Col md="8">
                        <Card.Text as="div">
                          <small>Graphic Design</small>
                        </Card.Text>

                        <Link to="course_overview">
                          <Card.Title className="my-3">
                            How to Become Great Graphic Designer in 7 days
                          </Card.Title>
                        </Link>
                        <div className="clearfix">
                          <div
                            className="float-left"
                            style={{
                              backgroundColor: "#ffa62b4f",
                              borderRadius: "24px",
                              paddingLeft: "12px",
                              paddingRight: "12px",
                            }}
                          >
                            <small
                              style={{
                                color: "#ffa62b",
                              }}
                            >
                              8h 17min
                            </small>
                          </div>
                          <div className="float-right">
                            <small>352 Enrolled</small>
                          </div>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="text-right">
                          <i
                            class="fas fa-shopping-cart"
                            style={{
                              color: "#ffa62b",
                            }}
                          ></i>
                        </div>

                        <h4 className="mt-4">Rs.3000</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mt-4">
              <Row>
                <Col md="5">
                  <Link to="course_overview">
                    <Card.Img
                      variant="top"
                      src={course}
                      style={{
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "0px",
                      }}
                    />
                  </Link>
                </Col>
                <Col md="7">
                  <Card.Body>
                    <Row>
                      <Col md="8">
                        <Card.Text as="div">
                          <small>Graphic Design</small>
                        </Card.Text>

                        <Link to="course_overview">
                          <Card.Title className="my-3">
                            How to Become Great Graphic Designer in 7 days
                          </Card.Title>
                        </Link>
                        <div className="clearfix">
                          <div
                            className="float-left"
                            style={{
                              backgroundColor: "#ffa62b4f",
                              borderRadius: "24px",
                              paddingLeft: "12px",
                              paddingRight: "12px",
                            }}
                          >
                            <small
                              style={{
                                color: "#ffa62b",
                              }}
                            >
                              8h 17min
                            </small>
                          </div>
                          <div className="float-right">
                            <small>352 Enrolled</small>
                          </div>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="text-right">
                          <i
                            class="fas fa-shopping-cart"
                            style={{
                              color: "#ffa62b",
                            }}
                          ></i>
                        </div>

                        <h4 className="mt-4">Rs.3000</h4>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md="4">
            <Card className="mt-4">
              <ListGroup variant="flush" className="cart_listgroup">
                <ListGroup.Item>
                  <h4>Order Summary</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Amount</b>
                    </Col>
                    <Col>Rs.3000</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Discount</b>
                    </Col>
                    <Col>Rs.0</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b> Vat(13%)</b>
                    </Col>
                    <Col>Rs.123</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Total</b>
                    </Col>
                    <Col>
                      <b>Rs.3123</b>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <Button variant="contained" color="primary">
                        Confirm
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="outlined"
                        style={{
                          color: "#f3b431",
                          border: "1px solid #f3b431",
                        }}
                        className="ml-4"
                        color="primary"
                      >
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>Payment Options</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
  const similarCourses = () => {
    return (
      <div className="my-5">
        <h2>
          {" "}
          <span className="font-weight-lighter">Similar </span> Courses{" "}
        </h2>
        <div className="mt-4">
          <Row>
            {Array(8)
              .fill()
              .map((data, index) => {
                return (
                  <Col key={index} sm={12} md={6} lg={4} xl={3}>
                    <SimilarCourses />
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    );
  };
  return (
    <ComponentWrapper>
      <Jumbotron fluid className="jumbotron_container">
        <Container>
          <Row>
            <Col md="6">
              <div className="course_overview">
                <h2>Digitalpreneur</h2>
                <p>
                  Your steps towards successful business. Join our intensive
                  classes to enhance your business skills and unfold new chapter
                  of life
                </p>
                <div className="mt-5">
                  <LinkContainer to="sign_in">
                    <Button variant="contained" color="primary">
                      Enroll
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="outlined"
                    style={{
                      color: "#f3b431",
                      border: "1px solid #f3b431",
                    }}
                    className="ml-4"
                    color="primary"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="6" className="text-center">
              <Image src={course_overview} alt="course_overview" fluid />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        {cartSection()}
        {similarCourses()}
      </Container>
    </ComponentWrapper>
  );
};
export default Cart;
