import { useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SuccessMessage = ({ header, message, reset, domNodeRef }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <div
        ref={domNodeRef}
        style={{ position: "fixed", right: "0", zIndex: "20180210" }}
      >
        <Toast
          onClose={() => {
            setShow(false);
            dispatch({ type: reset });
          }}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Header
            style={{
              background: "#43BE31",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <strong className="mr-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default SuccessMessage;
