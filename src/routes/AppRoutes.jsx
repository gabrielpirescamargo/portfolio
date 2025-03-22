import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import CourseLandingPage from "../pages/CourseLandingPage";
import CourseDetails from "../pages/CourseDetails";

const AppRoutes = () => (
  <div>
    {/* <UserProfile />  */}
    <Router basename="/">
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/pires-code" element={<CourseLandingPage />}/>
        <Route path="/pires-code/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  </div>
);

export default AppRoutes;
