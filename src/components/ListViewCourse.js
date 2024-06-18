import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Button } from "@material-ui/core/";
import moment from "moment";

const ListViewCourse = ({ course, heightOfVideo }) => {
  const date1 = new Date(course.start_date);
  const date2 = new Date(course.end_date);

  const dateDifference = date1 - date2;

  const timeDurationOfCourse = moment(dateDifference).format("h mm");

  return (
    <Card className="mt-4">
      <Row>
        <Col md="5">
          <Link to="course_overview">
            {/* <Card.Img
              variant="top"
              src={`http://global.sochware.com/storage/uploads/course/image/${course.image}`}
              style={{
                borderBottomLeftRadius: "10px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "0px",
              }}
            /> */}
          </Link>
          <video
            controls
            poster={`http://global.sochware.com/storage/uploads/course/image/${course.image}`}
            style={{
              height: heightOfVideo,
            }}
          >
            <source
              src={`http://global.sochware.com/storage/uploads/course/video/${course.video}`}
              type="video/mp4"
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </Col>
        <Col md="7">
          <Card.Body>
            <Row>
              <Col md="8">
                <div className="course_dec">
                  <div class="clearfix">
                    <Card.Text as="div" class="float-left">
                      <small>Graphic Design</small>
                    </Card.Text>
                    <Card.Text as="div" class="float-right">
                      <small style={{ color: "#eec213" }}>
                        {timeDurationOfCourse}
                      </small>
                    </Card.Text>
                  </div>
                  <Link to="course_overview">
                    <Card.Title className="my-3">{course.title}</Card.Title>
                  </Link>
                  <Card.Text as="div">
                    <small>
                      <Rating value={4} text="(15,20)" />
                    </small>
                  </Card.Text>
                  <Card.Text as="div">
                    <small>2,526,47 Views</small>
                  </Card.Text>
                </div>
              </Col>
              <Col md="4">
                <div className="my-4">
                  <Button variant="contained" color="primary">
                    Enroll
                  </Button>
                </div>
                <Button
                  variant="outlined"
                  style={{
                    color: "#f3b431",
                    border: "1px solid #f3b431",
                  }}
                  color="primary"
                >
                  Enquire
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ListViewCourse;
