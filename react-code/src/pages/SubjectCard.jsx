/* eslint-disable react/prop-types */
export const SubCard = ({ sub }) => {
    return (
      <div id="sem-card-container">
        {sub.map((el, i) => (
          <div className="sem-cards sub-card" key={i}>
            <a href="#" className="sem-link">
              {el.slice(0, 1).toUpperCase() + el.slice(1)}
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  