/* eslint-disable react/prop-types */

const PDFs = ({ links }) => {

  function modifyText(text) {
    var txt = text.split(" ").slice(1);

    txt[3] = "";

    return txt.join(" ");
  }

  console.log(links);

  return (
    <div className="pdf-cards">
      {links.length <= 0 && "No links"}
      {links.map((link, i) => (
        <div key={i} className="pdf-card">
          <span className="pdf-text">
            {modifyText(
              link.title.split("_").join(" ").split(".pdf").join("")
            )}
          </span>
          <div className="prev-btns">
            <button data-bs-toggle="modal" data-bs-target="#videoModal" >Preview</button>
            <button>Download</button>
          </div>

          <div
            className="modal fade"
            id="videoModal"
            tabIndex="-1"
            aria-labelledby="videoModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"
              style={{ display: "flex" }}
            >
              <div className="modal-content mdl-video">
              <button
              style={{position: "relative", left: "95%"}}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <iframe
                  src={link.link}
                  
                  style={{width : "100%", height: "80vh"}}
                  allow="autoplay"
                ></iframe>

                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PDFs;
