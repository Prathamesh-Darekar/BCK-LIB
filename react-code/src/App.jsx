import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Course } from "./pages/CourseCard.jsx"; // card which renders cources
import { allCoursesWD } from "./constants.jsx"; // allCourcesWithDetails
import { SemCard } from "./pages/SemCard"; // card which renders sems
import { SubCard } from "./pages/SubjectCard"; // card which renders subjects
import Err from "./pages/Err";
import PDFs from "./components/PDFs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Err />} />
          {allCoursesWD.map((course, i1) => (
            <Route path={`/${course.title.toLowerCase()}`} key={i1}>
              <Route
                path={`/${course.title.toLowerCase()}`}
                element={<Course course={course.years} />}
              />
              {course.years.map((year, i) => (
                <Route
                  key={i}
                  path={`/${course.title.toLowerCase()}/${year.title
                    .split(" ")
                    .join("")
                    .toLowerCase()}`}
                >
                  <Route
                    path={`/${course.title.toLowerCase()}/${year.title
                      .split(" ")
                      .join("")
                      .toLowerCase()}`}
                    element={<SemCard sem={year.sems} />}
                  />
                  {year.sems.map((sem, j) => {
                    return (
                      <Route
                        key={j}
                        path={`/${course.title.toLowerCase()}/${year.title
                          .split(" ")
                          .join("")
                          .toLowerCase()}/${sem.title
                          .split(" ")
                          .join("")
                          .toLowerCase()}`}
                      >
                        <Route
                          path={`/${course.title.toLowerCase()}/${year.title
                            .split(" ")
                            .join("")
                            .toLowerCase()}/${sem.title
                            .split(" ")
                            .join("")
                            .toLowerCase()}`}
                          element={<SubCard sub={sem.subs} />}
                        />
                        {sem.subs.map((sub, i) => (
                          <Route
                            key={i}
                            path={`/${course.title.toLowerCase()}/${year.title
                              .split(" ")
                              .join("")
                              .toLowerCase()}/${sem.title
                              .split(" ")
                              .join("")
                              .toLowerCase()}/${sub.title
                              .replace("/", "_")
                              .toLowerCase()}`}
                            element={<PDFs links={sub.links} />}
                          />
                        ))}
                      </Route>
                    );
                  })}
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
/*
{el.sems.map((sem, j) => {
                    return (
                      <Route
                        key={j}
                        path={`/bca/${el.title
                          .split(" ")
                          .join("")
                          .toLowerCase()}/${sem.title.split(" ").join("").toLowerCase()}`}
                        element={<SubCard subs={sem.subs} />}
                      />
                    );
                  })}
*/
