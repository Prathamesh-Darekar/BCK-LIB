import { useNavigate } from "react-router-dom";
import { courses } from "../constants";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="card-container">
      {courses.map((el, i) => (
        <div
          className="cards"
          key={i}
          onClick={() => {
            navigate(el.title.replace(".", "").toLowerCase());
          }}
        >
          <img
            className="image"
            src={el.img}
            alt="img"
            width={220}
            height={210}
          />
          <a href="#" className="link">
            {el.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
