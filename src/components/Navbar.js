import {
  Navbar,
  Nav,
  Container,
  Form,
  InputGroup,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Button } from "@material-ui/core/";
import Logo from "../assets/systemAssests/logo.png";
import { useSelector } from "react-redux";

const NavbarContainer = () => {
  const checkIfCoursesComponentMount = useSelector(
    (state) => state.isCoursesComponentMount
  );
  const userAuthData = useSelector((state) => state.auth);

  const { isCoursesComponentMount } = checkIfCoursesComponentMount;
  const { userInfo } = userAuthData;

  return (
    <header>
      <Navbar variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                className="d-inline-block align-top"
                alt="GlobalLearning"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={isCoursesComponentMount ? "mr-auto" : "mx-auto"}>
              <IndexLinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </IndexLinkContainer>
              <IndexLinkContainer to="/courses">
                <Nav.Link>Courses</Nav.Link>
              </IndexLinkContainer>
              <IndexLinkContainer to="/services">
                <Nav.Link>Teachers</Nav.Link>
              </IndexLinkContainer>
              <IndexLinkContainer to="/partner">
                <Nav.Link>Partners</Nav.Link>
              </IndexLinkContainer>
              <IndexLinkContainer to="/profile">
                <Nav.Link>My Account</Nav.Link>
              </IndexLinkContainer>
            </Nav>
            {isCoursesComponentMount ? (
              <Form inline>
                <InputGroup className="shadow">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{
                        borderTopLeftRadius: "9px",
                        borderBottomLeftRadius: "9px",
                      }}
                    >
                      <i class="fas fa-search"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl placeholder="Search courses..." />
                  <InputGroup.Append>
                    <InputGroup.Text
                      style={{
                        backgroundColor: "#ffa62b",
                        borderTopRightRadius: "9px",
                        borderBottomRightRadius: "9px",
                        color: "#fafcff",
                      }}
                    >
                      <i class="fas fa-arrow-right"></i>
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            ) : (
              ""
            )}

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/user_courses">
                  <NavDropdown.Item>My Courses</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="sign_in">
                  <Button variant="contained" className="mx-3" color="primary">
                    Enroll
                  </Button>
                </LinkContainer>
                <LinkContainer to="sign_up">
                  <Button variant="contained" color="primary">
                    Register
                  </Button>
                </LinkContainer>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarContainer;
