import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserProfile />} />
    </Routes>
  </Router>
);

export default AppRoutes;
