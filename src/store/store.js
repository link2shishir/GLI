import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { coursesComponentMount } from "../reducers/CheckComponentMount";
import { signUp, sigIn } from "../reducers/userReducer";
import { listCourses } from "../reducers/courseReducer";

const rootReducer = combineReducers({
  isCoursesComponentMount: coursesComponentMount,
  signUp: signUp,
  auth: sigIn,
  Courses: listCourses,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  auth: { userInfo: userInfoFromStorage },
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
