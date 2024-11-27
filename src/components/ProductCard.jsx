import { useState } from "react";
import "./ProductCard.css";

function ProductsCard({
  jewel: { name, main_image, price, description, images },
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [number, setNumber] = useState(0);
  const [addChart, setAddChart] = useState();
  const [toggleText, setToggleText] = useState("AÑADIR EN EL CARRITO");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % main_image.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? main_image.length - 1 : prevIndex - 1
    );
  };

  const handleIncrement = () => setNumber(number + 1);

  const handleDecrement = () => setNumber(number - 1);
  const handleAddChart = () => {
    setAddChart(!addChart);
    setToggleText(addChart ? "AÑADIR EN EL CARRITO" : "EN EL CARRITO");
    setNumber(0);
    console.log(
      addChart ? "Product deleted to chart list" : "Product added to chart list"
    );
  };

  return (
    <article className="container-card">
      <div className="carousel">
        <img
          className="carousel-pictures"
          src={main_image[currentIndex]}
          alt={`Main image ${currentIndex + 1} of carousel`}
        />
      </div>

      <div className="carousel-buttons">
        <button onClick={handlePrev}>Siguiente</button>
        <button onClick={handleNext}>Anterior</button>
      </div>

      {/*<img className="main-image" src={main_image} alt="main image" />*/}
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
            key={index}
            src={image}
            alt={`${image} process`}
          />
        ))}
      </div>
      <div className="container-btns">
        <button onClick={handleDecrement}>-</button>
        <p>{number}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <button className="add-chart" onClick={handleAddChart}>
          {toggleText}
        </button>
      </div>
    </article>
  );
}

export default ProductsCard;
