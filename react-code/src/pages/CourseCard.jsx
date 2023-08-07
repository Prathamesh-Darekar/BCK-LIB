/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export const Course = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div id="card-container">
      {course.map((el, i) => (
        <div
          className="year-cards"
          key={i}
          onClick={() => {
            navigate(el.title.split(" ").join("").toLowerCase());
          }}
        >
          <img className="year-image" src={el.img} alt="img" />
          <a href="#" className="year-link">
            {el.title}
          </a>
        </div>
      ))}
    </div>
  );
};
