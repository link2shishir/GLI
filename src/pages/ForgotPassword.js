import { useState } from "react";
import { Form } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";
import FormContainer from "../components/FormContainer";
import { Button } from "@material-ui/core/";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailErrorMessage("Required");
    } else {
      setEmailErrorMessage("");
    }
  };

  const emailClasses = [
    "shadow",
    emailErrorMessage !== "" ? "validationError" : "",
  ].join(" ");

  return (
    <FormContainer>
      <p>Forgot Password? Let's find your account</p>
      <Form className="mt-5" onSubmit={submitHandler}>
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

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-4"
          fullWidth
        >
          Proceed
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ForgotPassword;
