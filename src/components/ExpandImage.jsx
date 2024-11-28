import "./ExpandImage.css";

function ExpandImage({ selectedImage, hidePopup }) {
  return (
    <div>
      <div className="popup-overlay">
            <div className="popup-background" onClick={hidePopup}></div>{" "}
                <div className="popup-container">
      {/*           <button onClick={hidePopup} className="close-button">X</button> */}
                <img src={selectedImage} alt="Expanded view" className="expanded-image" />
                </div>
        </div>
    </div>
  );
}

export default ExpandImage;
