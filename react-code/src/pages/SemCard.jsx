import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const SemCard = ({ sem }) => {
  const navigate = useNavigate();
  return (
    <div id="sem-card-container">
      {sem.map((el, i) => (
        <div
          className="sem-cards"
          key={i}
          onClick={() => {
            console.log(el.title.split(" ").join(""));
            navigate(el.title.split(" ").join("").toLowerCase());
          }}
        >
          <a href="#" className="sem-link">
            {el.title}
          </a>
        </div>
      ))}
    </div>
  );
};
