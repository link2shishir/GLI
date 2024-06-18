export const coursesComponentMount = (
  state = { isCoursesComponentMount: false },
  action
) => {
  switch (action.type) {
    case "COURSESCOMPONENTMOUNT":
      return {
        isCoursesComponentMount: true,
      };
    case "COURSESCOMPONENTUNMOUNT":
      return {
        isCoursesComponentMount: false,
      };

    default:
      return state;
  }
};
