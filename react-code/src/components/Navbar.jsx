import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bck-navbar p-3"
        onClick={() => {
          navigate("/");
        }}
      >
        <span>BCK LIB</span>
      </div>
      <div className="route-specifier">
        <span>{window.location.pathname == '/' ? "" : window.location.pathname.split("%20").join("_")}</span>
      </div>
    </>
  );
};

export default Navbar;
