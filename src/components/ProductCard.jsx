import { useState, useEffect } from "react";
import "./ProductCard.css";
import ExpandImage from "../components/ExpandImage.jsx";
import plusIcon from "../assets/plusicon.svg";
import minusIcon from "../assets/minusicon.svg";
import emptyBagIcon from "../assets/EMPTYBAG.svg";
import fullBagIcon from "../assets/FULLBAG.svg";

function ProductsCard({
  jewel: { name, main_image, price, description, images },
  addChart,
  setAddChart,
  chartCount,
  setChartCount,
  bagIcon,
  setBagIcon,
  updateBagIcon,
}) {
  const [number, setNumber] = useState(0);
  const [toggleText, setToggleText] = useState("Añadir en el carrito");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleIncrement = () => setNumber(number + 1);
  const handleDecrement = () => number > 0 && setNumber(number - 1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === main_image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? main_image.length - 1 : prevIndex - 1
    );
  };

  const handleAddChart = () => {
    setChartCount(chartCount + number);
    updateBagIcon();
    setAddChart(!addChart);
    setToggleText(addChart ? "Añadir en el carrito" : "En el carrito");
    // setNumber(0);
  };

  useEffect(() => {
    setBagIcon(chartCount === 0 ? emptyBagIcon : fullBagIcon);
  }, [chartCount, setBagIcon]);

  return (
    <article className="container-card">
      {isPopupVisible && <ExpandImage selectedImage={selectedImage} hidePopup={hidePopup} />}
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="carousel-pictures"
          src={main_image[currentIndex]}
          alt={`Main image ${currentIndex + 1} of carousel`}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* <div className="carousel-buttons">
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div> */}

      <div className="container-details">
        <h4>{name}</h4>
        <h4>{price}.00 €</h4>
        <p>{description}</p>
        <h5>El proceso</h5>
      </div>

      <div className="container-process">
        {images.map((image, index) => (
          <img
            className="process-img"
            onClick={() => showPopup(image)}
            key={index}
            src={image}
            alt={`${image} process`}
          />
        ))}
      </div>

      <div className="container-btns">
        <button onClick={handleDecrement}>
          <img src={minusIcon} alt="minus-icon" className="icons" />
        </button>
        <p>{number}</p>
        <button onClick={handleIncrement}>
          <img src={plusIcon} alt="plus-icon" className="icons" />
        </button>
      </div>

      <div>
        <button
          className={!addChart ? "add-chart" : "toggle"}
          onClick={handleAddChart}
        >
          {toggleText}
        </button>
      </div>
    </article>
  );
}

export default ProductsCard;