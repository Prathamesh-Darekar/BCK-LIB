import bca from "../assets/BCApic.jpg";
import bcom from "../assets/BCompic.jpg";
import bsc from "../assets/BSCpic.jpg";
import bba from "../assets/BBApic.jpg";

const Home = () => {
  var courses = [
    { title: "BCA", id: "bca", img: bca },
    { title: "BSC", id: "bsc", img: bsc },
    { title: "B.Com", id: "bcom", img: bcom },
    { title: "BBA", id: "bba", img: bba },
  ];
  return (
    <div id="card-container">
      {courses.map((el, i) => (
        <div className="cards" key={i}>
          <img className="image" src={el.img} alt="img" width={220} height={210}/>
          <a href="#" className="link">
            {el.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
