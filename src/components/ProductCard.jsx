import { useState } from "react";
import "./ProductCard.css";
function ProductsCard({ jewel: { name, price, description } }) {
  const [number, setNumber] = useState(0);
  const [addChart, setAddChart] = useState();
  const [toggleText, setToggleText] = useState("AÑADIR EN EL CARRITO");

  const handleIncrement = () => setNumber(number + 1);

  const handleDecrement = () => setNumber(number - 1);
  const handleAddChart = () => {
    if (addChart) {
      setAddChart(false);
      setToggleText("AÑADIR EN EL CARRITO");
      console.log("Product deleted to chart list");
    } else {
      setAddChart(true);
      setToggleText("EN EL CARRITO");
      console.log("Product added to chart list");
    }
  };

  return (
    <article className="container-card">
      <img src="" alt="main image" />
      <h4>{name}</h4>
      <h4>{price}.00 €</h4>
      <p>{description}</p>
      <h5>El proceso</h5>
      <div className="process-imgs">
        <img src="" alt="image1" />
        <img src="" alt="image2" />
        <img src="" alt="image3" />
        <img src="" alt="image4" />
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
