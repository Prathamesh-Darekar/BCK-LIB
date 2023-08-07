import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Course } from "./pages/CourseCard";
import { courses } from "./constants.jsx";
import { SemCard } from "./pages/SemCard";
import { SubCard } from "./pages/SubjectCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* show all cources availaible */}
          {courses.map((year, i) => (
            // each course
            <Route
              path={`/${year.title.split(".").join("").toLowerCase()}`}
              key={i}
            >
              {/* course home page */}
              <Route
                path={`/${year.title.split(".").join("").toLowerCase()}`}
                element={<Course course={year.years} />}
              />
              {/* course sems */}
              {year.years.map((sem, i) => (
                <Route key={i}>
                  <Route
                    path={`/${year.title
                      .split(".")
                      .join("")
                      .toLowerCase()}/${sem.title
                      .split(" ")
                      .join("")
                      .toLowerCase()}`}
                    element={<SemCard sem={year.sems} />}
                  />
                  {/* show each subjects */}
                  {year.subs.map((sub, i) => (
                    <Route
                      key={i}
                      path={`/${year.title
                        .split(".")
                        .join("")
                        .toLowerCase()}/${sem.title
                        .split(" ")
                        .join("")
                        .toLowerCase()}/${sub.title
                        .split(".")
                        .join("")
                        .toLowerCase()}`}
                      element={<SubCard sub={sub} />}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
