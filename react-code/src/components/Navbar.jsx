import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bck-navbar p-3"
      onClick={() => {
        navigate("/");
      }}
    >
      <span>BCK LIB</span>
    </div>
  );
};

export default Navbar;
