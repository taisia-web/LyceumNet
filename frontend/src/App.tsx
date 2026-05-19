import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Calendar from "./pages/Calendar";
import Courses from "./pages/Courses";
import Groups from "./pages/Groups";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/feed.css";
import "./styles/auth.css";
import "./styles/profile.css";
import "./styles/friends.css";
import "./styles/calendar.css";
import "./styles/course.css";

function App() {
  const user =
    localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <>
            <Route
              path="/"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <Navigate to="/feed" />
              }
            />

            <Route
              path="/feed"
              element={<Feed />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/friends"
              element={<Friends />}
            />

            <Route
              path="/calendar"
              element={<Calendar />}
            />

            <Route
              path="/courses"
              element={<Courses />}
            />

            <Route
              path="/groups"
              element={<Groups />}
            />

            <Route
              path="*"
              element={
                <Navigate to="/feed" />
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;