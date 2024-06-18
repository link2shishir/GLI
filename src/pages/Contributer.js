import { useState } from "react";
import { Form } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";
import FormContainer from "../components/FormContainer";
import { Button } from "@material-ui/core/";

const Contributer = () => {
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
    <FormContainer>
      <p>Get paid! sharing your knowledge</p>
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
        >
          Become A Contributer
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Contributer;
