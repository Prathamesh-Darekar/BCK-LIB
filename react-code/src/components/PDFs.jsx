/* eslint-disable react/prop-types */
import PDFViewer from "./PdfViewer";

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
              link.split("/")[2].split("_").join(" ").split(".pdf").join("")
            )}
          </span>
          <div className="prev-btns">
            <button>Preview</button>
            <button>Download</button>
          </div>
          <PDFViewer filePath={link} />
        </div>
      ))}
    </div>
  );
};

export default PDFs;
