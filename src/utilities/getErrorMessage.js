export const getErrorMessage = (error) => {
  let errorMessage = "Internal Server Error";
  try {
    if (error.response && error.response.data) {
      if (error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.response.data.error) {
        errorMessage = error.response.data.error;
      }
    } else {
      errorMessage = error.message;
    }
  } catch (e) {
    console.error("Error Getting Data", e);
  }
  return errorMessage;
};
