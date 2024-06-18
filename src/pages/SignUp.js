import { useState, useEffect, createRef } from "react";
import { Form } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";
import FormContainer from "../components/FormContainer";
import { signUp } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import SignUpSuccessMessage from "../components/Message/successMessage";
import { Button, CircularProgress, makeStyles } from "@material-ui/core/";
import SignUpErrorMessage from "../components/Message/errorMessage";
import * as userConstants from "../constants/userConstants";

const useStyles = makeStyles((theme) => ({
  prgressColor: {
    color: "#fff",
  },
}));

const SignUp = ({ history }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameErrorMessage, setFullNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [countryErrorMessage, setCountryErrorMessage] = useState("");
  const [stateErrorMessage, setStateErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const classes = useStyles();

  const registerInfo = useSelector((state) => state.signUp);

  const { loading, success, error, message } = registerInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        history.push("/sign_in");
      }, 5000);
    }
  }, [success, history]);

  const domNodeRef = createRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (fullName === "") {
      setFullNameErrorMessage("Required");
    } else {
      setFullNameErrorMessage("");
    }

    if (email === "") {
      setEmailErrorMessage("Required");
    } else {
      setEmailErrorMessage("");
    }
    if (country === "") {
      setCountryErrorMessage("Required");
    } else {
      setCountryErrorMessage("");
    }
    if (state === "") {
      setStateErrorMessage("Required");
    } else {
      setStateErrorMessage("");
    }
    if (password === "") {
      setPasswordErrorMessage("Required");
    } else {
      setPasswordErrorMessage("");
    }

    if (
      fullName === "" ||
      email === "" ||
      state === "" ||
      country === "" ||
      password === ""
    ) {
      return;
    }

    const signUpData = {
      name: fullName,
      email,
      password,
      password_confirmation: password,
    };
    dispatch(signUp(signUpData));
  };

  const fullnameClasses = [
    "shadow",
    fullNameErrorMessage !== "" ? "validationError" : "",
  ].join(" ");
  const emailClasses = [
    "shadow",
    emailErrorMessage !== "" ? "validationError" : "",
  ].join(" ");
  const countryClasses = [
    "shadow",
    countryErrorMessage !== "" ? "validationError" : "",
  ].join(" ");
  const stateClasses = [
    "shadow",
    stateErrorMessage !== "" ? "validationError" : "",
  ].join(" ");
  const passwordClasses = [
    "shadow",
    passwordErrorMessage !== "" ? "validationError" : "",
  ].join(" ");

  return (
    <>
      {error && (
        <SignUpErrorMessage
          header="Auth Error"
          message={error}
          reset={userConstants.SIGNUP_RESET}
          domNodeRef={domNodeRef}
        />
      )}
      {success && (
        <SignUpSuccessMessage
          header="Register SuccessFully"
          message={message}
          reset={userConstants.SIGNUP_RESET}
          domNodeRef={domNodeRef}
        />
      )}
      <FormContainer>
        <p>Please create a new account here</p>
        <Form className="mt-5" onSubmit={submitHandler}>
          <Form.Group controlId="FullName">
            {fullNameErrorMessage !== "" ? (
              <ErrorMessage>{fullNameErrorMessage}</ErrorMessage>
            ) : (
              ""
            )}

            <Form.Control
              type="text"
              placeholder="Full Name"
              className={fullnameClasses}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="Email">
            {emailErrorMessage !== "" ? (
              <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            ) : (
              ""
            )}
            <Form.Control
              type="email"
              placeholder="Email"
              className={emailClasses}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="Country">
            {countryErrorMessage !== "" ? (
              <ErrorMessage>{countryErrorMessage}</ErrorMessage>
            ) : (
              ""
            )}
            <Form.Control
              type="text"
              placeholder="Country"
              className={countryClasses}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="State">
            {stateErrorMessage !== "" ? (
              <ErrorMessage>{stateErrorMessage}</ErrorMessage>
            ) : (
              ""
            )}
            <Form.Control
              type="text"
              placeholder="State"
              className={stateClasses}
              value={state}
              onChange={(e) => setState(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="Password">
            {passwordErrorMessage !== "" ? (
              <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
            ) : (
              ""
            )}
            <Form.Control
              type="password"
              placeholder="Password"
              className={passwordClasses}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4"
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                color="inherit"
                className={classes.prgressColor}
              />
            ) : (
              <>Sign Up</>
            )}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default SignUp;
