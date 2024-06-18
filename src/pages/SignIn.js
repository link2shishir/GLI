import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";
import FormContainer from "../components/FormContainer";
import { signIn } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress, makeStyles } from "@material-ui/core/";
import SignInErrorMessage from "../components/Message/errorMessage";
import * as userConstants from "../constants/userConstants";

const useStyles = makeStyles((theme) => ({
  prgressColor: {
    color: "#fff",
  },
}));

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const classes = useStyles();

  const { loading, error, userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmitting(true);

    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      const signInData = {
        email,
        password,
      };
      dispatch(signIn(signInData));
    }
  };

  //form validation handler
  const validate = () => {
    let errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
      errors.email = "Required";
    } else if (!regex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (password === "") {
      errors.password = "Required";
    }

    return errors;
  };

  const emailClasses = ["shadow", formErrors.email && "validationError"].join(
    " "
  );

  const passwordClasses = [
    "shadow",
    formErrors.password && "validationError",
  ].join(" ");

  return (
    <>
      {error && (
        <SignInErrorMessage
          header="Auth Error"
          message={error}
          reset={userConstants.SIGNIN_RESET}
        />
      )}
      <FormContainer>
        <p>Sign in to your account to</p>
        <Form className="mt-5" onSubmit={submitHandler}>
          <Form.Group controlId="Email">
            {formErrors.email && (
              <ErrorMessage>{formErrors.email}</ErrorMessage>
            )}
            <Form.Control
              type="email"
              placeholder="Email"
              className={emailClasses}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="Password">
            {formErrors.password && (
              <ErrorMessage>{formErrors.password}</ErrorMessage>
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
            {loading ? (
              <CircularProgress
                color="inherit"
                className={classes.prgressColor}
              />
            ) : (
              <>Sign In</>
            )}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default SignIn;
