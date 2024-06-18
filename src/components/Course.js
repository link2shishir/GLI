import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "@material-ui/core/";
import moment from "moment";

const Course = ({ course, heightOfVideo }) => {
  const date1 = new Date(course.start_date);
  const date2 = new Date(course.end_date);

  const dateDifference = date1 - date2;

  const timeDurationOfCourseInHour = moment(dateDifference).format("h");
  const timeDurationOfCourseInMinutes = moment(dateDifference).format("mm");

  return (
    <Card className="course_card mt-4">
      {/* <Link to="course_overview">
        
        <Card.Img
          variant="top"
          src={`http://global.sochware.com/storage/uploads/course/image/${course.image}`}
        />
      </Link> */}

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

      <Card.Body>
        <div className="course_details px-2">
          <div className="text-center">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, modi.
            </div>
            <LinkContainer to="course_overview">
              <Button variant="contained" color="primary" className="mt-2">
                See Info
              </Button>
            </LinkContainer>
          </div>
        </div>
        <div class="clearfix">
          <Card.Text as="div" class="float-left">
            <small>{course.title}</small>
          </Card.Text>
          <Card.Text as="div" class="float-right">
            <small style={{ color: "#ffa62b" }}>
              {timeDurationOfCourseInHour}h {timeDurationOfCourseInMinutes}m
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
      </Card.Body>
    </Card>
  );
};
export default Course;
