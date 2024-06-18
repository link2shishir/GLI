import { Row, Col, Card, Image } from "react-bootstrap";
import instructor from "../assets/systemAssests/instructor.jpg";
import AccordionContainer from "./AccordionContainer";
import { Link } from "react-router-dom";
const OverView = () => {
  return (
    <Row>
      <Col md="3">
        <Card className="mt-2">
          <Card.Body>
            <Card.Title style={{ color: "#ffa62b" }}>
              Course Instructor
            </Card.Title>
            <div className="my-5">
              <Image
                src={instructor}
                alt="Amanda Jackson"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <Card.Title>Amanda Jackson</Card.Title>
            </div>

            <Card.Text className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              commodi saepe at illo? Corrupti ipsum, voluptas eum architecto
              iusto ex.
            </Card.Text>
            <Card.Text as="div" className="social_info">
              <Link to="facebook">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="facebook">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="facebook">
                <i class="fab fa-twitter"></i>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card className="mt-2 rounded">
          <Card.Body>
            <Card.Title style={{ color: "#ffa62b", textAlign: "start" }}>
              Description
            </Card.Title>
            <Card.Text className="my-5 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              reiciendis illo perferendis necessitatibus voluptates id
              voluptatum sunt dolor nulla expedita, qui quo soluta minus
              exercitationem facere. Eaque voluptas aperiam laboriosam nulla
              illum aut temporibus at repudiandae ad alias dicta dolore fugiat
              tempora laborum dolores a necessitatibus, eos veritatis
              consequuntur, tempore repellendus molestias. Iusto impedit sit
              deserunt, ipsa nobis consequatur non eum atque ipsam eveniet
              dignissimos eos quas, natus, perferendis tempore accusamus?
              Cupiditate quisquam itaque amet culpa repellat eveniet tempore
              nobis totam temporibus. Sequi libero nesciunt sed quam unde nisi
              maiores veritatis. Dolorum consectetur quasi aliquam ipsum optio
              autem id illum?
            </Card.Text>
            <Card.Text as="div" className="mt-4">
              <div className="d-flex">
                <div className="course_outline">Released Date:</div>

                <small>1/ 03/ 2019</small>
              </div>
              <div className="d-flex my-3">
                <div className="course_outline">Duration:</div>

                <small>1h 05 min 00 sec</small>
              </div>
              <div className="d-flex">
                <div className="course_outline">Tags:</div>

                <small>Modelling, Rendering, Animation</small>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="3">
        <Card className="mt-2 rounded text-center">
          <AccordionContainer />
        </Card>
      </Col>
    </Row>
  );
};
export default OverView;
