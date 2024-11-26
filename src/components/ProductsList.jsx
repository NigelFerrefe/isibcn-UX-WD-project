import jewelsData from "../data/Jewels.json";
import ProductsCard from "./ProductCard";

function ProductsList() {
  return (
    <>
      <div className="container-products">
        <h1>NUESTROS PRODUCTOS</h1>
        <section>
          {jewelsData.map((jewel) => (
            <article key={jewel.id}>
                <ProductsCard jewel={jewel}/>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default ProductsList;
