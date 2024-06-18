const ErrorMessage = ({ children }) => {
  return (
    <div className="clearfix">
      <div className="float-left">
        <small style={{ color: "#ffa62b" }}>{children}</small>
      </div>
      <div className="float-right">
        <small style={{ color: "#ffa62b", fontSize: "16px" }}>*</small>
      </div>
    </div>
  );
};

export default ErrorMessage;
