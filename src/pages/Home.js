import { useEffect } from "react";

import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Image,
  Card,
  Form,
  Jumbotron,
} from "react-bootstrap";
import ComponentWrapper from "../utils/ComponentWrapper";

import Container from "../components/Container";
import { LinkContainer } from "react-router-bootstrap";
import Course from "../components/Course";
import Instructor from "../components/Instructor";
import { Container as MUIContainer, Button } from "@material-ui/core/";
import Person from "../assets/systemAssests/person.png";
import business from "../assets/systemAssests/business.png";
import design from "../assets/systemAssests/design.png";
import development from "../assets/systemAssests/development.png";
import language from "../assets/systemAssests/language.png";
import gaming from "../assets/systemAssests/gaming.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesListData } from "../actions/courseAction";
import FetchError from "../components/Message/errorMessage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  const dispatch = useDispatch();

  const { courses, error } = useSelector((state) => state.Courses);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchCoursesListData());
    };

    fetchData();
    // eslint-disable-next-line
  }, [dispatch]);

  const CourseCategories = () => {
    return (
      <MUIContainer maxWidth="md">
        <div className="course_categories my-5">
          <div className="box">
            <Image src={business} alt="business" className="mb-2" />{" "}
            <p>Business</p>
          </div>
          <div className="box">
            <Image src={design} alt="design" className="mb-2" /> <p>Design</p>
          </div>
          <div className="box">
            <Image src={development} alt="developement" className="mb-2" />{" "}
            <p>Developement</p>
          </div>
          <div className="box">
            <Image src={language} alt="language" className="mb-2" />{" "}
            <p>Language</p>
          </div>
          <div className="box">
            <Image src={gaming} alt="gaming" className="mb-2" /> <p>Gaming</p>
          </div>
          <LinkContainer to="view_order">
            <div className="box">
              <i
                class="fas fa-plus"
                style={{
                  fontSize: "29px",
                  marginTop: "21px",
                }}
              ></i>
              View Order
            </div>
          </LinkContainer>
        </div>
      </MUIContainer>
    );
  };

  const achivements = () => {
    return (
      <div className="achivements my-5">
        <MUIContainer maxWidth="md">
          <div className="text-center">
            <h2>Our Achievements</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dolor inventore quia vitae voluptatum quaerat iste facilis
              exercitationem veniam voluptatibus.
            </p>
          </div>
          <Row className="mt-5 text-center">
            <Col md="3">
              <div className="my-4">
                <h3>
                  <span style={{ color: "#7889ef" }}>2400+</span>
                </h3>
                <p>Online Course</p>
              </div>
            </Col>
            <Col md="3">
              <div className="my-4">
                <h3>
                  <span style={{ color: "#2ecc72" }}>99,854+</span>
                </h3>
                <p>Enroll Student</p>
              </div>
            </Col>
            <Col md="3">
              <div className="my-4">
                {" "}
                <h3>
                  <span style={{ color: "#ffa62b" }}>650+</span>
                </h3>
                <p>Expert Instructor</p>
              </div>
            </Col>
            <Col md="3">
              <div className="my-4">
                <h3>
                  <span style={{ color: "#E44236" }}>1820+</span>
                </h3>
                <p>Profile Reviews</p>
              </div>
            </Col>
          </Row>
        </MUIContainer>
      </div>
    );
  };

  const companyInstruction = () => {
    return (
      <MUIContainer maxWidth="sm">
        <div className="my-5">
          <Card className="my-3 p-3">
            <Card.Body>
              <iframe
                title="Instruction Video"
                height="315"
                src="https://www.youtube.com/embed/6PY8dMZah48"
                className="video_content"
              ></iframe>
            </Card.Body>
          </Card>
        </div>
      </MUIContainer>
    );
  };

  const feedback = () => {
    return (
      <MUIContainer maxWidth="md">
        <div className="my-5">
          <div class="clearfix mb-3">
            <span class="float-left">
              <h2>
                <span className="font-weight-lighter">Enroll Student's </span>
                Feedback
              </h2>
            </span>
            <span class="float-right">
              <Button variant="outlined" color="primary">
                View More
              </Button>
            </span>
          </div>
          <Row>
            <Col md="6">
              <Card className="mt-2 p-3  text-center">
                <Card.Body>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Porro commodi saepe at illo? Corrupti ipsum, voluptas eum
                    architecto iusto ex.
                  </Card.Text>
                  <div className="mt-5">
                    <Image className="mb-2" src={gaming} alt="Amanda Jackson" />
                    <Card.Title>Amanda Jackson</Card.Title>
                    <Card.Text as="div">
                      <small>CEO, NGO Group</small>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="mt-2 p-3 text-center">
                <Card.Body>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Porro commodi saepe at illo? Corrupti ipsum, voluptas eum
                    architecto iusto ex.
                  </Card.Text>
                  <div className="mt-5">
                    <Image className="mb-2" src={gaming} alt="Amanda Jackson" />
                    <Card.Title>Amanda Jackson</Card.Title>
                    <Card.Text as="div">
                      <small>CEO, NGO Group</small>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </MUIContainer>
    );
  };

  const instructorInfo = () => {
    return (
      <Container>
        <div className="my-5 ins_slider">
          <h2 className="mb-3">
            <span className="font-weight-lighter">Top Rated </span>
            Instructor
          </h2>
          <Slider {...settings}>
            {Array(8)
              .fill()
              .map((data, index) => {
                return (
                  <Col key={index}>
                    <Instructor />
                  </Col>
                );
              })}
          </Slider>
        </div>
      </Container>
    );
  };

  const coursesInfo = () => {
    return (
      <Container>
        <div className="my-5 course_slider">
          <div class="clearfix mb-4">
            <span class="float-left">
              <h2>
                <span className="font-weight-lighter">Recommended </span>
                Courses
              </h2>
            </span>
            <span class="float-right">
              <LinkContainer to="course_overview">
                <Button variant="contained" color="primary">
                  Browse Course
                </Button>
              </LinkContainer>
            </span>
          </div>
          <Slider {...settings}>
            {courses.map((data, index) => {
              return (
                <Col key={index}>
                  <Course course={data} heightOfVideo="246px" />
                </Col>
              );
            })}
          </Slider>
        </div>
      </Container>
    );
  };

  return (
    <ComponentWrapper>
      {error ? (
        <FetchError header="Fetch Error" message={error} />
      ) : (
        <>
          <Jumbotron fluid>
            <Container>
              <Row>
                <Col md="6">
                  <div className="front_overview">
                    <h1>
                      <span className="text_color">Learn Something</span>{" "}
                      <span className="text_color2">New</span>
                    </h1>
                    <h2>
                      <span className="text_color">Anyday.</span>
                      <span className="text_color2">Anywhere.</span>
                      <span className="text_color">Anytime.</span>
                    </h2>
                  </div>

                  <Form>
                    <InputGroup className="seacrh_bar shadow">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <i class="fas fa-search"></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl placeholder="Search courses..." />
                      <InputGroup.Append>
                        <InputGroup.Text>
                          <i class="fas fa-arrow-right"></i>
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form>
                  <p>Do you have course for virtual traning. Join Us</p>
                </Col>
                <Col md="6" className="text-center">
                  <Image src={Person} alt="Person" fluid />
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          {CourseCategories()}
          {coursesInfo()}
          {achivements()}
          {companyInstruction()}
          {instructorInfo()}
          {feedback()}
        </>
      )}
    </ComponentWrapper>
  );
};

export default Home;
