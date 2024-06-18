import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contributer from "./pages/Contributer";
import Course from "./pages/Course";
import Cart from "./pages/Cart";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/courses" component={Courses} />
        <Route exact={true} path="/course_overview" component={Course} />
        <Route exact={true} path="/sign_in" component={SignIn} />
        <Route exact={true} path="/sign_up" component={SignUp} />
        <Route exact={true} path="/partner" component={Contributer} />
        <Route exact={true} path="/cart" component={Cart} />
        <Route exact={true} path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
