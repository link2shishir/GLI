import { Card } from "react-bootstrap";
import instructor from "../assets/systemAssests/instructor.jpg";
const Instructor = () => {
  return (
    <Card>
      <Card.Img variant="top" src={instructor} />
      <Card.Body
        style={{
          backgroundColor: "#7889ef",
          color: "#fafcff",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Card.Title>Ruby Garcol</Card.Title>
        <Card.Text as="div">
          <small style={{ color: "#fafcff" }}>
            <span class="float-right" style={{ color: "#eec213" }}>
              4.95
            </span>
            Animator
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Instructor;
