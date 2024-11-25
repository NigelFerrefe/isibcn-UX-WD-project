import jewelsData from "../data/Jewels.json";
import ProductsCard from "./ProductCard";

function ProductsList() {
  return (
    <>
      <section>
        <ul>
          {jewelsData.map((jewel) => (
            <li key={jewel.id}>
                <ProductsCard jewel={jewel}/>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ProductsList;
