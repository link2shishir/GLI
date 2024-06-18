import { useState, useEffect } from "react";
import Container from "../components/Container";
import {
  Row,
  Col,
  Image,
  Form,
  InputGroup,
  FormControl,
  ListGroup,
  Jumbotron,
} from "react-bootstrap";
import ComponentWrapper from "../utils/ComponentWrapper";
import { LinkContainer } from "react-router-bootstrap";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import Pagination from "../components/Pagination";
import RangeSlide from "../components/RangeSlider";
import {
  Button,
  Select,
  FormControl as MUIFormController,
  MenuItem,
  makeStyles,
  InputLabel,
} from "@material-ui/core/";
import courses_svg from "../assets/systemAssests/courses.png";
import FetchError from "../components/Message/errorMessage";
import { fetchCoursesListData } from "../actions/courseAction";
import Loader from "../components/Loader";
import LoaderContainer from "../components/LoaderContainer";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    top: -24,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Courses = () => {
  const classes = useStyles();
  const [viewType, setViewType] = useState("GridView");
  const [value, setValue] = useState([100, 500]);
  const [page, setPage] = useState(1);
  //const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchCourseKey, setSearchCourseKey] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  const { courses, error, loading, totalPage } = useSelector(
    (state) => state.Courses
  );
  const { checkIfCoursesComponentMount } = useSelector(
    (state) => state.isCoursesComponentMount
  );

  useEffect(() => {
    if (!checkIfCoursesComponentMount) {
      dispatch({ type: "COURSESCOMPONENTMOUNT" });
    }

    fetchData();

    return () => {
      dispatch({ type: "COURSESCOMPONENTUNMOUNT" });
    };
    // eslint-disable-next-line
  }, [dispatch, page]);

  const fetchData = () => {
    dispatch(fetchCoursesListData({ value, searchCourseKey, page }));
  };

  const fetchCourseByRange = () => {
    fetchData();
  };

  const searchForCoursesHandler = (e) => {
    e.preventDefault();

    fetchData();
  };

  const viewTypeComponent =
    viewType === "GridView" ? (
      <GridView courses={courses} />
    ) : viewType === "ListView" ? (
      <ListView courses={courses} />
    ) : (
      ""
    );

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  const courseListSearchbar = () => {
    return (
      <Container>
        <Form
          className="search_bar_for_courses my-5"
          onSubmit={searchForCoursesHandler}
        >
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fas fa-search"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search courses..."
              onChange={(e) => setSearchCourseKey(e.target.value)}
            />
          </InputGroup>
        </Form>
      </Container>
    );
  };

  const courseList = () => {
    return (
      <Container className="my-5">
        <Row>
          <Col md="9">
            <div className="clearfix">
              <div className="float-left">
                <small>Showing 1-9 of results</small>
                <small className="ml-5">Show 6 12 16</small>
              </div>
              <div className="float-right">
                <span>
                  <i
                    className={[
                      "fas fa-border-all",
                      viewType === "GridView" ? "activeViewType" : "",
                    ].join(" ")}
                    onClick={() => setViewType("GridView")}
                    style={{
                      cursor: "pointer",
                      fontSize: "26px",
                      marginRight: "20px",
                    }}
                  ></i>
                  <i
                    className={[
                      "fas fa-list",
                      viewType === "ListView" ? "activeViewType" : "",
                    ].join(" ")}
                    onClick={() => setViewType("ListView")}
                    style={{
                      cursor: "pointer",
                      fontSize: "26px",
                    }}
                  ></i>
                </span>

                <MUIFormController
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Filter
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    //onChange={(e) => setCategory(e.target.value)}
                    label="Filter"
                  >
                    <MenuItem>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Designs">Designs</MenuItem>
                    <MenuItem value="ML">ML</MenuItem>
                    <MenuItem value="Web Development">Web Development</MenuItem>
                  </Select>
                </MUIFormController>
                <MUIFormController
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Sort by
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    //onChange={(e) => setCategory(e.target.value)}
                    label="Sortby"
                  >
                    <MenuItem>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Name">Name</MenuItem>
                    <MenuItem value="Rating">Rating</MenuItem>
                    <MenuItem value="Views">Views</MenuItem>
                    <MenuItem value="Prices">Prices</MenuItem>
                  </Select>
                </MUIFormController>
              </div>
            </div>
            <h4>Designs</h4>
            {loading ? (
              <Loader />
            ) : error ? (
              <FetchError header="Fetch Error" message={error} />
            ) : courses.length > 0 ? (
              viewTypeComponent
            ) : (
              <LoaderContainer>
                <div className="text-center">
                  <p>No course found</p>
                </div>
              </LoaderContainer>
            )}

            <div className="my-5 mx-auto">
              <Pagination
                totalPage={totalPage}
                handlePageClick={handlePageClick}
              />
            </div>
          </Col>
          <Col md="3">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>All Courses</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Web Development(2008)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Designs(11293)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Photography(2230)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>3d Artist(2230)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Motion Graphics(2230)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Software Engineer(2230)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>UI/UX RoadMap(2230)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Sound & Music(2230)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Digital Marketing(2230)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Course Type</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="paid_decription">
                  <LinkContainer to="/paid_courses">
                    <div>
                      <small>Paid</small>
                    </div>
                  </LinkContainer>
                  <LinkContainer to="unpaid_courses">
                    <div>
                      <small>UnPaid</small>
                    </div>
                  </LinkContainer>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Price</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <RangeSlide
                  handleChange={handleChange}
                  value={value}
                  fetchCourseByRange={fetchCourseByRange}
                />
                <small>Price $100-$500</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="contained" color="primary" fullWidth>
                  Filter
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <ComponentWrapper>
      <Jumbotron fluid className="jumbotron_container">
        <Container>
          <Row>
            <Col md="6">
              <div className="courses_details">
                <h2>
                  Browse Thousands of Our Video{" "}
                  <span style={{ color: "#ffa62b" }}>Tutorials Curated</span>{" "}
                  Only for you
                </h2>
                <div className="mt-5">
                  <small style={{ color: "#fafcff" }}>
                    Access all tutorials and resources.
                  </small>
                </div>
              </div>
            </Col>
            <Col md="6">
              <Image src={courses_svg} alt="Courses_Svg" fluid />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      {courseListSearchbar()}
      {courseList()}
    </ComponentWrapper>
  );
};

export default Courses;
