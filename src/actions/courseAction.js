import api from "../services/ApiServices";
import * as courseConstants from "../constants/courseConstants";
import { getErrorMessage } from "../utilities/getErrorMessage";

export const fetchCoursesListData = (courseParams) => async (
  dispatch,
  getState
) => {
  try {
    let url;

    if (courseParams) {
      const { value, searchCourseKey, page } = courseParams;

      url = `/v1/courseByPrice?itemPerPage=${10}&price_from=${
        value[0]
      }&price_to=${value[1]}&page=${page}`;

      if (searchCourseKey !== "") {
        url = `/v1/courseByName?name=${searchCourseKey}&itemPerPage=${10}&page=${page}`;
      }
    } else {
      url = `/v1/course?itemPerPage=${10}`;
    }

    const {
      Courses: { totalPage },
    } = getState();

    dispatch({
      type: courseConstants.COURSESLIST_FETCH_START,
      totalPage: totalPage ? totalPage : "",
    });

    await api.get(url).then((resp) => {
      const courseList = resp.data.data;
      const { total } = resp.data.pagination;
      dispatch({
        type: courseConstants.COURSESLIST_FETCH_SUCCESS,
        payload: courseList,
        totalPage: total,
      });
    });
  } catch (error) {
    dispatch({
      type: courseConstants.COURSESLIST_FETCH_FAIL,
      payload: getErrorMessage(error),
    });
  }
};
