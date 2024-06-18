import { Row, Col } from "react-bootstrap";
import Course from "./Course";

const GridView = ({ courses }) => {
  return (
    <Row>
      {courses.map((data, index) => {
        return (
          <Col key={index} sm={12} md={6} lg={3} xl={4}>
            <Course course={data} heightOfVideo="253px" />
          </Col>
        );
      })}
    </Row>
  );
};
export default GridView;
