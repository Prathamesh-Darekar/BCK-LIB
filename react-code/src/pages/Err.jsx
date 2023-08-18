import { useNavigate } from "react-router-dom";

const Err = () => {
  const navigate = useNavigate();

  return (
    <div id="err-page">
      <h3>¯\_(ツ)_/¯</h3>
      <span>
        The page you entered doesn&apos;t exist!{" "}
        <span
          onClick={() => {
            navigate("/");
          }}
          className="err-span"
        >
          home.
        </span>
      </span>
    </div>
  );
};

export default Err;
