import { useState, useEffect } from "react";
import Container from "../components/Container";
import OverView from "../components/Overview";
import ExerciesFiles from "../components/ExerciesFiles";
import SimilarCourses from "../components/Course";
import Files from "../components/Files";
import PopoverContainer from "../components/PopoverContainer";
import { Row, Col, Image, Jumbotron, Card } from "react-bootstrap";
import { Button } from "@material-ui/core/";
import { LinkContainer } from "react-router-bootstrap";
import ComponentWrapper from "../utils/ComponentWrapper";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import FetchError from "../components/Message/errorMessage";
import { fetchCoursesListData } from "../actions/courseAction";

import { useDispatch, useSelector } from "react-redux";

import course_overview from "../assets/systemAssests/course_overview.png";

const Course = () => {
  const [activeTab, setActiveTab] = useState("1");

  const dispatch = useDispatch();

  const { courses, error } = useSelector((state) => state.Courses);

  useEffect(() => {
    dispatch({ type: "COURSESCOMPONENTMOUNT" });

    const fetchData = () => {
      dispatch(fetchCoursesListData());
    };

    fetchData();

    return () => {
      dispatch({ type: "COURSESCOMPONENTUNMOUNT" });
    };
  }, [dispatch]);

  const handleTabs = (e) => {
    const { id } = e.target;
    setActiveTab(id);
    document
      .getElementsByClassName("activeTab")[0]
      .classList.remove("activeTab");
    document.getElementById(id).classList.add("activeTab");
  };

  const introVideo = () => {
    return (
      <div className="mt-4 introCourse_Video">
        <iframe
          title="Instruction Video"
          src="https://www.youtube.com/embed/6PY8dMZah48"
        ></iframe>
      </div>
    );
  };
  const courseDetails = () => {
    return (
      <div className="py-2 px-3">
        <div class="clearfix">
          <div class="float-left">
            <small>Graphic Design</small>
          </div>
          <div class="float-right">
            <small style={{ color: "#ffa62b" }}>8h 17min</small>
          </div>
        </div>
        <h5 className="my-3">How to Become Great Graphic Designer in 7 days</h5>

        <div>
          <small>
            <Rating value={4} text="(15,20)" />
          </small>
        </div>
        <div>
          <small>2,526,47 Views</small>
        </div>
      </div>
    );
  };

  const courseIntroduction = () => {
    return (
      <Container>
        <div className="my-5">
          <div className="clearfix">
            <div className="float-left">
              <Link exact={true} to="courses">
                <small style={{ color: "#ffa62b" }}>
                  <i className="fas fa-arrow-left"></i> courses
                </small>
              </Link>
            </div>
            <div className="float-right">
              <small style={{ color: "#ffa62b" }}>
                The art Of Growing Relationship
              </small>
              <PopoverContainer />
            </div>
          </div>
          {introVideo()}
          {courseDetails()}
        </div>
      </Container>
    );
  };

  const tabs = () => {
    return (
      <div className="my-5 tabs">
        <Container>
          <ul className="list">
            <li
              className="list-item activeTab"
              id="1"
              onClick={(e) => handleTabs(e)}
            >
              OverView
            </li>
            <li className="list-item" id="2" onClick={(e) => handleTabs(e)}>
              Exercise Files
            </li>
            <li className="list-item" id="3" onClick={(e) => handleTabs(e)}>
              Files
            </li>
          </ul>
        </Container>
      </div>
    );
  };

  const tabsContent = () => {
    let x = "";
    switch (activeTab) {
      case "1":
        x = <OverView />;
        break;
      case "2":
        x = <ExerciesFiles />;
        break;

      default:
        x = <Files />;
        break;
    }
    return x;
  };

  const courseInstructorIntro = () => {
    return <div className="my-5">{tabsContent()}</div>;
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
            {courses.map((data, index) => {
              return (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <SimilarCourses course={data} heightOfVideo="253px" />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  };

  const addToCartSection = () => {
    return (
      <div className="my-5 cart_section">
        <Card>
          <Card.Body>
            <Card.Text>
              You can either enroll for this course to gain access and also to
              the materials been attached to it online only or you can add to
              cart for checkout to view offline
            </Card.Text>
            <Card.Text as="div">
              <Button variant="contained" color="primary">
                Add to cart
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };
  return error ? (
    <FetchError header="Fetch Error" message={error} />
  ) : (
    <ComponentWrapper>
      <Jumbotron fluid className="jumbotron_container">
        <Container>
          <Row>
            <Col md="6">
              <div className="course_overview">
                <p>
                  You can either enroll for this course to gain access and also
                  to the materials been attached to it online only or you can
                  add to cart for further processing.
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
      {courseIntroduction()}
      {tabs()}
      <Container>
        {courseInstructorIntro()}
        {addToCartSection()}
        {similarCourses()}
      </Container>
    </ComponentWrapper>
  );
};

export default Course;
