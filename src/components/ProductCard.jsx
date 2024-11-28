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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    setToggleText(addChart ? "Añadir en el carrito" : "Añadido en el carrito");
    setNumber(0);
    setTimeout(() => {
      setToggleText("Añadir en el carrito");
      setAddChart(false);
    }, 3000);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showPopup = (image) => {
    setSelectedImage(image);
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
    setSelectedImage(null);
  };
  useEffect(() => {
      setBagIcon(chartCount === 0 ? emptyBagIcon : fullBagIcon);
    }, [chartCount, setBagIcon]);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
      };
    
      const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
      };
    
      const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
    
        const swipeDistance = touchStart - touchEnd;
        const threshold = 50;
    
        if (swipeDistance > threshold) {
          handleNext();
        }
    
        if (swipeDistance < -threshold) {
          handlePrev();
        }
    
        setTouchStart(null);
        setTouchEnd(null);
      };
    
      const handleImageClick = () => {
        handleNext();
      };

  return (
    <article className="container-card">
      {isPopupVisible && (
        <ExpandImage selectedImage={selectedImage} hidePopup={hidePopup} />
      )}
      <div
        className="carousel"
        onTouchStart={(e) => setTouchStart(e.targetTouches[0]?.clientX)}
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0]?.clientX)}
        onTouchEnd={() => {
          if (!touchStart || !touchEnd) return;

          const swipeDistance = touchStart - touchEnd;
          const threshold = 50;

          if (swipeDistance > threshold) {
            handleNext();
          }

          if (swipeDistance < -threshold) {
            handlePrev();
          }

          setTouchStart(null);
          setTouchEnd(null);
        }}
      >
        <img
          className="carousel-pictures"
          src={main_image[currentIndex]}
          alt={`Main image ${currentIndex + 1} of carousel`}
          onClick={handleImageClick} // Works for both desktop and mobile
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="container-details">
        <h4>{name}</h4>
        <h4>{price}.00 €</h4>
        <p>{description}</p>
        <div className="all-btns">
          <div className="container-btns">
            <button onClick={handleDecrement}>
              <img src={minusIcon} alt="minus-icon" className="icons" />
            </button>
            <p>{number}</p>
            <button onClick={handleIncrement}>
              <img src={plusIcon} alt="plus-icon" className="icons" />
            </button>
          </div>

          <button
            className={!addChart ? "add-chart" : "toggle"}
            onClick={handleAddChart}
          >
            {toggleText}
          </button>
        </div>
      </div>
      <div className="container-process-wrap">
        <h4>El proceso</h4>
        <div className="container-process">
          {images.map((image, index) => (
            <img
              className="process-img"
              onClick={() => showPopup(image)}
              key={index}
              src={image}
              alt={`Process step ${index + 1}`}
            />
          ))}
        </div>
        <h4>From Rock to Ring</h4>
      </div>
    </article>
  );
}

export default ProductsCard;
