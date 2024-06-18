import * as courseConstants from "../constants/courseConstants";

export const listCourses = (state = { courses: [] }, action) => {
  switch (action.type) {
    case courseConstants.COURSESLIST_FETCH_START:
      return {
        loading: true,
        courses: [],
        totalPage: action.totalPage,
      };
    case courseConstants.COURSESLIST_FETCH_SUCCESS:
      return {
        courses: action.payload,
        success: true,
        totalPage: action.totalPage,
      };
    case courseConstants.COURSESLIST_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
