/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export const SubCard = ({ sub }) => {
  const navigate = useNavigate();
  return (
    <div id="sem-card-container">
      {sub.map((el, i) => (
        <div
          className="sem-cards sub-card"
          key={i}
          onClick={() => {
            navigate(el.title.replace("/", "_").toLowerCase());
          }}
        >
          <a href="#" className="sem-link">
            {el.title.slice(0, 1).toUpperCase() + el.title.slice(1)}
          </a>
        </div>
      ))}
    </div>
  );
};
