import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Toast } from "react-bootstrap";

const ErrorMessage = ({ header, message, reset, domNodeRef }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const action = () => {
    setShow(false);
    if (reset) {
      dispatch({ type: reset });
    }
  };

  return (
    <>
      <div
        ref={domNodeRef}
        style={{ position: "fixed", right: "0", zIndex: "20180210" }}
      >
        <Toast onClose={action} show={show} delay={3000} autohide>
          <Toast.Header
            style={{ background: "red", color: "white", fontWeight: "bold" }}
          >
            <strong className="mr-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default ErrorMessage;
